import React, { useEffect, useState } from "react";
import Title from "./Title";
import { useShopContext } from "../contexts/ShopContext";
import Card from "./Card";

function LatestCollection() {
  let { products } = useShopContext();
  const [latestProducts, SetLatestProducts] = useState([]);
  useEffect(() => SetLatestProducts(products.slice(0, 8)), [products]);
  return (
    <div>
      <div className="h-[8%] w-[100%] text-center md:mt-[50px] ">
        <Title text1={"Latest"} text2={"Collections"} />
        <p className="w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100">
          Step Into Style - New Collection Dropping into this Season!
        </p>
      </div>
      <div className="w-[100%] h-[50%] gap-[50px] flex justify-center items-center flex-wrap mt-[30px] ">
        {products.map((item, index) => (
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

export default LatestCollection;
