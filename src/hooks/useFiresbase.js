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
} from "firebase/auth";
import { useHistory } from "react-router";
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const auth = getAuth();
  const history = useHistory();
  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = (location, history) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { user } = result;
        setUser(user);
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
  const registerUser = (email, password, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        setError("");
        updateProfile(auth.currentUser, { displayName: name });
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
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubcribe;
  }, []);
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

  return {
    user,
    loading,
    registerUser,
    logoutUser,
    loginUser,
    error,
    loginWithGoogle,
  };
};

export default useFirebase;
