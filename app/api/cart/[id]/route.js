import { NextResponse } from "next/server";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../service/firebaseConfig";
export const GET = async (_, { params }) => {
  //const data = [];
  const { id } = params;
  console.log("id", id);
  const colRef = collection(db, "users");
  const docRef = doc(colRef, id);
  //console.log("docRef", docRef);
  //const itemRef = db.collection("users").doc(initialUser);
  const data = await getDoc(docRef).then(
    (doc) => doc.data()
    //console.log('snap', snapshot));
  );
  console.log('data', data)
  return NextResponse.json(data?.cart);
};

export const POST = async (request) => {
  const data = await request.json();
  console.log(data);
  // crear registro, modificar algo, BD, etc.

  return NextResponse.json(data);
};
