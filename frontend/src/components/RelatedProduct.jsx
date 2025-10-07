import React, { useEffect, useState } from "react";
import { useShopContext } from "../contexts/ShopContext";
import Title from "./Title.jsx";
import Card from "./Card.jsx";

function RelatedProduct({ category, subCategory, productId }) {
  let { products } = useShopContext();
  let [related, setRelated] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter((item) => item.category === category);
      productCopy = productCopy.filter(
        (item) => item.subCategory === subCategory
      );
      productCopy = productCopy.filter((item) => item._id !== productId);
      setRelated(productCopy.slice(0, 4));
    }
  }, [productId, products, category, subCategory]);
  return (
    <div className="my-[130px] md:my-[40px] md:px-[60px]">
      <div className="ml-[20px] lg:ml-[80px]">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="w-[100%] flex justify-center items-center flex-wrap gap-[50px] mt-[30px]">
        {related.map((item, index) => (
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

export default RelatedProduct;
