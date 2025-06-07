// src/components/Profile.jsx
import React from "react";

const Profile = () => {
  return (
    <div className="p-4 bg-[#FFF8F0] min-h-screen">
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfAZNmqPLDIsZm9NQHL3bJJQk0tOIK4uG6A&s"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-red-600"
          />
          <h2 className="text-xl font-semibold text-gray-800">राजकुमार यादव</h2>
          <p className="text-sm text-gray-600">rajkumar@rajkhabar.com</p>

          <div className="mt-6 space-y-2 w-full">
            <button className="w-full py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
              प्रोफाइल एडिट करें
            </button>
            <button className="w-full py-2 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
              लॉगआउट करें
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
