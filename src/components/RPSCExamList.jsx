import React from "react";
export default function RPSCExamList() {
  const exams = [
    { year: 2025, name: "ग्रामसेवक" },
    { year: 2026, name: "शिक्षक" },
    { year: 2027, name: "कृषक" },
    { year: 2028, name: "पंचायत सदस्य" },
    { year: 2029, name: "स्वास्थ्य कार्यकर्ता" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">पिछले वर्षों का प्रश्नपत्र</h2>
      <div className="bg-white shadow exam rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 bg-red-100 p-2 font-semibold">
          <div>वर्ष</div>
          <div>परीक्षा का नाम</div>
          <div>डाउनलोड</div>
        </div>
        {exams.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-t px-2 py-1 items-center"
          >
            <div>{item.year}</div>
            <div>{item.name}</div>
            <div className="">
              <button className="text-white  rounded-full w-10 p-1">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
