import React from "react";
import logo from "./assets/logo.svg";
import { Link } from "react-router-dom";

function Register() {
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
          <h2 className="text-2xl font-bold pb-4">Create Account</h2>
          <div className="flex flex-col py-2">
            <label>Full Name</label>
            <input className="border p-2" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input className="border p-2" type="email" />
          </div>
          <div className="flex flex-col py-2">
            <label>Address</label>
            <input className="border p-2" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input className="border p-2" type="password" />
          </div>
          <div className="flex flex-col py-2">
            <label>Confirm Password</label>
            <input className="border p-2" type="password" />
          </div>
          <button className="border w-full my-4 py-2 bg-purple-400 hover:bg-purple-500 hover:text-white">
            Create account
          </button>
          <p className="text-center">Already have an account?</p>
          <Link to="/login">
            <button className="border w-full my-3 py-2 bg-purple-400 hover:bg-purple-500 hover:text-white">
              Sign in
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

export default Register;
