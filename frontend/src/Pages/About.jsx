import React from "react";
import Title from "../components/Title";
import about from "../assets/about.jpg";
import NewLetterBox from "../components/NewLetterBox";

const About = () => {
  return (
    <div className="w-[99vw] min-h-[100vh] flex flex-col justify-center items-center gap-[50px] mt-[70px] bg-gradient-to-l from-[#141414] to-[#0c2025] ">
      <Title text1={"ABOUT"} text2={"US"} />
      <div className="w-[100%] flex flex-col justify-center items-center lg:flex-row">
        <div className="lg:w-[50%] w-[100%] flex justify-center items-center">
          <img
            src={about}
            alt=""
            className="lg:w-[65%] w-[80%] shadow-md rounded-sm shadow-black"
          />
        </div>
        <div className="lg:w-[50%] w-[80%] flex flex-col justify-center items-start gap-[20px] mt-[20px] lg:mt-[0px]">
          <p className="text-white lg:w-[80%] w-[100%] md:text-[16px] text-[13px]">
            OneCart born for smart, Seamless shopping-created to deliver quality
            products trending styles, and everday essentials in one place.With
            Reliable service, fast delivery , and great value, OneCart makes
            your online shopping experience simple, satisfying, and stress-free.
          </p>
          <p className="text-white lg:w-[80%] w-[100%] md:text-[16px] text-[13px]">
            modern shoppers-combining style, convenience and
            affordability.Whether it's fashion ,essentials or trends, we bring
            everything you need to one trusted platform with fast delivery, easy
            returns and a customer-first shopping experience you'll love.
          </p>
          <p className="text-white lg:w-[80%] w-[100%] md:text-[18px] text-[15px] font-bold mt-[10px]">
            Our Mission!
          </p>
          <p className="text-white lg:w-[80%] w-[100%] md:text-[16px] text-[13px]">
            Our Mission is to redefine online shopping by delivering quality,
            affordability, convenience. OneCart connects customer with trusted
            products and brands, offering a seamless, customer focused
            experience that saved time, adds value, and fits every lifestyle and
            need.
          </p>
        </div>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center gap-[10px] ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
        <div className="w-[80%] flex justify-center items-center flex-col lg:flex-row  py-[40px]">
          <div className="lg:w-[33%] w-[90%] border-[1px] border-gray-100 h-[250px] flex flex-col justify-center items-center gap-[20px] px-[40px] py-[10px] text-white backdrop-blur-[2px] bg-[#ffffff0b] ">
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              Quality Assurance
            </b>
            <p className="">
              We guarantee quality through strict checks, reliable sourcing
              commitment to customer satisfaction always
            </p>
          </div>
          <div className="lg:w-[33%] w-[90%] border-[1px] border-gray-100 h-[250px] flex flex-col justify-center items-center gap-[20px] px-[40px] py-[10px] text-white backdrop-blur-[2px] bg-[#ffffff0b] ">
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              Convenience
            </b>
            <p className="">
              Shop easily with fast delivery, simple navigation, secure checkout
              and everything you need in one place.
            </p>
          </div>
          <div className="lg:w-[33%] w-[90%] border-[1px] border-gray-100 h-[250px] flex flex-col justify-center items-center gap-[20px] px-[40px] py-[10px] text-white backdrop-blur-[2px] bg-[#ffffff0b] ">
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              Exceptional Customer Service
            </b>
            <p className="">
              Our dedicated support team ensures quick responses, helpful
              solutions and a smooth shopping experience every time.
            </p>
          </div>
        </div>
      </div>
      <NewLetterBox />
    </div>
  );
};

export default About;
