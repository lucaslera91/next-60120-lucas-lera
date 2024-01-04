import React from "react";

const Spinner = () => {
  return (
    <div className="h-100 flex items-center justify-center">
      <div className="border-t-4 border-blue-500 border-solid rounded-full h-16 w-16 animate-spin"></div>
    </div>
  );
};

export default Spinner;
