import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import axios from "axios";

export const shopDataContext = createContext();

function ShopContext({ children }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const currency = "&#8377";
  const delivery_fee = 40;

  let { serverUrl } = useAuthContext();
  const getProductData = async () => {
    try {
      let result = await axios.get(
        `${serverUrl}/api/product/list`,
        {},
        { withCredentials: true }
      );

      setProducts(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);
  let value = {
    products,
    getProductData,
    currency,
    delivery_fee,
    showSearch,
    setShowSearch,
    search,
    setSearch,
  };
  return (
    <div>
      <shopDataContext.Provider value={value}>
        {children}{" "}
      </shopDataContext.Provider>
    </div>
  );
}

export default ShopContext;
export const useShopContext = () => useContext(shopDataContext);
