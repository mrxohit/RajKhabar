import React, { useState } from "react";
import AllNews from "./AllNews";
import BhartiNaukri from "./BhartiNaukri";
import Pathyakram from "./Pathyakram";
import RPSCExamList from "./RPSCExamList";
import RPSCExamCalendar2025 from "./RPSCExamCalendar2025";
import UniversityList from "./UniversityList";

const CategoryTabs2 = () => {
  const tabs = [
    "सभी समाचार",
    "भर्ती/नौकरी",
    "पाठ्यक्रम",
    "Exam List",
    "Exam Calendar 2025",
    "University List",
  ];
  const [activeTab, setActiveTab] = useState("सभी समाचार");

  const renderContent = () => {
    switch (activeTab) {
      case "सभी समाचार":
        return <AllNews />;
      case "भर्ती/नौकरी":
        return <BhartiNaukri />;
      case "पाठ्यक्रम":
        return <Pathyakram />;
      case "Exam List":
        return <RPSCExamList />;
      case "Exam Calendar 2025":
        return <RPSCExamCalendar2025 />;
      case "University List":
        return <UniversityList />;

      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex overflow-x-auto sticky space-x-6 px-4 py-2 border-b bg-white">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1 text-sm whitespace-nowrap font-medium ${
              activeTab === tab
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {renderContent()}
    </>
  );
};

export default CategoryTabs2;
