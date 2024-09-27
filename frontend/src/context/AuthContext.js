// // context/AuthContext.js
// import React, { createContext, useState, useContext, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     // Retrieve token from local storage or cookies on initial load
//     const savedToken = localStorage.getItem("token");
//     if (savedToken) {
//       setToken(savedToken);
//       // Optionally, fetch user data based on token
//       // fetchUserData(savedToken);
//     }
//   }, []);

//   const login = async (email, password) => {
//     try {
//       const response = await fetch("http://localhost:3001/api/signin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         setToken(data.token);
//         setUser(data.user); // Set user data if available
//       } else {
//         console.error("Login failed:", data.message);
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");

//     setToken(null);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Check authentication status when the app loads
  //   const checkAuth = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_BACKEND_URL}/api/verifyauth`,
  //         { withCredentials: true }
  //       );
  //       if (response.data.isAuthenticated) {
  //         setIsAuthenticated(true);
  //         setUserName(response.data.userName);
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
  // }, []);


  useEffect(() => {
    // Simulating an authentication check
    const checkAuth = async () => {
      // Fetch or check authentication status here

      const backendUrl = process.env.REACT_APP_BACKEND_URL;

      // This is just a placeholder for demonstration
      const user = await fetch(`${backendUrl}/api/verifyauth`, {
        method: "GET",
        credentials: "include",
      });

      if (user.ok) {
        setIsAuthenticated(true);
        setUserName("John Doe"); // Replace with actual user name from the response
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [userName]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        userName,
        setUserName,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
