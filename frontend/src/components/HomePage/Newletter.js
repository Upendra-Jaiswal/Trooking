import React, { useState } from "react";
import newsletterimg from "../../assets/newsletter.jpg";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="relative h-screen mb-4">
      {/* Background Image */}
      <img
        src={newsletterimg}
        alt="Background"
        className="absolute inset-0 w-full p-4 rounded-2xl h-[680px] object-cover"
      />

      <div className="absolute left-0 top-0 flex h-full w-full items-center rounded-[0.625rem] lg:rounded-[1.25rem]">
        <div className="flex w-full max-w-[500px] flex-col gap-[3.75rem] text-white lg:pl-[3.75rem] 2xl:max-w-[600px]">
          <div className="px-5 text-center lg:px-0 lg:text-left">
            <p className="text-p-md font-medium font-poppins uppercase tracking-[0.25rem]">
              Newsletter
            </p>
            <h3 className="mt-1 text-h3-sm font-semibold font-poppins lg:text-h2">
              Sign up now!
            </h3>
            <p className="mt-5 text-p-xs lg:text-p-md">
              Be the first one to know all about the Exciting Offers, Travel
              Updates and more.
            </p>
          </div>
          <div className="mx-5 lg:mx-0">
            <form action="#">
              <div className="relative flex items-center rounded-full bg-white p-2 pl-3 lg:pl-8 2xl:gap-12 2xl:p-4 2xl:pl-6">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full grow px-4 py-2 text-black text-sm font-medium focus:outline-none lg:w-auto lg:text-lg"
                  name="email"
                  value={email} // Bind the input value to email state
                  onChange={(e) => setEmail(e.target.value)} // Update email state on every change
                />
                <button
                  type="submit"
                  className="absolute right-2 rounded-full bg-blue px-4 py-[0.625rem] text-p-sm font-medium text-white bg-blue-400 lg:px-12"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
