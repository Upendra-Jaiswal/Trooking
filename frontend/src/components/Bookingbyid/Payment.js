// import axios from "axios";
// import { useState, useEffect } from "react";

// const Payment = () => {
//   // State for form inputs
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [amount, setAmount] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     // e.preventDefault();

//     setLoading(true);

//     const data = {
//       name: "UJ",
//       amount: 120,
//       number: 9691134534,
//       MUID: "MUID" + Date.now(),
//       transactionId: "T" + Date.now(),
//     };

//     await axios
//       .post("http://localhost:8000/order", { ...data })
//       .then((res) => {
//         if (res.data && res.data.data.instrumentResponse.redirectInfo.url) {
//           window.location.href =
//             res.data.data.instrumentResponse.redirectInfo.url;
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     handleSubmit();
//   }, []);

//   return (
//     <div className="flex items-center justify-between h-[600px] mx-20 ">
//       {/* Left Section: Video */}
//       <div className="w-1/2">
//         <video
//           src="https://www.phonepe.com/webstatic/8020/videos/page/home-fast-secure-v3.mp4"
//           autoPlay
//           loop
//           muted
//           className="w-[500px] h-full object-cover"
//         />

//         <h1>Initiating Payment....</h1>
//       </div>

//       {/* Right Section: Payment Form */}
//       {/* <div className="w-1/2 border-2 max-w-3xl  p-6 rounded-md border-dashed border-[#6739B7]">
//         <form onSubmit={handleSubmit} className="">
//           <h2 className="text-4xl font-bold mb-6 text-[#6739B7]">
//             Make a Payment
//           </h2>

//           <div className="mb-6">
//             <label
//               htmlFor="Name"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Name
//             </label>
//             <div className="relative mt-2 rounded-md shadow-sm">
//               <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                 <span className="text-gray-500 sm:text-sm ">😎</span>
//               </div>
//               <input
//                 id="Name"
//                 name="Name"
//                 onChange={(e) => setName(e.target.value)}
//                 type="text"
//                 required
//                 placeholder="Enter your name"
//                 className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="Mobile"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Mobile
//             </label>
//             <div className="relative mt-2 rounded-md shadow-sm">
//               <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                 <span className="text-gray-500 sm:text-sm">📞</span>
//               </div>
//               <input
//                 id="Mobile"
//                 name="Mobile"
//                 onChange={(e) => setMobile(e.target.value)}
//                 required
//                 type="text"
//                 placeholder="Enter your mobile number"
//                 className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="Amount"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Amount
//             </label>
//             <div className="relative mt-2 rounded-md shadow-sm">
//               <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                 <span className="text-gray-500 sm:text-sm">₹</span>
//               </div>
//               <input
//                 id="Amount"
//                 name="Amount"
//                 type="text"
//                 onChange={(e) => setAmount(e.target.value)}
//                 required
//                 placeholder="0.00"
//                 className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//               <div className="absolute inset-y-0 right-0 flex items-center">
//                 <label htmlFor="currency" className="sr-only">
//                   Currency
//                 </label>
//                 <select
//                   id="currency"
//                   name="currency"
//                   className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//                 >
//                   <option>INR</option>
//                   <option>CAD</option>
//                   <option>EUR</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           <button
//             disabled={loading}
//             type="submit"
//             className="w-full py-3 bg-[#6739B7] text-white font-semibold rounded-md hover:bg-primary-dark"
//           >
//             Pay Now
//           </button>
//         </form>
//       </div> */}
//     </div>
//   );
// };

// export default Payment;

import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const [loading, setLoading] = useState(false);
//   let { state } = useLocation();

  const location = useLocation();
  const amount = location.state?.amount;

  // Handle Payment Request
  const handlePayment = async () => {
    setLoading(true);

    const data = {
      name: "UJ", // Hardcoded or passed as a prop if needed
      amount: 100, // Coming from props
      number: 9691134534, // Can also be passed dynamically if needed
      MUID: "MUID" + Date.now(),
      transactionId: "T" + Date.now(),
    };

    console.log(data);

    await axios
      .post("http://localhost:8000/order", { ...data })
      .then((res) => {
        if (res.data && res.data.data.instrumentResponse.redirectInfo.url) {
          window.location.href =
            res.data.data.instrumentResponse.redirectInfo.url;
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  // Trigger payment on component mount
  useEffect(() => {
    handlePayment();
  }, [amount]);

  return (
    <div className="flex items-center justify-center h-[600px] mx-20">
      {/* Display Loading or Success UI */}
      {loading ? (
        <p>Processing your payment...</p>
      ) : (
        <p>Your payment is being initiated...</p>
      )}
    </div>
  );
};

export default Payment;
