import React from "react";
import { Home, Search, Menu, UserCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
const BottomNav = ({ openSidebar, openSearch }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#FFf] border-t p-2 flex justify-around items-center shadow-md">
      <Link to="/">
        <div className="flex flex-col items-center text-gray-600 text-xs">
          <Home className="w-5 h-5" />
          <span>होम</span>
        </div>
      </Link>

      <div
        onClick={openSearch}
        className="flex flex-col items-center text-gray-600 text-xs"
      >
        <Search className="w-5 h-5" />
        <span>सर्च</span>
      </div>
      <div
        onClick={openSidebar}
        className=" flex flex-col items-center text-gray-600 text-xs"
      >
        <Menu className="w-5 h-5" />
        <span>मेन्यू</span>
      </div>
      <Link to="/profile">
        <div className="flex flex-col items-center text-gray-600 text-xs">
          <UserCircle2 className="w-5 h-5 " />
          <span>प्रोफाइल</span>
        </div>
      </Link>
    </nav>
  );
};

export default BottomNav;
