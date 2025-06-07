import React from "react";
import { FacebookIcon, Book, InstagramIcon, XIcon } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed rounded-l-3xl top-0 right-0 h-full bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out  ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } w-[60%]`}
    >
      <div className="p-4 h-20 rounded-tl-3xl bg-red-100 flex justify-between items-end">
        {/* Social Icons */}
        <div className="flex gap-4">
            <InstagramIcon className="w-5 h-5 text-black" />         
         <Book className="w-5 h-5 text-black" />
         <FacebookIcon className="w-5 h-5 text-black" />
        </div>

        {/* Close Button */}
        
        <XIcon onClick={onClose} className=" ml-2 mr-2 w-5 h-5" />
      </div>

      {/* Menu Items */}
      <div className="p-4 space-y-3 overflow-y-auto">
        {[
          "ताज़ा खबरें",
          "सरकारी नौकरी",
          "योजना",
          "RSSB",
          "RPSC",
          "SSC",
          "IBPS",
          "RRB",
          "ARMY",
          "NAVY",
          "AIRFORCE",
          "UPSC",
          "PTET",
          "BSTC",
          "REET",
        ].map((item, index) => (
          <div
            key={index}
            className="flex text-black items-center gap-2 text-xs border-b pb-2"
          >
            <span>📄</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
