import React, { useEffect, useState } from "react";
import Title from "./Title";
import { useShopContext } from "../contexts/ShopContext";
import Card from "./Card";

function BestSeller() {
  const [bestseller, setBestseller] = useState([]);
  const { products } = useShopContext();
  useEffect(() => {
    let filterProducts = products.filter((item) => item.bestseller);
    setBestseller(filterProducts);
  }, [products]);
  return (
    <div>
      <div className="h-[8%] w-[100%] text-center md:mt-[50px] ">
        <Title text1={"Best"} text2={"Seller"} />
        <p className="w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100">
          Tried, Tested, Loved Discover out All time Best Sellers!
        </p>
      </div>
      <div className="w-[100%] h-[50%] gap-[50px] flex justify-center items-center flex-wrap mt-[30px] ">
        {bestseller.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            id={item._id}
            image={item.image1}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
