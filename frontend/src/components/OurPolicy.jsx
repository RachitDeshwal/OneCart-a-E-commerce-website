import React from "react";
import Title from "./Title";
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
function OurPolicy() {
  return (
    <div className="w-[99vw] h-[100vh] md:h-[70vh] flex flex-col justify-start items-center gap-[50px] bg-gradient-to-l from-[#141414] to-[#0c2025]">
      <div className="h-[8%] w-[100%] mt-[70px] text-center">
        <Title text1={"Our"} text2={"Policy"} />
        <p className="w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100">
          Customer-Friendly - Policies Committed to your Satisfaction and
          Safety.
        </p>
      </div>
      <div className="w-[100%] h-[20%] md:min-h-[50%] flex flex-wrap justify-center items-center lg:gap-[50px] gap-[80px]">
        <div className="w-[400px] max-w-[90%] h-[60%] flex flex-col justify-center items-center gap-[10px] ">
          <RiExchangeFundsLine className="h-[30px] w-[30px] md:h-[60px] md:w-[60px] text-[#90b9ff]" />
          <p className="md:text-[25px] text-[19px] font-semibold text-[#a5e8f7]">
            Easy Exchange Policy
          </p>
          <p className="font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center">
            Exchange Made Easy - Quick, Simple and Customer Friendly Process.
          </p>
        </div>
        <div className="w-[400px] max-w-[90%] h-[60%] flex flex-col justify-center items-center gap-[10px] ">
          <TbRosetteDiscountCheckFilled className="h-[30px] w-[30px] md:h-[60px] md:w-[60px] text-[#90b9ff]" />
          <p className="md:text-[25px] text-[19px] font-semibold text-[#a5e8f7]">
            7 Days Return Policy
          </p>
          <p className="font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center">
            Shop with Confidence - 7 Days Easy Return Guarantee.
          </p>
        </div>
        <div className="w-[400px] max-w-[90%] h-[60%] flex flex-col justify-center items-center gap-[10px] ">
          <BiSupport className="h-[30px] w-[30px] md:h-[60px] md:w-[60px] text-[#90b9ff]" />
          <p className="md:text-[25px] text-[19px] font-semibold text-[#a5e8f7]">
            Best Customer Support
          </p>
          <p className="font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center">
            Trusted Customer Support - Your Satisfaction is our Priority.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurPolicy;
