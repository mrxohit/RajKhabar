// src/components/NewsCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewsCard({ title, time, category, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/news/reet-answer-key");
  };
  return (
    <div
      // onClick={() => navigate(`/news/${news.id}`)}
      onClick={handleClick}
      className="flex exam cursor-pointer items-start space-x-3 p-3 bg-white rounded-xl shadow-sm border cursor-pointer hover:shadow-lg "
    >
      <img
        src={image}
        alt={title}
        className="w-24 h-20 object-cover rounded-md"
      />
      <div className="flex flex-col">
        <span className="text-red-600 text-xs font-semibold">{category}</span>
        <h3 className="text-sm text-black font-medium leading-snug">{title}</h3>
        <p className="text-gray-500 text-xs mt-1">{time}</p>
      </div>
    </div>
  );
}
