// import React, { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import animationimage from "./animationimage.gif";
// import loginanimation from "./loginanimation.gif";

// import { AuthContext } from "../../../context/AuthContext"; // Import the AuthContext

// import { toast } from "react-toastify"; // Import toast for notifications
// import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS

// const SignIn = () => {
//   const { login } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // Hook for navigation

//   // Initialize toast container for showing messages
//   toast.configure(); // Configuring toast (optional for advanced usage)

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const backendUrl = process.env.REACT_APP_BACKEND_URL;

//       // Attempt login via API
//       await axios
//         .post(
//           `${backendUrl}/api/signin`,
//           { email, password },
//           { withCredentials: true }
//         )
//         .then((response) => {
//           // If login is successful, navigate and store user info in context
//           navigate("/");
//           login({
//             username: response.data.name, // Get the username from API response
//             token: response.data.token, // Store the auth token
//           });
//         })
//         .catch((error) => {
//           // Handle login error
//           console.error(error);
//           setError("Invalid email or password.");
//           toast.error("Invalid email or password."); // Show toast error message
//         });
//     } catch (err) {
//       console.error("Error:", err);
//       setError("An error occurred.");
//       toast.error("An error occurred. Please try again."); // Show generic toast error
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white text-gray-100">
//       <div className="w-full max-w-md p-8 bg-white-800 shadow-xl rounded-lg flex flex-col space-y-6">
//         {/* Sign In Section */}
//         <div className="flex items-center justify-between">
//           <h2 className="text-2xl text-black font-bold mb-4 m-4">Sign In</h2>
//           <span className="text-sm bg-green-200 p-4 rounded-2xl text-black">
//             <Link to="/">Homepage</Link>
//           </span>
//         </div>

//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm text-black font-medium"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm text-black font-medium"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black sm:text-sm"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-blue-600 text-black font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Sign In
//           </button>
//         </form>
//         <p className="mt-4 text-black text-center">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-blue-400 hover:underline">
//             Sign Up
//           </Link>
//         </p>
//       </div>

//       {/* Second Section (Image) */}
//       <div className="h-[400px] w-[500px] bg-rounded-2xl ml-8 mt-8">
//         <img
//           src={loginanimation}
//           alt="animation"
//           className="w-full h-full object-cover rounded-2xl "
//         />
//       </div>
//     </div>
//   );
// };

// export default SignIn;

import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import animationimage from "./animationimage.gif";
import loginanimation from "./loginanimation.gif";

import { AuthContext } from "../../../context/AuthContext"; // Import the AuthContext

import { toast } from "react-toastify"; // Import toast for notifications
import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  // Initialize toast container for showing messages
  toast.configure(); // Configuring toast (optional for advanced usage)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;

      // Attempt login via API
      await axios
        .post(
          `${backendUrl}/api/signin`,
          { email, password },
          { withCredentials: true }
        )
        .then((response) => {
          // If login is successful, navigate and store user info in context
          navigate("/");
          login({
            username: response.data.name, // Get the username from API response
            token: response.data.token, // Store the auth token
          });
        })
        .catch((error) => {
          // Handle login error
          console.error(error);
          setError("Invalid email or password.");
          toast.error("Invalid email or password."); // Show toast error message
        });
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred.");
      toast.error("An error occurred. Please try again."); // Show generic toast error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-100 flex-col-reverse sm:flex-row">
      <div className="w-full max-w-md p-8 bg-white-800 shadow-xl rounded-lg flex flex-col space-y-6 sm:w-3/4 md:w-1/2 lg:w-1/3">
        {/* Sign In Section */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl text-black font-bold mb-4 m-4">Sign In</h2>
          <span className="text-sm bg-green-200 p-4 rounded-2xl text-black">
            <Link to="/">Homepage</Link>
          </span>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-black font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-black font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-black font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-black text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>

      {/* Second Section (Image) */}
      <div className="h-[200px] w-[250px] sm:h-[300px] sm:w-[350px] md:h-[400px] md:w-[500px] lg:h-[400px] lg:w-[500px] ml-8 mt-8 sm:mt-4 sm:ml-0 sm:p-8 sm:block">
        <img
          src={loginanimation}
          alt="animation"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default SignIn;
