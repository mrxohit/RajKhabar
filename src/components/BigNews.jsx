// src/components/BigNews.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const BigNews = ({ title, category, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/news/reet-answer-key");
  };
  return (
    <div
      onClick={handleClick}
      className=" cursor-pointer exam hover:shadow-lg relative mt-7 h-48 rounded-xl overflow-hidden mx-4 mb-4"
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
        <span className="text-xs text-white font-semibold bg-red-600 px-2 py-0.5 rounded w-fit mb-2">
          {category}
        </span>
        <h2 className="text-white font-bold text-sm leading-snug">{title}</h2>
      </div>
    </div>
  );
};

export default BigNews;
