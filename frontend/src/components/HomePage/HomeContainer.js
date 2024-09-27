import Hero from "./Hero";
import Trips from "./Trips";
import Blogs from "./Blogs";
import Testimonials from "./Testimonials";
import WhyChooseus from "./WhyChooseus";
import VideosandMemories from "./VideosandMemories";
import FAQ from "./FAQ";
import Recognition from "./Recognition";
import Newletter from "./Newletter";
import Footer from "./Footer";
import ImageSlider from "./CategoryTerips/ImageSliderComponent";
import SliderTour from "./SiderTour";
import React, { createContext, useState, useContext, useEffect } from "react";
import BookingbyId from "../Bookingbyid/BookingbyId";
import InfoBookById from "../Bookingbyid/InfoBookById";
import NavBar from "../NavBar/NavBar";
import TaxiBanner from "./TaxiBanner";

const HomeContainer = () => {
  const [token, setToken] = useState(null);
  // const logout = async () => {
  //   // localStorage.removeItem("token");
  //   await fetch("http://localhost:3001/api/logout");

  //   // localStorage.getItem("token");
  //   console.log("log out pressed");
  // };

  const logout = async () => {
    try {
      // Make a POST request to the logout endpoint
      const response = await fetch("http://localhost:3001/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if the response was successful
      if (response.ok) {
        // Optionally, remove the token from local storage
        localStorage.removeItem("token");

        // Log a message or perform any other post-logout actions
        console.log("Logged out successfully");

        // Redirect to a login page or home page, if needed
        // window.location.href = "/login"; // Uncomment and modify as needed
      } else {
        // Handle errors
        console.error("Logout failed", response.statusText);
      }
    } catch (error) {
      // Handle fetch errors
      console.error("An error occurred while logging out", error);
    }
  };

  const verifyToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Token is expired, handle re-authentication or token refresh
      console.log("Token expired");
      // e.g., redirect to login or refresh token
    } else {
      console.log("token not expired", token);
      // Proceed with API request
    }
  };

  // useEffect(() => {
  // Retrieve token from local storage or cookies on initial load
  // const savedToken = localStorage.getItem("token");
  // if (savedToken) {
  //   setToken(savedToken);
  //   // Optionally, fetch user data based on token
  //   // fetchUserData(savedToken);
  // }

  //   const fetchUserData = async () => {
  //     const token = localStorage.getItem("token");
  //     try {
  //       const response = await fetch("http://localhost:3001/api/getusers", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       const userData = await response.json();
  //       console.log(userData, "userdata"); // Will print user details
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchUserData();
  // }, [token]);

  return (
    <>
      {/* <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to justwravel</h1>
        <p className="text-lg mb-8">book your trips</p>
        <a
          href="/signup"
          className="bg-white text-green-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
        >
          Get Started for Free
        </a>

        <button onClick={logout}>logout here</button>
        <button onClick={verifyToken}>verify token exists</button>
      </div> */}
      <div className=" bg-gray-200">
     

        <Hero />
        <Trips />
        <TaxiBanner />
        <ImageSlider />
        <SliderTour />
        <Blogs />
        <Testimonials />
        <WhyChooseus />
        <VideosandMemories />
        <Recognition />
        <FAQ />
        <Newletter />
        <Footer />
      </div>
    </>
  );
};

export default HomeContainer;
