import React from "react";
import useFirebase from "../../hooks/useFiresbase";

export const AuthContext = React.createContext(null);
const AuthProvider = ({ children }) => {
  const allValue = useFirebase();
  return (
    <AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
