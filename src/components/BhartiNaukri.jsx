import React from "react";
const data = [
  {
    id: 1,
    title: "सहायक लेखाकार 2025 अधिसूचना",
    positions: 2230,
    applicationDate: "1 जून - 10 जून",
  },
  {
    id: 2,
    title: "राजस्व निरीक्षक भर्ती 2025",
    positions: 1500,
    applicationDate: "5 जुलाई - 15 जुलाई",
  },
];
function BhartiNaukri() {
  return (
    <div className="space-y-3  min-w-full px-4 py-3">
      {data.map((item) => (
        <div className="bg-white p-3  exam rounded shadow">
          <p className="text-red-600 font-semibold">
            पदों की संख्या : {item.positions}
          </p>
          <h2 className="font-bold text-black">{item.title}</h2>
          <p className="text-sm text-gray-500">
            आवेदन डेट: {item.applicationDate}
          </p>
          <button className="text-red-600 font-bold text-sm">
            डाउनलोड नोटिफिकेशन
          </button>
        </div>
      ))}
    </div>
  );
}

export default BhartiNaukri;
