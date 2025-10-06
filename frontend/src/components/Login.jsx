import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../contexts/AuthContext";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/Firebase.js";
import { useUserContext } from "../contexts/UserContext.jsx";

const Login = () => {
  const { getCurrentUser } = useUserContext();
  let navigate = useNavigate();
  const loginwithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      const name = user.displayName;
      const email = user.email;
      const result = await axios.post(
        `${serverUrl}/api/auth/googlelogin`,
        { name, email },
        { withCredentials: true }
      );
      console.log(result.data);
      getCurrentUser();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  let { serverUrl } = useAuthContext();

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-[100vh] w-[100vw] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start">
      <div className="w-[100%] h-[100px] flex flex-col justify-center items-center gap-[10px]">
        <span className="text-[25px] font-semibold">Login Page</span>
        <span className="text-[16px]">
          Welcome to OneCart , Place your Order
        </span>
      </div>
      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center ">
        <form
          action=""
          onSubmit={handleLogin}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px] "
        >
          <div
            className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer"
            onClick={loginwithGoogle}
          >
            <img className="w-[50px] rounded-lg" src={google} alt="" />
            Login with Google
          </div>
          <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px] ">
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>OR
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
          </div>
          <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] ">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold "
              placeholder="Email"
              required
            />
            <input
              type={!show ? "password" : "text"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-[100%] h-[50px] border-[2px] relative border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold "
              placeholder="Password"
              required
            />
            {!show && (
              <IoEyeOutline
                className="w-[20px] h-[20px] cursor-pointer absolute right-[12%] bottom-[43%]"
                onClick={() => {
                  setShow((prev) => !prev);
                }}
              />
            )}
            {show && (
              <IoEye
                className="w-[20px] h-[20px] cursor-pointer absolute right-[12%] bottom-[43%]"
                onClick={() => {
                  setShow((prev) => !prev);
                }}
              />
            )}
            <button className="w-[100%] h-[50px] mt-[20px] rounded-lg flex items-center justify-center bg-green-600 cursor-pointer">
              Log in
            </button>
            <p className="flex gap-[10px] ">
              You haven't any Account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Create new Account
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
