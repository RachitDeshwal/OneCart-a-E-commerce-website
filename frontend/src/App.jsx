import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Registeration from "./components/Registeration.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import { useUserContext } from "./contexts/UserContext.jsx";
import Collection from "./Pages/Collection.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Product from "./Pages/Product.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import Cart from "./Pages/Cart.jsx";
import PlaceOrder from "./Pages/PlaceOrder.jsx";
import Order from "./Pages/Order.jsx";
import { ToastContainer, toast } from "react-toastify";
import NotFound from "./Pages/NotFound.jsx";
import Ai from "./components/Ai.jsx";

function App() {
  const { userData } = useUserContext();
  let location = useLocation();

  return (
    <>
      <ToastContainer />
      {userData && <Nav />}

      <Routes>
        <Route
          path="/signup"
          element={
            userData ? (
              <Navigate to={location.state?.from || "/"} />
            ) : (
              <Registeration />
            )
          }
        />
        <Route
          path="/login"
          element={
            userData ? <Navigate to={location.state?.from || "/"} /> : <Login />
          }
        />
        <Route
          path="/"
          element={
            userData ? (
              <Home />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />
        <Route
          path="/collection"
          element={
            userData ? (
              <Collection />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />
        <Route
          path="/about"
          element={
            userData ? (
              <About />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />
        <Route
          path="/contact"
          element={
            userData ? (
              <Contact />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />
        <Route
          path="/product"
          element={
            userData ? (
              <Product />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />
        <Route
          path="/productdetail/:productId"
          element={
            userData ? (
              <ProductDetail />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />
        <Route
          path="/cart"
          element={
            userData ? (
              <Cart />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />
        <Route
          path="/placeorder"
          element={
            userData ? (
              <PlaceOrder />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />
        <Route
          path="/order"
          element={
            userData ? (
              <Order />
            ) : (
              <Navigate to="/login" state={{ from: location.pathname }} />
            )
          }
        />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Ai />
    </>
  );
}

export default App;
