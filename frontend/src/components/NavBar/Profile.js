import React, { useState } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "Male",
    dateOfBirth: "",
    instagram: "",
    homeTown: "",
    currentTown: "",
    address: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    console.log("Profile submitted:", profileData);
  };

  return (
    <div className="p-8">
      <h3 className="text-lg font-semibold  ">Your Profile Details</h3>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Left Column */}
        <div>
          <label className="block mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={profileData.firstName}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={profileData.lastName}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Gender</label>
          <select
            name="gender"
            value={profileData.gender}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={profileData.dateOfBirth}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>

        {/* Right Column */}
        <div>
          <label className="block mb-1">Instagram Profile</label>
          <input
            type="url"
            name="instagram"
            value={profileData.instagram}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>

        <div>
          <label className="block mb-1">Home Town</label>
          <input
            type="text"
            name="homeTown"
            value={profileData.homeTown}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>

        <div>
          <label className="block mb-1">Current Town</label>
          <input
            type="text"
            name="currentTown"
            value={profileData.currentTown}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>

        <div>
          <label className="block mb-1">Address</label>
          <textarea
            name="address"
            value={profileData.address}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            rows="3"
          />
        </div>

        <div className="col-span-2">
          <label className="block mb-1">About</label>
          <textarea
            name="about"
            value={profileData.about}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            rows="4"
          />
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded py-2 px-4"
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
