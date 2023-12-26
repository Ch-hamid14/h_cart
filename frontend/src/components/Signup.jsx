import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import authToken from "../AuthToken";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/AuthSlice";
const Signup = () => {
  const user = useSelector(selectUser);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleCreateAccount = () => {
    console.log(user);
    if (email.length == 0 || password.length == 0) {
      alert("Provide Valid information");
      return;
    }
    const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegExp.test(email)) {
      alert("Provide accurate Email");
      return;
    }
    axios
      .post(
        "http://localhost:1337/api/auth/local/register",
        {
          email: email,
          password: password,
          username: userName,
        },
        {
          headers: {
            Authorization: `Bearer ` + authToken,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        alert("Account created Successfully");
        console.log(response);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            🌟 Welcome to H-Cart - Where Shopping 🛒 Meets Joy! 🎉
          </h1>
          <p className="leading-relaxed mt-4">
            🚀 Be the first to know about our latest collections, promotions,
            and special events. Get exclusive access to members-only discounts!
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="user-name"
              className="leading-7 text-sm text-gray-600"
            >
              User Name
            </label>
            <input
              type="text"
              id="user-name"
              name="username"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
               focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3
                leading-8 transition-colors duration-200 ease-in-out"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
               focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3
                leading-8 transition-colors duration-200 ease-in-out"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
               focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8
                transition-colors duration-200 ease-in-out"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-8 
          focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={handleCreateAccount}
          >
            Register
          </button>
          <Link to="/login">
            <p className="text-[18px] text-center text-gray-500 mt-3">
              Already have an account?
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
