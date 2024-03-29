import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/logo.svg";
import { useLoginUserMutation } from "./services/userAuthApi";

function Login() {
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    const res = await loginUser(actualData);
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      // console.log(res.error.data.errors)
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      //console.log(typeof res.data);
      console.log(res.data);
      navigate("/");
    }
  };
  return (
    <div className="h-screen flex flex-col items-center">
      <Link to="/">
        <img
          className="mt-6 mb-1 object-contain ml-auto mr-auto w-48 h-10"
          src={logo}
          alt="Logo"
        />
      </Link>

      <div
        className="border-gray-200 border-solid border-2 mt-5 sm:w-80
       flex flex-col justify-center"
      >
        <form
          className="max-w-[400px] w-full mx-auto bg-white p-4"
          id="loginForm"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold pb-4">Sign In</h2>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input className="border p-2" type="email" name="email" />
          </div>
          {server_error.email ? (
            <p className="text-xs text-red-700 mb-1">{server_error.email[0]}</p>
          ) : (
            ""
          )}
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input className="border p-2" type="password" name="password" />
          </div>
          {server_error.password ? (
            <p className="text-xs text-red-700 mb-1">
              {server_error.password[0]}
            </p>
          ) : (
            ""
          )}
          {server_error.non_field_errors ? (
            <div
              className="mb-3 text-base text-red-700 inline-flex items-center w-full"
              role="alert"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="info-circle"
                className="w-4 h-4 mr-2 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                ></path>
              </svg>
              {server_error.non_field_errors[0]}
            </div>
          ) : (
            ""
          )}
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
