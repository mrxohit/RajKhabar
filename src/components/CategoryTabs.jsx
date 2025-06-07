// src/components/CategoryTabs.jsx
import React, { useState } from "react";

const categories = ["ताज़ा खबरें", "सरकारी नौकरी", "योजना", "अन्य कैटेगरी"];

const CategoryTabs = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (cat) => {
    setActiveTab(cat);
  };

  return (
    <div className="flex  overflow-x-auto space-x-6 px-4 py-2 border-b bg-white">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveTab(cat)}
          className={`pb-1 text-sm whitespace-nowrap font-medium ${
            activeTab === cat
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-600"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
