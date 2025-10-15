import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuthContext } from "../Contexts/AuthContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Nav = () => {
  let navigate = useNavigate();
  let { serverUrl } = useAuthContext();
  const handleLogOut = async () => {
    try {
      const result = await axios.get(
        `${serverUrl}/api/auth/logout`,
        {},
        { withCrediantials: true }
      );
      console.log(result);
      toast.success("Log out successfully");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-[100vw] h-[70px] fixed top-0 flex items-center justify-between bg-[#dcdbdbf8] z-10 px-[30px] overflow-x-hidden shadow-md shadow-black ">
      <div
        className="w-[30%] flex items-center justify-start gap-[10px] cursor-pointer "
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} alt="" className="w-[30px]" />
        <h1 className="text-[25px] text-black font-sans">OneCart</h1>
      </div>
      <button
        className="text-[15px] rounded-2xl text-white px-[20px] py-[10px] bg-[#000000ca] border-[#89daea] hover:border-[2px] cursor-pointer"
        onClick={() => handleLogOut()}
      >
        LogOut
      </button>
    </div>
  );
};

export default Nav;
