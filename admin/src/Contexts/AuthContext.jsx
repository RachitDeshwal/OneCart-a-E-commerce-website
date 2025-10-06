import { createContext, useContext } from "react";

export const AuthDataContext = createContext();

export function AuthContext({ children }) {
  const serverUrl = "http://localhost:8000";

  return (
    <AuthDataContext.Provider value={{ serverUrl }}>
      {children}
    </AuthDataContext.Provider>
  );
}

// optional helper hook so you don’t call useContext everywhere
export const useAuthContext = () => useContext(AuthDataContext);
