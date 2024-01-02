import { auth, db } from "@/service/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export const findItem = (list, find) =>
  list.filter((item) => item.slug === find);

export const hasFalsyAttributes = (obj) =>
  Object.values(obj).some((value) => !value);

export const generateId = (prefix = "id") => {
  const uniqueId = Date.now().toString(36);
  return `${prefix}-${uniqueId}`;
};

export function setCookie(name, value, time) {
  const cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};`;

  if (time) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + time);

    const cookieParts = [
      `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
      `expires=${expirationDate.toUTCString()}`,
    ];

    document.cookie = cookieParts.join("; ");
  }
}

export function getCookie(name) {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=").map((c) => c.trim());

    if (cookieName === encodeURIComponent(name)) {
      return decodeURIComponent(cookieValue);
    }
  }

  return null;
}

export function deleteCookie(name) {
  document.cookie = `${encodeURIComponent(
    name
  )}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}

export const authenticate = () => {
  return new Promise((res, rej) => {
    try {
      const result = getCookie("shareAppCookie");
      res(result);
    } catch (error) {
      rej(error);
    }
  });
};

export const createDocument = async (docId) => {
  const myCollection = collection(db, "users");
  try {
    // Add a new document to the collection
    const newDocRef = doc(myCollection, docId);
    await setDoc(
      newDocRef,
      {
        cart: [],
        orders: [],
      },
    );

    console.log("Document added with ID:", newDocRef.id);
    return { status: 200 };
  } catch (error) {
    console.error("Error adding document:", error.message);
  }
};

export const authCheckServerSide = async () => {
  console.log('checking')
  console.log('authhhhhhhhhh', auth)
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("signed in", user);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log("user uid", uid);
      return uid;
      // ...
    } else {
      console.log("user signed out");
      return false
      // User is signed out
      // ...
    }
  });
};
