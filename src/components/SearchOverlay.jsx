// src/components/SearchOverlay.jsx
import React from "react";
import { Home, Search, Cross, XIcon } from "lucide-react";

const SearchOverlay = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-white z-50 px-4 py-3 shadow-md transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center w-full max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 px-4 py-2 rounded-md border border-gray-300 outline-none"
        />
        <Search className="w-5 h-5 text-gray-500 ml-2" />
        <XIcon onClick={onClose} className="ml-2 w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchOverlay;
