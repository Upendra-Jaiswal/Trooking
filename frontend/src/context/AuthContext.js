

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState("");


  useEffect(() => {
    // Simulating an authentication check
    const checkAuth = async () => {
      // Fetch or check authentication status here

      const backendUrl = process.env.REACT_APP_BACKEND_URL;

      try {
        const response = await axios.get(`${backendUrl}/api/verifyauth`, {
          withCredentials: true, // Include cookies in the request
        });

        if (response.status === 200) {
          setIsAuthenticated(true);
          //setUserData(response.data.name); // Get userId from response
          setUserName(response.data.name);

          console.log(response.data);

          setIsAdmin(response.data.isAdmin); // Get isAdmin status from response
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error verifying auth", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [userName]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userName,
        userData,
        isAdmin,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
