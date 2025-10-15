import React from "react";
import { useShopContext } from "../contexts/ShopContext";
import Title from "./Title";

function CartTotal() {
  const { getCartAmount, delivery_fee } = useShopContext();
  return (
    <div className="w-full lg:ml-[30px]">
      <div className="text-xl py-[10px]">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm p-[10px] border-[2px] border-[#4d8890]">
        <div className="flex justify-between text-white text-[18px] p-[10px]">
          <p>Subtotal</p>
          <p>&#8377;{getCartAmount()}.00</p>
        </div>
        <div className="flex justify-between text-white text-[18px] p-[10px]">
          <p>Shipping fee</p>
          <p>&#8377;{delivery_fee}.00</p>
        </div>
        <div className="flex justify-between text-white text-[18px] p-[10px]">
          <b>total</b>
          <p>
            &#8377;{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
