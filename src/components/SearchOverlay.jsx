// src/components/SearchOverlay.jsx
import React from "react";
import { Home, Search, Cross, XIcon } from "lucide-react";

const SearchOverlay = ({ isOpen, onClose }) => {
  return (
   <div
  className={`fixed inset-0 bg-white z-50 p-4 shadow-md transition-transform duration-300 ${
    isOpen ? "translate-y-0" : "-translate-y-full"
  }`}
>
  <div className="flex items-center w-full max-w-[700px] mx-auto gap-2">
    <input
      type="text"
      placeholder="Search..."
      className="flex-1 px-4 py-2 rounded-md border border-gray-300 text-sm outline-none"
    />
    <Search className="w-5 h-5 text-gray-500" />
    <XIcon onClick={onClose} className="w-5 h-5 cursor-pointer" />
  </div>
</div>

  );
};

export default SearchOverlay;
