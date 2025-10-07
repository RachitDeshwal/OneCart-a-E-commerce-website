import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import axios from "axios";
import Card from "../components/Card";
import { useUserContext } from "./UserContext";

export const shopDataContext = createContext();

function ShopContext({ children }) {
  let { userData } = useUserContext();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cartItem, setCartItem] = useState({});
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
  const addToCart = async (itemId, size) => {
    if (!size) {
      return;
    }
    let cartData = structuredClone(cartItem);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    console.log(cartData);
    setCartItem(cartData);
    if (userData) {
      try {
        let result = await axios.post(
          `${serverUrl}/api/cart/add`,
          { itemId, size },
          { withCredentials: true }
        );
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const getUserCart = async () => {
    try {
      const result = await axios.post(
        `${serverUrl}/api/cart/get`,
        {},
        { withCredentials: true }
      );
      console.log(result.data);
      setCartItem(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (let items in cartItem) {
      for (let item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item];
          }
        } catch (err) {}
      }
    }
    return totalCount;
  };
  const updatedQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItem);
    cartData[itemId][size] = quantity;
    setCartItem(cartData);
    if (userData) {
      try {
        await axios.post(
          `${serverUrl}/api/cart/update`,
          { itemId, size, quantity },
          { withCredentials: true }
        );
      } catch (err) {
        console.log(err);
      }
    }
  };
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItem) {
      let itemInfo = products.map((product) => product._id == items);
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalAmount += itemInfo.price * cartItem[items][item];
          }
        } catch (err) {}
      }
    }
    return totalAmount;
  };
  useEffect(() => {
    getUserCart();
  }, []);
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
    cartItem,
    setCartItem,
    getCartCount,
    addToCart,
    updatedQuantity,
    getCartAmount,
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
