import React from "react";
import logo from "../assets/logo.png";
import { IoSearchCircleSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsCart } from "react-icons/bs";
import { useUserContext } from "../contexts/UserContext";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoSearchCircleOutline } from "react-icons/io5";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoMdHome } from "react-icons/io";
import { MdCollections } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { useShopContext } from "../contexts/ShopContext";
import { ToastContainer, toast } from "react-toastify";

const Nav = () => {
  let navigate = useNavigate();
  const { userData, setUserData } = useUserContext();
  let { showSearch, setShowSearch, search, setSearch, getCartCount } =
    useShopContext();
  const [showProfile, setShowProfile] = useState(false);
  const { serverUrl } = useAuthContext();
  const handleLogout = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/auth/logout`, {
        withCredentials: true,
      });
      setUserData(null);

      navigate("/login");
      toast.success("Log out successfully");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-[99vw] h-[70px] bg-[#ecfafaec] fixed top-0 z-10 flex justify-between items-center px-[30px] shadow-md shadow-black">
      <div className=" h-[80px] flex justify-start items-center px-[10px] gap-[10px] cursor-pointer">
        <img className="w-[40px]" src={logo} alt="" />
        <h1 className="text-[25px] font-sans text-black">OneCart</h1>
      </div>
      <div className="flex-1 flex justify-center">
        <ul className=" justify-center items-center gap-[19px] relative left-[17%] text-white hidden md:flex">
          <li
            className="text-[15px] hover:bg-slate-500 bg-[#000000c9] py-[10px] px-[20px] rounded-2xl cursor-pointer"
            onClick={() => {
              showSearch && setShowSearch(false);
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            className="text-[15px] hover:bg-slate-500 bg-[#000000c9] py-[10px] px-[20px] rounded-2xl cursor-pointer"
            onClick={() => navigate("/collection")}
          >
            Collections
          </li>
          <li
            className="text-[15px] hover:bg-slate-500 bg-[#000000c9] py-[10px] px-[20px] rounded-2xl cursor-pointer"
            onClick={() => {
              showSearch && setShowSearch(false);
              navigate("/about");
            }}
          >
            About
          </li>
          <li
            className="text-[15px] hover:bg-slate-500 bg-[#000000c9] py-[10px] px-[20px] rounded-2xl cursor-pointer hidden [@media(min-width:853px)]:block"
            onClick={() => {
              showSearch && setShowSearch(false);
              navigate("/contact");
            }}
          >
            Contact
          </li>
        </ul>
      </div>
      <div className="w-[30%] flex gap-[20px] items-center justify-end ">
        {showSearch && (
          <IoSearchCircleSharp
            onClick={() => {
              setShowSearch((prev) => !prev);
              navigate("/collection");
            }}
            className="cursor-pointer h-[38px] w-[38px] text-black hover:opacity-75 "
          />
        )}
        {!showSearch && (
          <IoSearchCircleOutline
            onClick={() => {
              setShowSearch((prev) => !prev);
              navigate("/collection");
            }}
            className="cursor-pointer h-[38px] w-[38px] text-black hover:opacity-70"
          />
        )}
        {!userData && (
          <CgProfile
            onClick={() => {
              setShowProfile((prev) => !prev);
            }}
            className="cursor-pointer h-[30px] w-[30px] text-black hover:opacity-70 "
          />
        )}
        {userData && (
          <div
            onClick={() => {
              setShowProfile((prev) => !prev);
            }}
            className=" flex items-center justify-center rounded-full cursor-pointer hover:opacity-70 bg-[#080808] text-white h-[30px] w-[30px] "
          >
            {userData?.name.slice(0, 1).toUpperCase()}
          </div>
        )}
        <BsCart
          className="cursor-pointer h-[30px] hover:opacity-70 w-[30px] hidden md:block text-black "
          onClick={() => navigate("/cart")}
        />
        <p className="h-[16px] w-[16px] text-white  bg-black absolute rounded-full hidden md:block items-center justify-center text-[9px] top-[18px] right-[25px] px-[2px] py-[2px] text-center ">
          {getCartCount()}
        </p>
      </div>
      {showSearch && (
        <div className="flex items-center justify-center absolute top-[100%] left-0 right-0 bg-[#d8f6f9dd] h-[80px] w-[100%]">
          <input
            type="text"
            className="lg:w-[50%] w-[80%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-white text-[18px]"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
      )}
      {showProfile && (
        <div className="absolute w-[220px] h-[150px] rounded-[10px] border-[1px] top-[110%] right-[4%] z-10 bg-[#000000d7]">
          <ul className="flex flex-col w-[100%] h-[100%] items-start justify-around text-[17px] py-[10px] text-white">
            {!userData && (
              <li
                className="cursor-pointer w-[100%] px-[15px] py-[10px] hover:bg-[#2f2f2f] "
                onClick={() => {
                  navigate("/login");
                  setShowProfile(false);
                }}
              >
                Log in
              </li>
            )}
            {userData && (
              <li
                className="cursor-pointer w-[100%] px-[15px] py-[10px] hover:bg-[#2f2f2f] "
                onClick={() => {
                  handleLogout();
                  setShowProfile(false);
                }}
              >
                Log out
              </li>
            )}
            <li
              className="cursor-pointer w-[100%] px-[15px] py-[10px] hover:bg-[#2f2f2f] "
              onClick={() => navigate("/order")}
            >
              Orders
            </li>
            <li
              className="cursor-pointer w-[100%] px-[15px] py-[10px] hover:bg-[#2f2f2f] "
              onClick={() => navigate("/about")}
            >
              About
            </li>
          </ul>
        </div>
      )}
      <div className="flex justify-between  items-center md:hidden fixed left-0 bottom-0 w-[100vw] h-[90px] bg-[#191818]">
        <button
          className="flex flex-col justify-around items-center cursor-pointer ml-3 text-[12px] gap-[2px] text-white"
          onClick={() => navigate("/")}
        >
          <IoMdHome className="w-[28px] h-[28px]" />
          Home
        </button>
        <button
          className="flex flex-col justify-around items-center cursor-pointer text-[12px] gap-[2px] text-white"
          onClick={() => navigate("/collection")}
        >
          <MdCollections className="w-[28px] h-[28px]" />
          Collections
        </button>
        <button
          className="flex flex-col justify-around items-center text-[12px] cursor-pointer  gap-[2px] text-white"
          onClick={() => navigate("/contact")}
        >
          <MdPermContactCalendar className="w-[28px] h-[28px]" />
          Contact
        </button>
        <button className="flex flex-col justify-around items-center mr-8 text-[12px] gap-[2px] cursor-pointer text-white">
          <FaCartShopping
            className="w-[28px] h-[28px]"
            onClick={() => navigate("/cart")}
          />
          Cart
        </button>

        <p className="w-[18px] h-[18px] absolute justify-center items-center flex bg-white px-[5px] py-[2px] text-black  font-semibold rounded-full text-[9px] top-[10px] right-[20px]  ">
          {getCartCount()}
        </p>
      </div>
    </div>
  );
};

export default Nav;
