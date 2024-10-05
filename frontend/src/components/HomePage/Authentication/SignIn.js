import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;

      await axios
        .post(
          `${backendUrl}/api/signin`,
          // `${backendUrl}/api/signin`,
          // "http://localhost:3001/api/signin",
          { email, password },

          { withCredentials: true }
        )
        .then((response) => {
          // Handle the response here
          navigate("/");
          console.log(response.data);
        })
        .catch((error) => {
          // Handle any errors here
          console.error(error);
        });
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-gray-100">
      <div className="w-full max-w-md p-8 bg-white-800 shadow-xl rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-4 m-4">Sign In</h2>
          <span className="text-sm bg-green-200 p-4 rounded-2xl text-black">
            <Link to="/">Homepage</Link>
          </span>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
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
            <label htmlFor="password" className="block text-sm font-medium">
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
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default SignIn;
