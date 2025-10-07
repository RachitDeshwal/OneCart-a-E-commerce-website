import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { useShopContext } from "../contexts/ShopContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { products, cartItem, updatedQuantity } = useShopContext();
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let tempData = [];
    for (let items in cartItem) {
      for (let item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData);
    console.log(tempData);
  }, [cartItem]);
  return (
    <div className="w-[99vw] min-h-[100vh] p-[20px] overflow-hidden bg-gradient-to-l from-[#141414] to-[#0c2025] ">
      <div className="w-[100%] h-[8%] mt-[80px] text-center">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div className="w-[100%] h-[92%] flex flex-wrap gap-[20px]">
        {cartData.map((item, index) => {
          let productData = products.find((product) => product._id == item._id);

          return (
            <div key={index} className="w-[100%] h-[10%] border-b border-t ">
              <div className="w-[100%] h-[100%] flex items-start gap-6 bg-[#51808048] px-[20px] py-[10px] rounded-2xl relative ">
                <img
                  src={productData.image1}
                  className="w-[100px] h-[100px] rounded-md"
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
