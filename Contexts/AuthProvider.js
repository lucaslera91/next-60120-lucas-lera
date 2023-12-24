"use client";
import { auth } from "@/firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    userName: null,
  });

  const logIn = (userName, password) =>
    console.log("logInHandler(userName, password);");
  const logOut = (userName) => console.log("logInHandler(userName)");
  const createUser = (email, userName, password) =>
    console.log("logInHandler(email, userName, password);");

  return (
    <AuthContext.Provider
      value={{
        logIn,
        logOut,
        createUser,
        // editCart,
        // setCartList
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
// const AuthProvider = () => {
//   return (
//     <div>AuthProvider</div>
//   )
// }

export function useAuthContext() {
  return useContext(CartContext);
}

export default AuthProvider;
