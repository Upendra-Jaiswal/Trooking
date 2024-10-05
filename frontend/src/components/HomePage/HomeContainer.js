import Hero from "./Hero";
import Trips from "../Trips/Trips";
import Blogs from "./Blogs";
import Testimonials from "./Testimonials";
import WhyChooseus from "./WhyChooseus";

import FAQ from "./FAQ";
import Recognition from "./Recognition";
import Newletter from "./Newletter";
import Footer from "./Footer";

import React, { createContext, useState, useContext, useEffect } from "react";

import TaxiBanner from "./TaxiBanner";

import Swiper from "../Trips/SwiperVertical/Swiper";

const HomeContainer = () => {
  const [token, setToken] = useState(null);

  const logout = async () => {
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      // Make a POST request to the logout endpoint
      const response = await fetch(`${backendUrl}/api/logout`, {
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

  return (
    <>
      <div className=" bg-gray-200">
        <Hero />
        <Trips />
        <TaxiBanner />
        <Swiper />
        <Testimonials />
        <WhyChooseus />
        <Blogs />
        <FAQ />
        <Recognition />
        <Newletter />
        <Footer />
      </div>
    </>
  );
};

export default HomeContainer;
