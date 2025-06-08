// src/components/SearchOverlay.jsx
import React from "react";
import { Home, Search, Cross, XIcon } from "lucide-react";

const SearchOverlay = ({ isOpen, onClose }) => {
  return (
    <div
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
        <Search className="w-5 h-5 text-gray-500 ml-2" />
        
         <XIcon onClick={onClose} className=" ml-2 mr-2 w-5 h-5" />
        
      </div>
    </div>
  );
};

export default SearchOverlay;
