import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { useShopContext } from "../contexts/ShopContext";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import CartTotal from "../components/CartTotal";

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
                <div className="flex items-start justify-center flex-col gap-[10px]">
                  <p className="md:text-[25px] text-[20px] text-[#f3f9fc]">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-[20px]">
                    <p className="text-[20px] text-[#aaf4e7]">
                      &#8377;{productData.price}
                    </p>
                    <p className="w-[40px] h-[40px] text-[16px] text-white bg-[#518080b4] rounded-md mt-[5px] flex items-center justify-center border-[1px] border-[#9ff9f9]">
                      {item.size}
                    </p>
                  </div>
                </div>
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  className="md:max-w-20 max-w-10 md:px-2 md:py-2 px-[10px] py-[5px] text-white text-[18px] font-semibold bg-[#515180b4] absolute md:top-[40%] top-[46%] md:left-[50%] left-[75%] border-[1px] border-[#9ff9f9] rounded-md"
                  onChange={(e) =>
                    e.target.value == "" || e.target.value == 0
                      ? null
                      : updatedQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                />
                <RiDeleteBin5Line
                  className="text-[#9ff9f9] h-[25px] w-[25px] absolute top-[50%] md:top-[40%] md:right-[5%] right-1 cursor-pointer"
                  onClick={() => updatedQuantity(item._id, item.size, 0)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-start items-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <button
            className="text-[18px] hover:bg-slate-500 cursor-pointer bg-[#51808048] py-[10px] px-[50px] rounded-2xl text-white flex justify-center items-center gap-[20px] border-[1px] border-[#80808049] ml-[30px] mt-[20px] "
            onClick={() => {
              if (cartData.length > 0) {
                navigate("/placeorder");
              } else {
                console.log("Your Cart is Empty");
              }
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
