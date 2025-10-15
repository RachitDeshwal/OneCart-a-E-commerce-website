import React from "react";

function NewLetterBox() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-[99vw] h-[40vh] flex flex-col justify-start items-center gap-[10px] bg-gradient-to-l from-[#141414] to-[#0c2025]  ">
      <p className="md:text-[30px] text-[20px] text-[#a5faf7] font-semibold px-[20px] ">
        Subscribe Now & get 20% off
      </p>
      <p className="md:text-[18px] text-[14px] font-semibold text-center text-blue-100 px-[20px] ">
        Subscribe Now and Enjoy exclusive savings, Special Deals and Early
        access to the new Collection.
      </p>
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-[100%] h-[30%] md:h-[50%] flex items-center justify-center mt-[20px] gap-[20px] px-[20px] "
      >
        <input
          type="email"
          placeholder="Enter your Email"
          className="placeholder:text-black bg-slate-300 w-[600px] h-[40px] max-w-[60%] px-[20px] rounded-lg shadow-sm shadow-black"
          required
        />
        <button className="text-[15px] md:text-[16px] px-[10px] md:px-[30px] py-[12px] md:py-[10px] hover:bg-slate-500 cursor-pointer  bg-[#2e3030c9] flex justify-center items-center text-white gap-[20px] border-[1px]  border-[#80808049] rounded-lg shadow-sm shadow-black">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewLetterBox;
