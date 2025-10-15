import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useShopContext } from "../contexts/ShopContext";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import RelatedProduct from "../components/RelatedProduct";
import Loading from "../components/Loading";

function ProductDetail() {
  let { products, addToCart, loading } = useShopContext();
  let { productId } = useParams();
  let [productData, setProductData] = useState("");
  let [image, setImage] = useState("");
  let [image1, setImage1] = useState("");
  let [image2, setImage2] = useState("");
  let [image3, setImage3] = useState("");
  let [image4, setImage4] = useState("");
  let [size, setSize] = useState("");
  let fetchProductData = () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductData(item);
        setImage(item.image1);
        setImage1(item.image1);
        setImage2(item.image2);
        setImage3(item.image3);
        setImage4(item.image4);
      }
      return null;
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <div>
      <div className="w-[99vw] md:h-[100vh] h-[130vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex justify-start flex-col items-center gap-[20px] lg:flex-row  ">
        <div className="lg:w-[50vw] md:w-[90vw] lg:h-[90vh] h-[50vh] mt-[70px] flex justify-center items-center md:gap-[10px] gap-[30px] flex-col-reverse lg:flex-row  ">
          <div className="lg:w-[20%] md:w-[80%] h-[10%] lg:h-[80%] flex items-center justify-center gap-[50px] lg:gap-[20px] lg:flex-col flex-wrap ">
            <div
              className="md:w-[100px] w-[50px]  h-[50px] cursor-pointer md:h-[110px] bg-slate-300 border-[1px] rounded-md border-[#80808049]"
              onClick={() => setImage(image1)}
            >
              <img src={image1} alt="" />
            </div>
            <div
              className="md:w-[100px] w-[50px] cursor-pointer h-[50px] md:h-[110px] bg-slate-300 border-[1px] rounded-md border-[#80808049]"
              onClick={() => setImage(image2)}
            >
              <img src={image2} alt="" />
            </div>
            <div
              className="md:w-[100px] w-[50px] cursor-pointer h-[50px] md:h-[110px] bg-slate-300 border-[1px] rounded-md border-[#80808049]"
              onClick={() => setImage(image3)}
            >
              <img src={image3} alt="" />
            </div>
            <div
              className="md:w-[100px] w-[50px] cursor-pointer h-[50px] md:h-[110px] bg-slate-300 border-[1px] rounded-md border-[#80808049]"
              onClick={() => setImage(image4)}
            >
              <img src={image4} alt="" />
            </div>
          </div>
          <div className="lg:w-[60%] w-[80%] h-[70%] lg:h-[76%] border-[1px] border-[#80808049] rounded-md overflow-hidden">
            <img
              src={image}
              alt=""
              className="w-[100%] h-[100%] lg:h-[100%] text-[30px] text-white text-center rounded-md object-fill"
            />
          </div>
        </div>
        <div className="lg:w-[50vw] w-[100vw] lg:h-[75vh] h-[40vh] lg:mt-[80px] flex items-start justify-start flex-col py-[20px] px-[30px] md:pb-[20px] md:pl-[20px] lg:px-[0px] lg:pl-[0px] lg:py-[0px] gap-[10px] ">
          <h1 className="text-[40px] font-semibold text-[aliceblue] ">
            {productData.name.toUpperCase()}
          </h1>
          <div className="flex items-center gap-1">
            <FaStar className="text-[20px] fill-[#ffD700]" />
            <FaStar className="text-[20px] fill-[#ffD700]" />
            <FaStar className="text-[20px] fill-[#ffD700]" />
            <FaStar className="text-[20px] fill-[#ffD700]" />
            <FaStarHalfAlt className="text-[20px] fill-[#ffD700]" />
            <p className="text-[18px] font-semibold pl-[5px] text-white">
              (123)
            </p>
          </div>
          <p className="text-[30px] text-white font-semibold pl-[5px]">
            &#8377;{productData.price}
          </p>
          <p className="text-[20px] text-white font-semibold pl-[5px] w-[80%] md:w-[60%}">
            {productData.description}
          </p>
          <div className="flex flex-col gap-[10px] my-[10px]">
            <p className="text-[25px] text-white font-semibold pl-[5px] ">
              Select size
            </p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  className={`px-4 py-2 rounded-md cursor-pointer border bg-slate-300 ${
                    item === size ? "bg-black text-[20px] text-[#2f97f1]" : ""
                  }`}
                  onClick={() => setSize(item)}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              className="text-[16px] active:bg-slate-500 cursor-pointer px-[20px] py-[10px] bg-[#495b61c9] rounded-2xl mt-[10px] border-[1px] border-[#80808049] text-white shadow-md shadow-black"
              onClick={() => addToCart(productData._id, size)}
            >
              {loading ? <Loading /> : "Add to Cart"}
            </button>
          </div>
          <div className="w-[90%] h-[1px] bg-slate-700"></div>
          <div className="w-[80%] text-[16px] text-white">
            <p>100% Original product</p>
            <p>Cash on delivery available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      <div className="w-[100%] min-h-[70vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex justify-start items-start flex-col overflow-x-hidden ">
        <div className="px-[20px] flex mt-[90px] lg:ml-[80px] ml-[0px] lg:mt-[0px]">
          <p className="border px-5 py-3 text-sm text-white">Description</p>
          <p className="border px-5 py-3 text-sm text-white">Reviews (123)</p>
        </div>
        <div className="w-[80%] md:h-[150px] h-[220px] bg-[#3336397c] border text-white text-[13px] md:text-[15px] lg:text-[20px] px-[10px] md:px-[30px] ml-[20px] lg:ml-[100px]">
          <p className="w-[95%] h-[90%] flex items-center justify-center">
            Upgrade your wardrobe with this stylish slim fit cotton shirt,
            available on OneCart.Crafted from breathable,high quality fabric, it
            offers all day comfort and errortless style.Easy to maintain perfect
            for any setting,this shirt must have essential for those who value
            both fashion and function.
          </p>
        </div>
        <RelatedProduct
          category={productData.category}
          subCategory={productData.subCategory}
          productId={productData._id}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default ProductDetail;
