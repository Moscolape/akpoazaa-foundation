import { useState, ReactNode } from "react";
import { AuthContext } from "./auth-context";


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("foundToken")
  );

  const login = (token: string) => {
    setToken(token);
    localStorage.setItem("foundToken", token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("foundToken");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
