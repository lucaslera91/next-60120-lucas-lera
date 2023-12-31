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
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //   const [user, setUser] = useState({
  //     isAdmin: false,
  //     user,
  //   });
  const [user, setUser] = useState({
    isAdmin : false,
    isLoggedIn : false,
  })
  const router = useRouter();
  const logIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log('its being successfull.. ')
        return userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("this is an error");
        console.log('message', errorMessage)
        return { status: 500 };
      });
  };

  const isUserAdmin = () => {
    const userAuth = getAuth();
    console.log(userAuth);

    return true;
  };

  const logOut = async () => {
    return signOut(auth)
      .then((res) => {
        console.log("sign out succesfull", res);
        router.push("/LogIn");
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        return { status: 200 };
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
      console.log(user);
      if (user) {
        console.log("signed in", user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("user uid", uid);

        // ...
      } else {
        console.log("user signed out");
        router.push("/LogIn");
        // User is signed out
        // ...
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        logIn,
        logOut,
        registerUser,
        authCheck,
        user,
        setUser,
        isUserAdmin,
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
