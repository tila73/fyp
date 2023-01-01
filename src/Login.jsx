import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";

function Login() {
  return (
    <div className="h-screen flex flex-col items-center">
      <Link to="/">
        <img
          className="mt-6 mb-1 object-contain ml-auto mr-auto w-48 h-10"
          src={logo}
          alt="Logo"
        />
      </Link>

      <div className="border-gray-200 border-solid border-2 mt-5 sm:w-80 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-2xl font-bold pb-4">Sign In</h2>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input className="border p-2" type="email" />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input className="border p-2" type="password" />
          </div>
          <button className="border w-full my-4 py-2 bg-purple-400 hover:bg-purple-500 hover:text-white">
            Sign in
          </button>
          <p className="text-center">New Customer?</p>
          <Link to="/register">
            <button className="border w-full my-3 py-2 bg-purple-400 hover:bg-purple-500 hover:text-white">
              Create your account
            </button>
          </Link>
        </form>
      </div>
      <p className="mt-10">
        Copyright @ 2023, Pampered Pets. All rights reserved.
      </p>
    </div>
  );
}

export default Login;
