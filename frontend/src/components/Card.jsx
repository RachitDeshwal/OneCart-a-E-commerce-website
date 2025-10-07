import React from "react";
import { useShopContext } from "../contexts/ShopContext";
import { useNavigate } from "react-router-dom";

function Card({ name, id, image, price }) {
  let { currency } = useShopContext();
  let navigate = useNavigate();
  return (
    <div
      className="w-[300px] max-w-[90%] h-[400px] bg-[#ffffff0a] backdrop:blur-lg rounded-lg hover:scale-[102%] flex items-start justify-start flex-col p-[10px] cursor-pointer border-[1px] border-[#80808049]"
      onClick={() => navigate(`/productdetail/${id}`)}
    >
      <img
        src={image}
        alt=""
        className="w-[100%] h-[80%] object-cover rounded-sm"
      />
      <div className="text-[18px] text-[#c3f6fa] py-[10px]">{name}</div>
      <div className="text-[14px] text-[#f3fafa]">
        &#8377;
        {price}
      </div>
    </div>
  );
}

export default Card;
