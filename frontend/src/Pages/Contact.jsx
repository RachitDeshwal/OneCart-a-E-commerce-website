import React from "react";
import Title from "../components/Title";
import contact from "../assets/contact.jpg";
import NewLetterBox from "../components/NewLetterBox";

const Contact = () => {
  return (
    <div className="w-[99vw] min-h-[100vh] flex flex-col justify-center items-center gap-[50px] mt-[70px] bg-gradient-to-l from-[#141414] to-[#0c2025] ">
      <Title text1={"CONTACT"} text2={"US"} />
      <div className="w-[100%] flex flex-col items-center justify-center lg:flex-row">
        <div className="lg:w-[50%] w-[100%] flex items-center justify-center">
          <img
            src={contact}
            alt=""
            className="lg:w-[70%] w-[80%] shadow-md shadow-black rounded-sm"
          />
        </div>
        <div className="lg:w-[50%] w-[80%] flex flex-col gap-[20px] items-start justify-center mt-[20px] lg:mt-[0px]">
          <p className="lg:w-[80%] w-[100%] text-white font-bold lg:text-[18px] text-[15px]">
            Our Store
          </p>
          <p className="lg:w-[80%] w-[100%] text-white md:text-[16px] text-[13px] ">
            <p>12345 Random Station</p>
            <p>Random city, state ,country</p>
          </p>
          <p className="lg:w-[80%] w-[100%] text-white md:text-[16px] text-[13px] ">
            <p>tel: +91 6454626226</p>
            <p>Email: admin123@gmail.com</p>
          </p>
          <p className="lg:w-[80%] w-[100%] text-white lg:text-[18px] text-[15px] mt-[10px] font-bold">
            Careers at OneCart
          </p>
          <p className="lg:w-[80%] w-[100%] text-white md:text-[16px] text-[13px] ">
            Learn More about our teams and job openings
          </p>
          <button className="px-[30px] py-[20px] bg-transparent flex justify-center items-center text-white border active:bg-slate-600 rounded-md cursor-pointer ">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewLetterBox />
    </div>
  );
};

export default Contact;
