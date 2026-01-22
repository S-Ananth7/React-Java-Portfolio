import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "../api/axiosConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }

    setLoading(false); 
  }, []);

  
  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios.post("/auth/login", { email, password });
      const { user, accessToken } = res.data;

      setUser(user);
      setToken(accessToken);

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", accessToken);

      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  
  const signup = async (fullName, email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios.post("/auth/register", { fullName, email, password });
      const { user, accessToken } = res.data;

      setUser(user);
      setToken(accessToken);

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", accessToken);

      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        role: user?.role,
        isLoggedIn: !!user,
        isLoading,
        error,
        login,
        signup,
        logout,
        loading, 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
