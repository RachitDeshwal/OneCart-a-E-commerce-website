// AuthContext.js
import { useContext, createContext } from "react";

export const AuthContext = createContext({
  serverUrl: "https://onecart-a-e-commerce-website-backend.onrender.com"
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const value = {
    serverUrl: "https://onecart-a-e-commerce-website-backend.onrender.com"
    // later you can add: user, login(), logout() etc.
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
