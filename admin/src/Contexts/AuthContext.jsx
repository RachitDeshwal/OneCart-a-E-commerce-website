import { createContext, useContext } from "react";

export const AuthDataContext = createContext();

export function AuthContext({ children }) {
  const serverUrl = "https://onecart-a-e-commerce-website-backend.onrender.com";

  return (
    <AuthDataContext.Provider value={{ serverUrl }}>
      {children}
    </AuthDataContext.Provider>
  );
}

// optional helper hook so you don’t call useContext everywhere
export const useAuthContext = () => useContext(AuthDataContext);
