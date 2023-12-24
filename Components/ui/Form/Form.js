"use client";
import React, { useState, useEffect } from "react";

const Form = ({ type }) => {
  const error = "error msg";
  // const [error, setError] = useState()
  const [formData, setFormData] = useState({
    error: { status: false, message: "" },
    email: "",
    userName: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async () => {
      //submit to log in if log in 
      //submit to register if register
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <form
          className="bg-white p-8 rounded shadow-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold mb-4">{type}</h2>
          {formData?.error?.status && (
            <p className="text-red-500 mb-4">{formData?.error?.message}</p>
          )}
          {type === "Register" && (
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-medium mb-1"
              >
                User name
              </label>
              <input
                type="userName"
                id="userName"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Your user name"
                value={formData.userName}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Your email"
              value={formData?.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            {type}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
