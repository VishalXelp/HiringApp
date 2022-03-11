/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Header from "./header/loginHeader";

export function Login() {
  const [flag, setFlag] = useState(false);
  
  return (
    <div>
      <div className="bg-gray-200 h-full">
        <Header />

        <div className="flex  justify-center ml-44 mr-44 mt-6 pb-24 ">
          <div className="bg-red-500 rounded-xl  w-full h-full flex flex-col ">
            <div className="text-orange-50 text-2xl mt-10 ml-52">
              {" "}
              Welcome to the Hiring App aka Rooster App !{" "}
            </div>{" "}
            <br />
            <div className="text-orange-50 text-base ml-72">
              {" "}
              Signup to take the full advantage of this platform{" "}
            </div>
            <div className="flex flex-row">
              <div className="text-gray-800  text-xl ml-96 mt-4">
                {" "}
                <button
                  className="bg-green-400 p-2 rounded-3xl"
                  onClick={() => {
                    setFlag(false);
                  }}
                >
                  Sign in
                </button>{" "}
              </div>
              <div className="text-gray-200  text-xl ml-1 mt-4 mb-1">
                {" "}
                <button
                  className="bg-gray-900 p-2 rounded-3xl"
                  onClick={() => {
                    setFlag(true);
                  }}
                >
                  Signup
                </button>{" "}
              </div>
            </div>

            {/* 
              card for login  */}

            {flag ? <Signup flag={flag} setFlag={setFlag} /> : <Signin />}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const submitValue = () => {
    
    // form data will be used for backend integration . 
    // const frmdetails = {
    //   "User Name": username,
    //   password: password,
    // };
    // console.log(frmdetails);

    if (username === "" || password.length < 6) {
      setPasswordError(true);
      setUsernameError(true);
    }

    var name = localStorage.getItem("Name");
    var pas = localStorage.getItem("password");

    if (name === username && pas === password) {
      console.log("Mission succesgul ");
      navigate("/home");
    }
  };

  return (
    <div>
      <div className=" ml-80 mt-2 w-full max-w-xs pb-8 mb-4">
        <form className="bg-white shadow-md rounded px-8 pt-6  pb-10 mb-10">
          <div className="text-gray-700 text-2xl mb-4 ml-16 ">Log In Page</div>
          <div className="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              className={
                usernameError
                  ? "shadow appearance-none  border-2 placeholder-red-700 border-red-600 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  : "shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              }
              id="username"
              type="text"
              placeholder={
                usernameError ? "Please Enter the correct Name  " : "UserName"
              }
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className={
                passwordError
                  ? "shadow appearance-none border-2 placeholder-red-700 border-red-600 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  : "shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              }
              id="password"
              type="password"
              placeholder={"******************"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={passwordError ? "text-sm text-red-500 " : "hidden"}>
              {" "}
              password is too short{" "}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={submitValue}
            >
              Sign In
            </button>

            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <div className="text-sm text-gray-200 ml-16">
          {" "}
          copyright text dummy xyz
        </div>
      </div>
    </div>
  );
}

export function Signup(props) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    localStorage.setItem("Name", Name);
    localStorage.setItem("Email", Email);
    localStorage.setItem("password", password);
  };

  const handleClick = () => {
    props.setFlag(false);
  };

  return (
    <div>
      <div class=" ml-20 mr-20 mt-2  ">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-16 mb-10">
          <p className="text-gray-700 text-2xl ml-10 mb-8">
            {" "}
            Register yourself on our Platform , Register Now for Free !!!{" "}
          </p>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Enter your name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder=" Enter your name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Enter your email ID
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder=" Enter your email ID"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div class="mb-1">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Choose a Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Choose a Password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Reenter Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Reenter Password"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Register
            </button>
            <a
              class="cursor-pointer inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              onClick={handleClick}
            >
              Alredy Registered ? Log In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
