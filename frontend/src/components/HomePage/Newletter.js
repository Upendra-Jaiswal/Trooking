import React, { useState } from "react";
import newsletterimg from "../../assets/newsletter.jpg";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (email) {
      // Display a success toast notification
      toast.success("Subscribed to our newsletter!", {
        position: "top-center",
        autoClose: 2000,
      });
      // Clear the email input field
      setEmail("");
    } else {
      // Display an error toast notification
      toast.error("Please enter a valid email address.", {
        position: "top-center", // Use a string for position
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="relative mb-4 h-[50vh] p-3 m-3 md:h-[80vh] lg:h-[70vh] xl:h-[680px] flex items-center justify-center">
      {/* Background Image */}
      <img
        src={newsletterimg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl">
        <div className="flex flex-col items-center w-full max-w-[500px] p-6 lg:items-start lg:pl-12 xl:max-w-[600px] text-white">
          <div className="text-center lg:text-left">
            <p className="text-sm lg:text-base font-medium uppercase tracking-wide">
              Newsletter
            </p>
            <h3 className="mt-2 text-2xl lg:text-4xl font-semibold">
              Sign up now!
            </h3>
            <p className="mt-4 text-xs lg:text-base">
              Be the first one to know all about the Exciting Offers, Travel
              Updates and more.
            </p>
          </div>
          <div className="mt-6 w-full">
            <form onSubmit={handleSubscribe}>
              <div className="relative flex items-center w-full rounded-full bg-white p-2 pl-4 lg:pl-6">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full grow px-1 py-1 text-sm lg:text-base text-black font-small focus:outline-none rounded-full placeholder:text-xs" // Added placeholder:text-xs
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-2 rounded-full bg-blue-500 hover:bg-blue-600 px-3 py-1 text-sm lg:text-base font-xs text-white lg:px-10"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Add the ToastContainer here */}
    </div>
  );
};

export default Newsletter;
