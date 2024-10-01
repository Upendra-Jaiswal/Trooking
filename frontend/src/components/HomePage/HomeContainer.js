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
import Chatgptvideospage from "./Chatgptpage";
import Swiper from "./Swiper";
import SwiperGrid from "./SwiperGrid";

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

  // const verifyToken = () => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     // Token is expired, handle re-authentication or token refresh
  //     console.log("Token expired");
  //     // e.g., redirect to login or refresh token
  //   } else {
  //     console.log("token not expired", token);
  //     // Proceed with API request
  //   }
  // };

  return (
    <>
      <div className=" bg-gray-200">
        <Hero />
        <Trips />
        <TaxiBanner />
        <Swiper />
        {/* <ImageSlider /> */}
        {/* <SliderTour /> */}

        <Testimonials />
        <WhyChooseus />
        {/* <VideosandMemories /> */}

        {/* <Chatgptvideospage /> */}
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
