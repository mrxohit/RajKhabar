// RPSCExamCalendar2025.jsx
import React from "react";

export default function RPSCExamCalendar2025() {
  const data = [
    { name: "ग्रामसेवक भर्ती", date: "22 मई से 25 मई", release: "30 मई 2025" },
    { name: "ग्रामसेवक भर्ती", date: "22 मई से 25 मई", release: "30 मई 2025" },
    { name: "ग्रामसेवक भर्ती", date: "22 मई से 25 मई", release: "30 मई 2025" },
    { name: "ग्रामसेवक भर्ती", date: "22 मई से 25 मई", release: "30 मई 2025" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-red-700">
        Exam Calendar 2025
      </h2>
      <div className="bg-white shadow  exam rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 bg-red-100 p-2 font-semibold">
          <div>परीक्षा का नाम</div>
          <div>परीक्षा तिथि</div>
        </div>
        {data.map((item, index) => (
          <div key={index} className="grid grid-cols-2 border-t px-2 py-1">
            <div>
              {item.name}
              <div className="text-sm text-gray-500">
                रिलीज डेट : {item.release}
              </div>
            </div>
            <div className="font-semibold">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
