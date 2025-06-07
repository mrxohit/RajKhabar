import React from "react";
import { Routes, Route } from "react-router-dom";
import NewsFullPage from "../components/NewsFullPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import CategoryGrid from "../components/CategoryGrid";
import Rpscpage from "../components/Rpscpage"; // New page
import Profile from "../components/Profile";

export default function AllRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsFullPage />} />
        <Route path="/category" element={<CategoryGrid />} />
        <Route path="/rpsc" element={<Rpscpage />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
