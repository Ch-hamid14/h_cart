import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {login} from '../redux/slices/AuthSlice'
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.length == 0 || password.length == 0) {
      alert("Provide Valid information");
      return;
    }
    if (!emailRegExp.test(email)) {
      alert("Provide accurate Email");
      return;
    }
    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: email,
        password: password,
      })
      .then((response) => {
        dispatch(login({email,password}))
        navigate('/')
        setEmail(""); 
        setPassword("");
      });

  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            🌟 Welcome Back to H-Cart - Where Your Shopping Story Continues! 🛍️
          </h1>
          <p className="leading-relaxed mt-4">
            Your wishlist 🎁, order history, and personalized recommendations
            are just a login 🔒 away. Rediscover your favorite items
            effortlessly.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Login
          </h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
              className="w-full bg-white rounded border border-gray-300 
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700
               py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none
           hover:bg-indigo-600 rounded text-lg"
            onClick={handleLogin}
          >
            Login
          </button>
          <Link to="/signup">
            <p className="text-[18px] text-center text-gray-500 mt-3">
              Don't have an account Signup?
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
