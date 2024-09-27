// import React, { useState, useEffect } from "react";
// import { Route, Navigate, Outlet } from "react-router-dom";

// const PrivateRoute = ({ element: Component, ...rest }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Call the backend API to check if the user is authenticated
//     const checkAuth = async () => {
//       try {
//         const response = await fetch("http://localhost:3001/api/verifyauth", {
//           method: "GET",
//           credentials: "include", // This ensures the cookie is sent along with the request
//         });
//         if (response.ok) {
//           setIsAuthenticated(true);
//           console.log("okkk");
//         } else {
//           setIsAuthenticated(false);
//         }
//       } catch (error) {
//         console.error("Error verifying auth", error);
//         setIsAuthenticated(false);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   // Show loading state while checking authentication
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // If authenticated, render the component; otherwise, redirect to sign-in page
//   // return isAuthenticated ? (
//   //   <Route {...rest} element={<Component />} />
//   // ) : (
//   //   <Navigate to="/signin" />
//   // );

//   return isAuthenticated ? (
//     <Outlet />
//   ) : (
//     // <Navigate to="/login" replace state={{ from: location }} />
//     <Navigate to="/signin" />
//   );
// };

// export default PrivateRoute;
import React, { useState, useEffect } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
const PrivateRoute = ({ element: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/verifyauth", {
          method: "GET",
          credentials: "include",
        });
        setIsAuthenticated(response.ok);
      } catch (error) {
        console.error("Error verifying auth", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Consider a spinner here
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
