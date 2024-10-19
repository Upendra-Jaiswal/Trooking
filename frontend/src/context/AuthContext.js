import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState("");
  const [token, setToken] = useState("");
  // let authtoken;
  // let user;

  const [user, setUser] = useState(null);
  const [authtoken, setAuthToken] = useState(null);

  // const setUserDetails = (token, user) => {
  //   localStorage.setItem("authToken", token); // Store token
  //   localStorage.setItem("userName", user.name); // Store user details
  //   localStorage.setItem("isAdmin", user.isAdmin); // Store admin status
  // };

  // useEffect(() => {
  //   // Get token or user info from localStorage on component mount
  //   const token = localStorage.getItem("authtoken");
  //   //   user = localStorage.getItem("username");
  //   if (token) {
  //     const username = localStorage.getItem("username");
  //     setUser(username); // Set the user info in state if available
  //     setAuthToken(token);
  //     setIsAuthenticated(true);
  //   }

  //   // setAuthToken(localStorage.getItem("authtoken"));
  // }, []);

  useEffect(() => {
    const checkAuth = async () => {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${backendUrl}/api/verifyauth`, {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const userData = await response.json(); // Assuming response contains user data
       // setIsAuthenticated(true);
        setUserName(userData.name); // Set actual user name
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    };

    checkAuth();
  }, [isAuthenticated]);

  // useEffect(() => {
  //   // Simulating an authentication check
  //   const checkAuth = async () => {
  //     // Fetch or check authentication status here

  //     const backendUrl = process.env.REACT_APP_BACKEND_URL;

  //     try {
  //       const response = await axios.get(`${backendUrl}/api/verifyauth`, {
  //         withCredentials: true, // Include cookies in the request
  //       });

  //       if (response.status === 200) {
  //         setIsAuthenticated(true);
  //         //setUserData(response.data.name); // Get userId from response
  //         setUserName(response.data.name);

  //         console.log(response.data);
  //         setToken(token);
  //         setAuthToken(localStorage.getItem("authtoken"));

  //         setIsAdmin(response.data.isAdmin); // Get isAdmin status from response
  //       } else {
  //         setIsAuthenticated(false);
  //       }
  //     } catch (error) {
  //       console.error("Error verifying auth", error);
  //       setIsAuthenticated(false);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   checkAuth();
  // }, [userName, isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        // isAuthenticated,
        // userName,
        // userData,
        // isAdmin,
        // loading,
        // token,
        // user,
        authtoken,
        user,
        userName,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
