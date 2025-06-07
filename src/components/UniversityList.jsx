import React from "react";
export default function UniversityList() {
  const universities = [
    "एमडीएसयू विश्वविद्यालय",
    "आरयू जयपुर विश्वविद्यालय",
    "जेएनवीयू विश्वविद्यालय",
    "यूओके कोटा विश्वविद्यालय",
    "एमएलएसयू विश्वविद्यालय",
    "वीएमओयू विश्वविद्यालय",
    "जीजीटीयू विश्वविद्यालय",
    "पीडीएसयू विश्वविद्यालय",
    "आर्यभट्ट विश्वविद्यालय",
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">University</h2>
      <div className="bg-white shadow exam rounded-lg divide-y">
        {universities.map((name, index) => (
          <div
            key={index}
            className="p-3 hover:bg-gray-100 cursor-pointer flex justify-between"
          >
            <span>{name}</span>
            <span>➡</span>
          </div>
        ))}
      </div>
        
    </div>
  );
}
