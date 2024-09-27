// // export default PrivateRoute;
// import React, { useState, useEffect } from "react";
// import { Route, Navigate, Outlet } from "react-router-dom";
// const PrivateRoute = ({ element: Component, ...rest }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkAuth = async () => {
//       const backendUrl = process.env.REACT_APP_BACKEND_URL;
//       try {
//         const response = await fetch(`${backendUrl}/api/verifyauth`, {
//           method: "GET",
//           credentials: "include",
//         });
//         setIsAuthenticated(response.ok);
//       } catch (error) {
//         console.error("Error verifying auth", error);
//         setIsAuthenticated(false);
//       } finally {
//         setLoading(false);
//       }
//     };
//     checkAuth();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>; // Consider a spinner here
//   }

//   return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
// };

// export default PrivateRoute;

import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      try {
        const response = await fetch(`${backendUrl}/api/verifyauth`, {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          setIsAuthenticated(true);
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

    // Delay the auth check by 1000ms
    const timer = setTimeout(() => {
      checkAuth();
    }, 1000);

    // Cleanup the timeout when component unmounts or effect re-runs
    return () => clearTimeout(timer);
  }, []); // Only runs on mount

  if (loading) {
    return <div>Loading...</div>; // Consider a spinner or other loading indicator
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
