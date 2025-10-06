import React from "react";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";

const Product = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] flex flex-col justify-start items-center py-[20px] bg-gradient-to-l from-[#141414] to-[#0c2025]">
      <div className="w-[100%] min-h-[70px] flex flex-col justify-center items-center gap-[10px]">
        <LatestCollection></LatestCollection>
      </div>
      <div className="w-[100%] min-h-[70px] flex flex-col justify-center items-center gap-[10px]">
        <BestSeller></BestSeller>
      </div>
    </div>
  );
};

export default Product;
