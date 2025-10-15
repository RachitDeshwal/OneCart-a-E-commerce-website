import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { useAuthContext } from "../contexts/AuthContext";
import axios from "axios";

function Order() {
  const [orderData, setOrderData] = useState([]);
  let { serverUrl } = useAuthContext();
  const loadOrderData = async (req, res) => {
    try {
      let result = await axios.post(
        `${serverUrl}/api/order/userorder`,
        {},
        { withCredentials: true }
      );

      if (result.data) {
        let allOrdersItem = [];
        result.data.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["date"] = order.date;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadOrderData();
  }, []);
  return (
    <div className="w-[99vw] min-h-[100vh] pb-[150px] p-[20px] overflow-hidden bg-gradient-to-l from-[#141414] to-[#0c2025]">
      <div className="h-[8%] w-[100%] text-center mt-[80px]">
        <Title text1={"MY"} text2={"ORDER"} />
      </div>
      <div
        className="w-[100%] h-[92%] flex flex-wrap gap-[20px] 
      "
      >
        {orderData.map((item, index) => (
          <div className="w-[100%] h-[10%] border-b border-t " key={index}>
            <div className="w-[100%] h-[80%] flex items-start gap-6 bg-[#51808048] px-[20px] py-[10px] rounded-2xl relative ">
              <img
                src={item.image1}
                alt=""
                className="w-[130px] h-[130px] rounded-md"
              />
              <div className="flex justify-center items-start gap-[5px] flex-col">
                <p className="md:text-[25px] text-[20px] text-[#f3f9fc]">
                  {item.name}
                </p>
                <div className="flex flex-wrap md:flex-nowrap items-center gap-[8px] md:gap-[20px]">
                  <p className="md:text-[18px] text-[12px] text-[#aaf4e7]">
                    &#8377;{item.price}
                  </p>
                  <p className="md:text-[18px] text-[12px] text-[#aaf4e7]">
                    Quantity:{item.quantity}
                  </p>
                  <p className="md:text-[18px] text-[12px] text-[#aaf4e7]">
                    Size:{item.size}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="md:text-[18px] text-[12px] text-[#aaf4e7]">
                    Date:
                    <span className="text-[#e4fbff] pl-[10px] md:text-[16px] text-[11px]">
                      {new Date(item.date).toDateString()}
                    </span>
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="md:text-[16px] text-[12px] text-[#aaf4e7]">
                    Payment Method: {item.paymentMethod}
                  </p>
                </div>
                <div className="absolute md:left-[55%] md:top-[40%] right-[2%] top-[2%]">
                  <div className="flex items-center gap-[5px]">
                    <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                    <p className="md:text-[17px] text-[10px] text-[#f3f9fc]">
                      {item.status}
                    </p>
                  </div>
                </div>
                <div className=" absolute md:right-[5%] right-[75%] bottom-[5%] md:bottom-[40%]">
                  <button
                    className="md:px-[15px] px-[5px] md:py-[7px] py-[3px] rounded-md bg-[#101919] text-[#f3f9fc] text-[11px] md:text-[16px] cursor-pointer active:bg-slate-500"
                    onClick={loadOrderData}
                  >
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
