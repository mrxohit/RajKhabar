import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar"; // Jo bhi tera navbar hai
import BottomNav from "../components/BottomNav";
import { Outlet } from "react-router-dom";
import SearchOverlay from "../components/SearchOverlay";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <>
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      
      <Navbar />
      <Outlet />

      <BottomNav
        openSidebar={() => {
          setIsSidebarOpen(true);
          setIsSearchOpen(false);
        }}
        openSearch={() => {
          setIsSearchOpen(true);
          setIsSidebarOpen(false);
        }}
      />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default MainLayout;
