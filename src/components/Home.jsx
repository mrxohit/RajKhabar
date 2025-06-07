import React, { useState } from "react";
import news from "../data/newsData";
import CategoryTabs from "../components/CategoryTabs";
import NewsCard from "../components/NewsCard";
import BigNews from "../components/BigNews";
import CategoryGrid from "../components/CategoryGrid";
const Home = () => {
  const [activeTab, setActiveTab] = useState("ताज़ा खबरें");
  {
    news.map((item, index) => <NewsCard key={index} {...item} />);
  }
  return (
    <div>
      <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />{" "}
      {/* ✅ pass props */}
      {activeTab === "अन्य कैटेगरी" ? (
        <CategoryGrid />
      ) : (
        <>
          <BigNews
            title="Anuprati Coaching Yojana: मुख्यमंत्री अनुप्रति कोचिंग योजना वर्ष 2024-25 के लिए ऑनलाइन आवेदन शुरू"
            category="बड़ी खबर"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouuqmZOBgqEhrhx3R5L0fRmXXb9UQ0HnVNg&s"
          />
          <main className="px-4 py-3 mb-14 bg-[#f9f9f9] space-y-4 flex-1">
            <section>
              <NewsCard
                title="Anuprati Coaching Yojana: मुख्यमंत्री अनुप्रति कोचिंग योजना वर्ष 2024-25 के लिए ऑनलाइन आवेदन शुरू"
                time="5 मिनट पहले"
                category="बड़ी खबर"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouuqmZOBgqEhrhx3R5L0fRmXXb9UQ0HnVNg&s"
              />
            </section>
            <NewsCard
              title="Anuprati Coaching Yojana: मुख्यमंत्री अनुप्रति कोचिंग योजना वर्ष 2024-25 के लिए ऑनलाइन आवेदन शुरू, यहाँ से भरे फॉर्म"
              time="5 मिनट पहले"
              category="योजना"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouuqmZOBgqEhrhx3R5L0fRmXXb9UQ0HnVNg&s"
            />
            <NewsCard
              title="Rajasthan NHM And Rajmes Recruitment 2025: राजस्थान चिकित्सा विभाग में 13398 पदों पर भर्ती का नोटिफिकेशन जारी, आवेदन 18 फरवरी से"
              time="2 घंटे पहले"
              category="सरकारी नौकरी"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAyBoql8ggI8npANi39srjf6Tsl-bTC1gMFQ&s"
            />
            <NewsCard
              title="REET Exam Answer Key: रीट 2024 परीक्षा की आंसरकी और रिस्पॉन्स शीट जारी, यहाँ देखें"
              time="5 मिनट पहले"
              category="ताज़ा खबरें"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRe5rHWoq475T5a_uU_y9bTQYmTxuOhmtxA&s"
            />
          </main>
        </>
      )}
    </div>
  );
};

export default Home;
