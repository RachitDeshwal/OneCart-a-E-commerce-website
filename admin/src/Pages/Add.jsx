import React from "react";
import Nav from "../Components/Nav.jsx";
import Sidebar from "../Components/Sidebar.jsx";
import uploadImage from "../assets/uploadimage.jpg";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../Contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../Components/Loading.jsx";

const Add = () => {
  let navigate = useNavigate();
  let { serverUrl } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("TopWear");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [bestseller, setBestseller] = useState(false);
  const [description, setDescription] = useState("");
  const [sizes, setSizes] = useState([]);
  const handleAddProduct = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("bestseller", bestseller);
      formData.append("image1", image1);
      formData.append("image2", image2);
      formData.append("image3", image3);
      formData.append("image4", image4);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("price", price);
      const result = await axios.post(
        `${serverUrl}/api/product/addproduct`,
        formData,
        { withCredentials: true }
      );
      setLoading(false);
      toast.success("Product added successfully");
      console.log(result);
      if (result) {
        setName("");
        setDescription("");
        setPrice("");
        setSizes([]);
        setCategory("Men");
        setSubCategory("TopWear");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setBestseller(false);
      }
      navigate("/lists");
    } catch (err) {
      console.log(err);
      toast.error("Failed in add product");
      setLoading(false);
    }
  };
  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white overflow-x-hidden  relative ">
      <Nav></Nav>
      <Sidebar></Sidebar>
      <div className="w-[82%] h-[100%] flex items-center justify-center overflow-x-hidden absolute right-0 bottom-[5%]">
        <form
          action=""
          onSubmit={handleAddProduct}
          className="w-[100%] md:w-[90%] h-[100%] mt-[70px] flex flex-col gap-[30px] py-[60px] px-[30px] md:px-[60px] "
        >
          <div className="w-[400px] h-[50px] text-[25px] md:text-[40px] ">
            Add Product
          </div>
          <div className="w-[80%] h-[130px] flex flex-col justify-center items-start mt-[20px] gap-[10px] ">
            <p className="text-[20px] md:text-[25px] font-semibold">
              Upload Images
            </p>

            <div className="w-[100%] h-[100%] flex justify-start items-start">
              <label
                htmlFor="image1"
                className="w-[65px] h-[65px] md:h-[100px] md:w-[100px] cursor-pointer hover:border-[#47d1f7] "
              >
                <img
                  src={!image1 ? uploadImage : URL.createObjectURL(image1)}
                  alt=""
                  className="h-[80%] w-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px] "
                />
              </label>
              <input
                type="file"
                id="image1"
                hidden
                onChange={(e) => setImage1(e.target.files[0])}
                required
              />
              <label
                htmlFor="image2"
                className="w-[65px] h-[65px] md:h-[100px] md:w-[100px] cursor-pointer hover:border-[#47d1f7] "
              >
                <img
                  src={!image2 ? uploadImage : URL.createObjectURL(image2)}
                  alt=""
                  className="h-[80%] w-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px] "
                />
              </label>
              <input
                type="file"
                required
                id="image2"
                hidden
                onChange={(e) => setImage2(e.target.files[0])}
              />
              <label
                htmlFor="image3"
                className="w-[65px] h-[65px] md:h-[100px] md:w-[100px] cursor-pointer hover:border-[#47d1f7] "
              >
                <img
                  src={!image3 ? uploadImage : URL.createObjectURL(image3)}
                  alt=""
                  className="h-[80%] w-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px] "
                />
              </label>
              <input
                type="file"
                required
                id="image3"
                hidden
                onChange={(e) => setImage3(e.target.files[0])}
              />
              <label
                htmlFor="image4"
                className="w-[65px] h-[65px] md:h-[100px] md:w-[100px] cursor-pointer hover:border-[#47d1f7] "
              >
                <img
                  src={!image4 ? uploadImage : URL.createObjectURL(image4)}
                  alt=""
                  className="h-[80%] w-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px] "
                />
              </label>
              <input
                type="file"
                required
                id="image4"
                hidden
                onChange={(e) => setImage4(e.target.files[0])}
              />
            </div>
          </div>
          <div className="flex items-start justify-center flex-col w-[80%] h-[100px] gap-[10px]">
            <p className="text-[20px] md:text-[25px] font-semibold">
              Product Name
            </p>
            <input
              type="text"
              required
              placeholder="Type here"
              className="w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-[#47d1f7] border-[2px] cursor-pointer bg-slate-600 text-[18px] px-[20px] placeholder:text-[#ffffffc2]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex items-start justify-center flex-col w-[80%]  gap-[10px]">
            <p className="text-[20px] md:text-[25px] font-semibold">
              Product description
            </p>
            <textarea
              type="text"
              required
              placeholder="Type here"
              className="w-[600px] max-w-[98%] h-[100px] rounded-lg hover:border-[#47d1f7] border-[2px] cursor-pointer bg-slate-600 text-[18px] px-[20px] py-[10px] placeholder:text-[#ffffffc2]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap items-center w-[80%] gap-[10px]">
            <div className="md:w-[30%] w-[100%] flex flex-col items-start sm:justify-center gap-[10px] ">
              <p className="text-[20px] md:text-[25px] font-semibold w-[100%] ">
                Product Category
              </p>
              <select
                name=""
                id=""
                required
                className="bg-slate-600 w-[60%] px-[10px] py-[7px] rounded-lg  hover:border-[#47d1f7] border-[2px] "
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>
            <div className="md:w-[30%] w-[100%] flex flex-col items-start sm:justify-center gap-[10px] ">
              <p className="text-[20px] md:text-[25px] font-semibold w-[100%] ">
                Sub-Category
              </p>
              <select
                name=""
                required
                id=""
                className="bg-slate-600 w-[60%] px-[10px] py-[7px] rounded-lg  hover:border-[#47d1f7] border-[2px] "
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              >
                <option value="TopWear">TopWear</option>
                <option value="BottomWear">BottomWear</option>
                <option value="WinterWear">WinterWear</option>
              </select>
            </div>
          </div>
          <div className="flex items-start justify-center flex-col w-[80%] h-[100px] gap-[10px]">
            <p className="text-[20px] md:text-[25px] font-semibold">
              Product Price
            </p>
            <input
              type="number"
              required
              placeholder=""
              className="w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-[#47d1f7] border-[2px] cursor-pointer bg-slate-600 text-[18px] px-[20px] placeholder:text-[#ffffffc2]"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-start flex-wrap gap-[15px]">
            <div
              className={`px-[20px] py-[7px] rounded-lg text-[18px] hover:border-[#47d1f7] border-[2px] cursor-pointer bg-slate-600 ${
                sizes.includes("S")
                  ? "bg-green-400 text-black border-[#47d1f7]"
                  : ""
              }`}
              onClick={() =>
                setSizes((prev) => {
                  return prev.includes("S")
                    ? prev.filter((item) => item !== "S")
                    : [...prev, "S"];
                })
              }
            >
              S
            </div>
            <div
              className={`px-[20px] py-[7px] rounded-lg text-[18px] hover:border-[#47d1f7] border-[2px] cursor-pointer bg-slate-600 ${
                sizes.includes("M")
                  ? "bg-green-400 text-black border-[#47d1f7]"
                  : ""
              }`}
              onClick={() =>
                setSizes((prev) => {
                  return prev.includes("M")
                    ? prev.filter((item) => item !== "M")
                    : [...prev, "M"];
                })
              }
            >
              M
            </div>
            <div
              className={`px-[20px] py-[7px] rounded-lg text-[18px] hover:border-[#47d1f7] border-[2px] cursor-pointer bg-slate-600 ${
                sizes.includes("L")
                  ? "bg-green-400 text-black border-[#47d1f7]"
                  : ""
              }`}
              onClick={() =>
                setSizes((prev) => {
                  return prev.includes("L")
                    ? prev.filter((item) => item !== "L")
                    : [...prev, "L"];
                })
              }
            >
              L
            </div>
            <div
              className={`px-[20px] py-[7px] rounded-lg text-[18px] hover:border-[#47d1f7] border-[2px] cursor-pointer bg-slate-600 ${
                sizes.includes("XL")
                  ? "bg-green-400 text-black border-[#47d1f7]"
                  : ""
              }`}
              onClick={() =>
                setSizes((prev) => {
                  return prev.includes("XL")
                    ? prev.filter((item) => item !== "XL")
                    : [...prev, "XL"];
                })
              }
            >
              XL
            </div>
            <div
              className={`px-[20px] py-[7px] rounded-lg text-[18px] hover:border-[#47d1f7] border-[2px] cursor-pointer bg-slate-600 ${
                sizes.includes("XXL")
                  ? "bg-green-400 text-black border-[#47d1f7]"
                  : ""
              }`}
              onClick={() =>
                setSizes((prev) => {
                  return prev.includes("XXL")
                    ? prev.filter((item) => item !== "XXL")
                    : [...prev, "XXL"];
                })
              }
            >
              XXL
            </div>
          </div>
          <div
            className="w-[80%] flex items-center justify-start mt-[20px] gap-[10px] "
            onClick={() => setBestseller((prev) => !prev)}
          >
            <input
              type="checkbox"
              id="checkbox"
              className="h-[25px] w-[25px] cursor-pointer "
            />
            <label
              htmlFor="checkbox"
              className="text-[18px] md:text-[22px] font-semibold "
            >
              Add to BestSeller
            </label>
          </div>
          <button className="w-[140px] cursor-pointer px-[15px] py-[15px] rounded-xl bg-[#65d8f7] flex items-center justify-center gap-[10px] text-black active:bg-slate-700 active:text-white active:border-[2px] ">
            {loading ? <Loading /> : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
