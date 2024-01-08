// Toast.js

import React, { useState, useEffect } from "react";

const Toast = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose && onClose(); // Call the onClose function after 1.5 seconds
    }, 1500);

    return () => clearTimeout(timer);
  }, [onClose]);

  const toastStyle = {
    display: isVisible ? "block" : "none",
    position: "fixed",
    top: "0",
    right: "0",
    margin: "1rem",
    padding: "1rem",
    borderRadius: "0.5rem",
    backgroundColor: type === "success" ? "#4CAF50" : "#F44336",
    color: "#fff",
    transition: "opacity 0.3s ease-in-out", // Add a fade transition
    opacity: isVisible ? 1 : 0,
  };

  return <div style={toastStyle}>{message}</div>;
};

export default Toast;
