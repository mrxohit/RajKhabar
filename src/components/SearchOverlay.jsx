// src/components/SearchOverlay.jsx
import React from "react";
import { Home, Search, Cross, XIcon } from "lucide-react";

const SearchOverlay = ({ isOpen, onClose }) => {
  return (
    <div
<<<<<<< HEAD
      className={`fixed aa top-0 left-0 flex  justify-center items-center right-0 bg-white z-50 p-4 shadow-md transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex exam  p-1 items-center w-[90vw] justify-between">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1    px-4 py-2 rounded-md outline-none"
        />
=======
      className={`fixed flex  justify-center items-center w-[100vw] top-0  left-0 right-0 bg-white z-50 p-4  shadow-md transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className=" w-[80vw] exam p-1 justify-between">
        <input
          type="text"
          placeholder="Search..."
          className="  w-[50vw]  px-4 py-2 rounded-md outline-none"
        /> 
>>>>>>> a833ab6e6d8c0bc0836dd1f02527e8d8b7e79bec
        <Search className="w-5 h-5 text-gray-500 ml-2" />
        <XIcon onClick={onClose} className=" ml-2 mr-2 w-5 h-5" />
      </div>
    </div>
  );
};

export default SearchOverlay;
