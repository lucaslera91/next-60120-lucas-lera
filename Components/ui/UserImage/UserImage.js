import React, { useState, useEffect } from "react";
import { storage } from "../../../service/firebaseConfig";
import {
  ref,
  uploadBytes,
  deleteObject,
  getDownloadURL,
} from "firebase/storage";

const UserImage = ({ id = "default" }) => {
  const initialImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYoPFYMpFpua5QA4XDZNWezBifJ-LHTvT1b51G_2MJg&s";
  const [imageUrl, setImageUrl] = useState(initialImg);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imgRef = ref(storage, "user/" + id);
        const url = await getDownloadURL(imgRef);
        setImageUrl(url);
      } catch (error) {
        setImageUrl("No image");
      }
    };
    fetchImage();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-10 h-10 border border-gray-300 rounded-full overflow-hidden">
        <img
          src={imageUrl === "No image" ? initialImg : imageUrl}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default UserImage;
