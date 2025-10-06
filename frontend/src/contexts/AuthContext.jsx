// AuthContext.js
import { useContext, createContext } from "react";

export const AuthContext = createContext({
  serverUrl: "http://localhost:8000"
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const value = {
    serverUrl: "http://localhost:8000"
    // later you can add: user, login(), logout() etc.
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
