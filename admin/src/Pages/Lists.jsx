import React from "react";
import Nav from "../Components/Nav";
import Sidebar from "../Components/Sidebar";
import { useAuthContext } from "../Contexts/AuthContext";
import axios from "axios";
import { useEffect, useState } from "react";

const Lists = () => {
  const { serverUrl } = useAuthContext();
  const [lists, setLists] = useState([]);
  const fetchList = async () => {
    try {
      const result = await axios.get(
        `${serverUrl}/api/product/list`,
        {},
        { withCrediantials: true }
      );
      setLists(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  const removeList = async (id) => {
    try {
      const result = await axios.post(
        `${serverUrl}/api/product/remove/${id}`,
        {},
        { withCredentials: true }
      );
      if (result.data) {
        fetchList();
      } else {
        console.log("failed remove list");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white ">
      <Nav />
      <div className="w-[100%] h-[100%] flex justify-start items-center">
        <Sidebar />
        <div className="w-[82%] h-[100%] lg:ml-[320px] md:ml-[230px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] ml-[100px] ">
          <div className="w-[400px] h-[50px] text-[28px] md:text-[40px] mb-[20px] text-white">
            All listed Products
          </div>
          {lists.length > 0 ? (
            lists.map((item, index) => (
              <div
                className="w-[90%] h-[90px] md:h-[120px] bg-slate-600 flex items-center justify-start gap-[5px] md:gap-[30px] p-[10px] md:px-[30px]  "
                key={index}
              >
                <img
                  src={item.image1}
                  alt=""
                  className="w-[30%] md:w-[120px] h-[90%] rounded-lg"
                />
                <div className="w-[90%] h-[80%] flex flex-col justify-center items-start gap-[2px] ">
                  <div className="w-[100%] md:text-[20px] text-[15px] text-[#bef0f3] ">
                    {item.name}
                  </div>
                  <div className="md:text-[17px] text-[15px] text-[#bef3da]">
                    {item.category}
                  </div>
                  <div className="md:text-[17px] text-[15px] text-[#bef3da]">
                    &#8377;{item.price}
                  </div>
                </div>
                <div className="w-[10%] h-[100%] flex justify-center items-center bg-transparent">
                  <span
                    className="w-[35px] h-[30%] flex items-center justify-center rounded-md md:hover:bg-red-300 md:hover:text-black cursor-pointer"
                    onClick={() => {
                      removeList(item._id);
                    }}
                  >
                    X
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div> No products found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lists;
