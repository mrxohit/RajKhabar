import React from "react";
import NewsCard from "./NewsCard";

const Section = ({ heading, newsItems }) => (
  <section>
    <h2 className="text-red-600 font-bold text-sm mb-2">{heading}</h2>
    {newsItems.map((item, index) => (
      <NewsCard key={index} {...item} />
    ))}
  </section>
);

export default Section;
