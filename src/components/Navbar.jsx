// import React from "react";
// import { Bell, Home, Menu } from "lucide-react";

// const Navbar = () => {
//   return (
//     <div className="bg-white shadow flex items-center justify-between p-4">
//       <h1 className="text-green-600 font-bold text-xl">
//         raj<span className="text-red-600">khabar</span>
//       </h1>
//       <div className="flex items-center space-x-4">
//         <Bell className="text-red-600 w-5 h-5" />
//         <div className="w-8 h-8 rounded-full bg-gray-300"></div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Bell, UserCircle2 } from "lucide-react";
import img from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="relative exam bg-[#ffff] top-0 min-w-full overflow-hidden h-12 flex items-center justify-between px-4 py-3 border-b shadow-sm bg-white">
      <Link to="/">
        <img className="w-20 " src={img} alt="" />
      </Link>

      <div className="flex items-center space-x-4">
        <Bell className="w-5 cursor-pointer h-5 text-red-500" />
        <Link to="/profile">
          <div className="w-8 h-8 rounded-full  flex items-center justify-center">
            <UserCircle2 className="w-6 h-6 cursor-pointer text-gray-600" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
