import React, { useState } from "react";

const TaxiBooking = () => {
  const [formData, setFormData] = useState({
    vehicleType: "",
    fromDate: "",
    toDate: "",
    name: "",
    email: "",
    phone: "",
    travelFrom: "",
    travelTo: "",  // Added Travel To field
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.vehicleType) formErrors.vehicleType = "Vehicle type is required.";
    if (!formData.fromDate) formErrors.fromDate = "From date is required.";
    if (!formData.toDate) formErrors.toDate = "To date is required.";
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!formData.phone) formErrors.phone = "Phone number is required.";
    if (!formData.travelFrom) formErrors.travelFrom = "Traveling from location is required.";
    if (!formData.travelTo) formErrors.travelTo = "Traveling to location is required."; // Added validation for Travel To

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:3001/api/taxibooking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Taxi booked successfully!", result);
          setIsSubmitted(true);
        } else {
          console.error("Error booking taxi:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-lg mx-auto p-4 bg-white rounded shadow text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-600">Booking Confirmed!</h2>
        <p className="text-lg">
          Thank you, {formData.name}, your taxi has been successfully booked.
        </p>
        <p className="text-lg">Vehicle Type: {formData.vehicleType}</p>
        <p className="text-lg">From Date: {formData.fromDate}</p>
        <p className="text-lg">To Date: {formData.toDate}</p>
        <p className="text-lg">Traveling From: {formData.travelFrom}</p>
        <p className="text-lg">Traveling To: {formData.travelTo}</p> {/* Display Travel To */}
        <p className="text-lg">
          We will contact you at {formData.email} or {formData.phone} for further details.
        </p>
        <p className="text-lg mt-4">Safe travels!</p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Taxi Booking Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Vehicle Type */}
        <div className="mb-4">
          <label className="block text-gray-700">Vehicle Type</label>
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          >
            <option value="">Select Vehicle Type</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Sedan">Sedan</option>
            <option value="Traveller">Traveller</option>
            <option value="SUV">SUV</option>
          </select>
          {errors.vehicleType && (
            <p className="text-red-500 text-sm">{errors.vehicleType}</p>
          )}
        </div>

        {/* From Date */}
        <div className="mb-4">
          <label className="block text-gray-700">From Date</label>
          <input
            type="date"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.fromDate && (
            <p className="text-red-500 text-sm">{errors.fromDate}</p>
          )}
        </div>

        {/* To Date */}
        <div className="mb-4">
          <label className="block text-gray-700">To Date</label>
          <input
            type="date"
            name="toDate"
            value={formData.toDate}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.toDate && (
            <p className="text-red-500 text-sm">{errors.toDate}</p>
          )}
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Traveling From */}
        <div className="mb-4">
          <label className="block text-gray-700">From Where You Are Travelling</label>
          <input
            type="text"
            name="travelFrom"
            value={formData.travelFrom}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.travelFrom && (
            <p className="text-red-500 text-sm">{errors.travelFrom}</p>
          )}
        </div>

        {/* Traveling To */}
        <div className="mb-4">
          <label className="block text-gray-700">Traveling To</label>
          <input
            type="text"
            name="travelTo"  // Added Travel To field
            value={formData.travelTo}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.travelTo && (
            <p className="text-red-500 text-sm">{errors.travelTo}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaxiBooking;
