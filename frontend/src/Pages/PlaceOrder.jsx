import React from "react";
import Title from "../components/Title";
import { useState } from "react";
import CartTotal from "../components/CartTotal";
import razorpay from "../assets/Razorpay.jpg";
import { useShopContext } from "../contexts/ShopContext";
import axios from "axios";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

function PlaceOrder() {
  const navigate = useNavigate();
  let { cartItem, setCartItem, delivery_fee, getCartAmount, products } =
    useShopContext();
  let { serverUrl } = useAuthContext();
  const [loading, setLoading] = useState(false);
  let [method, setMethod] = useState("cod");
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    email: "",
    pincode: "",
  });
  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };
  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order payment",
      description: "Order Payment",
      order_id: order.id,

      reciept: order.reciept,
      handler: async (response) => {
        console.log(response);
        const { data } = await axios.post(
          `${serverUrl}/api/order/verify`,
          response,
          { withCredentials: true }
        );
        if (data) {
          setCartItem({});
          navigate("/order");
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  const onSubmitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id == items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItem[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };
      switch (method) {
        case "cod":
          const result = await axios.post(
            `${serverUrl}/api/order/placeorder`,
            orderData,
            { withCredentials: true }
          );
          if (result.data) {
            toast.success("Order placed successfully");
            setCartItem({});
            navigate("/order");
          }
          break;
        case "razorpay":
          const razorpayResult = await axios.post(
            `${serverUrl}/api/order/razorpay`,
            orderData,
            { withCredentials: true }
          );
          if (razorpayResult.data) {
            console.log(razorpayResult.data);
            initPay(razorpayResult.data);
            toast.success("Order placed successfully");
          }
          break;
        default:
          break;
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error("Failed in order placed");
      console.log(err);
    }
  };
  return (
    <div className="min-h-[100vh] w-[100vw] bg-gradient-to-l from-[#141414] to-[#0c2025]  flex flex-col items-center justify-center md:flex-row gap-[50px] relative ">
      <div className="lg:w-[50%] w-[100%] h-[100%] flex items-center justify-center lg:mt-[0px] mt-[90px]">
        <form
          action=""
          onSubmit={onSubmitHandler}
          className="lg:w-[70%] w-[95%] lg:h-[70%] h-[100%] "
        >
          <div className="py-[10px]">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>
          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px] ">
            <input
              type="text"
              placeholder="First Name"
              className="w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] text-white "
              required
              onChange={changeHandler}
              value={formData.firstName}
              name="firstName"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-[48%] h-[50px]  text-white rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
              required
              onChange={changeHandler}
              value={formData.lastName}
              name="lastName"
            />
          </div>
          <div className="w-[100%]   h-[70px] flex items-center justify-between px-[10px] ">
            <input
              type="email"
              placeholder="Email"
              className="w-[100%]  text-white h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
              required
              onChange={changeHandler}
              value={formData.email}
              name="email"
            />
          </div>
          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px] ">
            <input
              type="text"
              placeholder="Street"
              className="w-[100%]  text-white h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
              required
              onChange={changeHandler}
              value={formData.street}
              name="street"
            />
          </div>
          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px] ">
            <input
              type="text"
              placeholder="City"
              className="w-[48%]  text-white h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
              required
              onChange={changeHandler}
              value={formData.city}
              name="city"
            />
            <input
              type="text"
              placeholder="State"
              className="w-[48%]  text-white h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
              required
              onChange={changeHandler}
              value={formData.state}
              name="state"
            />
          </div>
          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px] ">
            <input
              type="tel"
              placeholder="pincode"
              className="w-[48%]  text-white h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
              required
              onChange={changeHandler}
              value={formData.pincode}
              name="pincode"
            />
            <input
              type="text"
              placeholder="Country"
              className="w-[48%] h-[50px]  text-white rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
              required
              onChange={changeHandler}
              value={formData.country}
              name="country"
            />
          </div>
          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px] ">
            <input
              type="tel"
              placeholder="Phone"
              min={10}
              className="w-[100%]  text-white h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
              required
              onChange={changeHandler}
              value={formData.phone}
              name="phone"
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="text-[18px] active:bg-slate-500 cursor-pointer bg-[#3bcee848] py-[10px] px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px] absolute lg:right-[20%] bottom-[8%] right-[35%] border-[1px] border-[#80808049] ml-[30px] mt-[20px] "
            >
              {loading ? <Loading /> : "PLACE ORDER"}
            </button>
          </div>
        </form>
      </div>
      <div className="lg:w-[50%] w-[100%] min-h-[100%] flex items-center justify-center gap-[30px]">
        <div className="lg:w-[70%] w-[90%] lg:h-[70%] h-[100%] flex flex-col items-center justify-center gap-[10px] ">
          <CartTotal />
          <div className="py-[10px]">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
          </div>
          <div className="w-[100%] h-[30vh] lg:h-[100px] flex items-start mt-[20px] lg:mt-[0px] gap-[50px] justify-center">
            <button
              onClick={() => setMethod("razorpay")}
              className={`w-[150px] h-[50px] rounded-sm ${
                method === "razorpay"
                  ? "border-[5px] border-blue-900 rounded-sm "
                  : ""
              }`}
            >
              <img
                src={razorpay}
                className="w-[100%] h-[100%] rounded-sm object-fill"
                alt=""
              />
            </button>
            <button
              onClick={() => setMethod("cod")}
              className={`w-[200px] h-[50px] bg-gradient-to-t from-[#95b3f8] to-[white] text-[14px] px-[20px] text-[#332f6f] font-bold rounded-sm ${
                method === "cod"
                  ? "border-[5px] border-blue-900 rounded-sm "
                  : ""
              }`}
            >
              CASH ON DELIVERY{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
