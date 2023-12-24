"use client";
import { auth } from "@/service/firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    userName: null,
  });

  const logIn = async (email, password) => {
    console.log("handle log in");
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user); 
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  //console.log("logInHandler(userName, password);");
  const logOut = async (userName) => {
    return signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const registerUser = async (email, password) => {
    console.log(email, password);

    return await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        return { status: 200 };
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { errorMessage };
        // ..
      });
  };
  const authCheck = async () => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        logIn,
        // logOut,
        registerUser,
        // authCheck,
        user,
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
  return useContext(AuthContext);
}

export default AuthProvider;
