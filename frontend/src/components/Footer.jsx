import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="w-[100%] h-[21vh]  md:h-[36vh] mb-[77px] md:mb-[0px]">
      <div className="w-[100%] h-[15vh] md:h-[30vh] flex  justify-center items-center bg-[#dbfcfcec] md:mb-[0px] md:px-[50px] px-[5px]">
        <div className="md:w-[30%] w-[35%] h-[100%] flex flex-col justify-center items-start gap-[5px]">
          <div className="flex justify-start  gap-[5px] mt-[10px] md:mt-[40px]">
            <img
              src={logo}
              alt=""
              className="w-[25px] h-[25px] md:h-[40px] md:w-[40px] "
            />
            <p className="text-[19px] md:text-[20px] text-black">OneCart</p>
          </div>
          <p className="text-[15px] text-[#1e2223] hidden md:block">
            OneCart is your all-in-one Online shopping destination, offering top
            quality products, unbeatable deals, and fast delivery-all backed by
            trusted services design to make your life easier every day.
          </p>
          <p className="text-[15px] text-[#1e2223] flex md:hidden">
            Fast. Easy. Reliable. OneCart Shopping
          </p>
        </div>
        <div className="md:w-[25%] w-[30%] h-[100%] flex justify-center items-center flex-col text-center">
          <div className="mt-[10px] md:mt-[40px] gap-[5px] flex justify-center items-center ">
            <p className="text-[19px] md:text-[20px] font-sans   text-[#1e2223]">
              COMPANY
            </p>
          </div>

          <ul>
            <li className="text-[15px] text-[#1e2223] cursor-pointer hidden md:block ">
              Home
            </li>
            <li className="text-[15px] text-[#1e2223] cursor-pointer ">
              About Us
            </li>
            <li className="text-[15px] text-[#1e2223] cursor-pointer hidden md:block ">
              Delivery
            </li>
            <li className="text-[15px] text-[#1e2223] cursor-pointer ">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="w-[25%] h-[100%]  items-center justify-center flex-col hidden md:flex text-center">
          <div className="mt-[10px] md:mt-[40px] gap-[5px] flex justify-center items-center ">
            <p className="text-[19px] md:text-[20px] font-sans   text-[#1e2223]">
              GET IN TOUCH
            </p>
          </div>
          <ul>
            <li className="text-[15px] text-[#1e2223] cursor-pointer hidden md:block ">
              +91 8754465465
            </li>
            <li className="text-[15px] text-[#1e2223] cursor-pointer ">
              connect@oncecart.com
            </li>
            <li className="text-[15px] text-[#1e2223] cursor-pointer hidden md:block ">
              +91-1-235-564-561
            </li>
            <li className="text-[15px] text-[#1e2223] cursor-pointer ">
              adminonecart@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[100%] h-[1px] sm:h-[2px] bg-slate-400"></div>
      <div className="w-[100%]  h-[5vh] flex items-center justify-center text-center bg-[#dbfcfced] ">
        Copyright 2025@onecart.com - All Rights are Reservred
      </div>
    </div>
  );
}

export default Footer;
