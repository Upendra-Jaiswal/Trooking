// import React from "react";
// import atoia from "../../assets/Recognition-atoI.jpg";
// import Bs from "../../assets/Recognition-Bs.png";
// import uttarakhand from "../../assets/recgnition/uttarakhand.jpg";
// import startup from "../../assets/Recognition-startupindia.png";
// import msme from "../../assets/recgnition/msme2.png";

// const Recognition = () => {
//   return (
//     <div className="p-6 flex flex-col items-center mt-32 bg-white">
//       <div className="text-center">
//         <h1 className="text-2xl font-bold">Recognitions</h1>
//         <h2 className="text-lg mt-2">Recognitions By Govt.</h2>
//       </div>
//       {/* First Row - Text Section */}
//       <div className="flex-1 p-4   mt-4">
//         <p>
//           In a brief period, Trippy India has achieved significant recognition
//           and success. With each new milestone, Trippy India adds a unique
//           feather to its cap. As a registered member of ATOAI, we are certified
//           tour operators. Our journey has been characterized by excellence and
//           trust, as demonstrated by our three-time consecutive receipt of the
//           MSME Best Enterprise (Travel & Tourism) award. This achievement
//           reflects our unwavering commitment to delivering top-tier travel
//           experiences.
//         </p>
//       </div>
//       {/* Second Row - Image Section */}
//       <div className="flex space-x-4 p-6">
//         <img
//           src={atoia}
//           alt="Recognition 1"
//           className="w-1/4 h-[200px] bg-white object-contain border border-gray-300 rounded-2xl shadow-2xl" // Changed to h-full and object-contain
//         />
//         <img
//           src={uttarakhand}
//           alt="Recognition 2"
//           className="w-1/4  w-[350px] object-contain border border-gray-300 h-[200px] bg-white rounded-2xl shadow-2xl"
//         />
//         <img
//           src={msme}
//           alt="Recognition 3"
//           className="w-1/4 h-[200px] bg-white object-contain border border-gray-300 rounded-2xl shadow-2xl"
//         />
//         <img
//           src={startup}
//           alt="Recognition 4"
//           className="w-1/4 h-[200px] bg-white object-contain border border-gray-300 rounded-2xl shadow-2xl"
//         />
//       </div>
//     </div>
//   );
// };

// export default Recognition;

import React from "react";
import atoia from "../../assets/Recognition-atoI.jpg";
import uttarakhand from "../../assets/recgnition/uttarakhand.jpg";
import startup from "../../assets/Recognition-startupindia.png";
import msme from "../../assets/recgnition/msme2.png";

const Recognition = () => {
  return (
    <div className="p-6 flex flex-col items-center mt-32 bg-white">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Recognitions</h1>
        <h2 className="text-lg md:text-xl mt-2">Recognitions By Govt.</h2>
      </div>
      {/* First Row - Text Section */}
      <div className="flex-1 p-4 mt-4">
        <p className="text-sm md:text-base">
          In a brief period, Trippy India has achieved significant recognition
          and success. With each new milestone, Trippy India adds a unique
          feather to its cap. As a registered member of ATOAI, we are certified
          tour operators. Our journey has been characterized by excellence and
          trust, as demonstrated by our three-time consecutive receipt of the
          MSME Best Enterprise (Travel & Tourism) award. This achievement
          reflects our unwavering commitment to delivering top-tier travel
          experiences.
        </p>
      </div>
      {/* Second Row - Image Section */}
      <div className="flex flex-wrap justify-center items-center gap-4 p-6">
        <img
          src={atoia}
          alt="Recognition 1"
          className="w-full sm:w-1/2 md:w-1/4 h-[200px] object-contain border border-gray-300 rounded-2xl shadow-2xl"
        />
        <img
          src={uttarakhand}
          alt="Recognition 2"
          className="w-full sm:w-1/2 md:w-1/4 h-[200px] object-contain border border-gray-300 rounded-2xl shadow-2xl"
        />
        <img
          src={msme}
          alt="Recognition 3"
          className="w-full sm:w-1/2 md:w-1/4 h-[200px] object-contain border border-gray-300 rounded-2xl shadow-2xl"
        />
        <img
          src={startup}
          alt="Recognition 4"
          className="w-full sm:w-1/2 md:w-1/4 h-[200px] object-contain border border-gray-300 rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Recognition;
