import React from "react";

function Pathyakram() {
  const data = [
    {
      id: 1,
      title: "ग्रामसेवक भर्ती",
      releaseDate: "30 मई 2025",
      downloadLink: "#",
    },
    {
      id: 2,
      title: "राजस्व निरीक्षक भर्ती",
      releaseDate: "15 जून 2025",
      downloadLink: "#",
    },
    {
      id: 3,
      title: "राजस्व निरीक्षक भर्ती",
      releaseDate: "15 जून 2025",
      downloadLink: "#",
    },
    {
      id: 4,
      title: "राजस्व निरीक्षक भर्ती",
      releaseDate: "15 जून 2025",
      downloadLink: "#",
    },
  ];
  return (
    <div className="space-y-3 px-4 py-3">
      {data.map((item) => (
        <div className="bg-white p-3 exam rounded shadow">
          <h2 className="font-bold text-black">{item.title}</h2>
          <p className="text-sm text-gray-500">रिलीज डेट: {item.releaseDate}</p>
          <button className="text-red-600 font-bold text-sm">डाउनलोड</button>
        </div>
      ))}
    </div>
  );
}

export default Pathyakram;
