import { useState } from "react";

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  
  const login = async (username, password) => {
    try {
      setError(null);

     
      await new Promise((resolve) => setTimeout(resolve, 800));

    
      if (username === "admin" && password === "1234") {
        const userData = { username };
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        return true;
      } else {
        setError("Invalid username or password");
        return false;
      }
    } catch (err) {
      setError("Login failed. Please try again later.");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, login, logout, error };
};
