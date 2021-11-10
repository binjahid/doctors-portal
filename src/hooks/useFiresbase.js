import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import {
  updateProfile,
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getIdToken,
} from "firebase/auth";
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = (location, history) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { user } = result;
        setUser(user);
        saveUserToDb(user.email, user.displayName, "PUT");
        const direction = location?.state?.from || "/";
        history.replace(direction);
        setError("");
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const registerUser = (email, password, name, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        setError("");
        updateProfile(auth.currentUser, { displayName: name });
        saveUserToDb(email, name, "POST");
        history.replace("/");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const loginUser = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const direction = location?.state?.from || "/";
        history.replace(direction);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  //user State observer
  useEffect(() => {
    setLoading(true);
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
        getIdToken(user).then((token) => {
          setToken(token);
        });
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubcribe;
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data.isAdmin);
      });
  }, [user.email]);
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        setUser("");
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const saveUserToDb = (email, name, method) => {
    const user = { email, name };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return {
    user,
    loading,
    registerUser,
    logoutUser,
    loginUser,
    error,
    loginWithGoogle,
    isAdmin,
    token,
  };
};

export default useFirebase;
