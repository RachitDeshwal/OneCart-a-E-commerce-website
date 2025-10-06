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

function App() {
  const { userData } = useUserContext();
  let location = useLocation();

  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;
