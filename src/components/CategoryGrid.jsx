import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "RPSC",
  "RSSB",
  "SSC",
  "IBPS",
  "RRB",
  "ARMY",
  "NAVY",
  "AIRFORCE",
  "UPSC",
  "PTET",
  "BSTC",
  "REET",
  "CET 12th Level",
  "CET Grad. Level",
  "RBSE",
  "Rajasthan Police",
  "CBSE",
  "University",
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/rpsc");
  };
  return (
    <div className="p-2 mb-14 grid grid-cols-4 gap-2">
      {categories.map((name, index) => (
        <div
          key={index}
          onClick={handleClick}
          // ✅ ek hi function sabke liye
          className="flex exam flex-col items-center justify-center border rounded-md p-2"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYTlMP9CUDvjPcZ9rGNZu0dVZUq2Cbh3nRpQ&s" // ✅ ek hi image sabke liye
            alt={name}
            className="w-12 h-12 object-contain"
          />
          <span className="text-xs mt-1 text-center">{name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
