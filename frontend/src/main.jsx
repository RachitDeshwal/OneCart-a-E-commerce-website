import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import { useAuthContext } from "./contexts/AuthContext.jsx";
import { UserContextProvider } from "./contexts/UserContext.jsx";
import ShopContext from "./contexts/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <UserContextProvider>
        <ShopContext>
          <App />
        </ShopContext>
      </UserContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
