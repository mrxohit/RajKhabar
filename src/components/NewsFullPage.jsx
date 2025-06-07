import React from "react";
import { ArrowLeft, MoreVertical } from "lucide-react";
import Image from "../assets/1.jpeg";
import { useParams, useNavigate } from "react-router-dom";
import NewsCard from "../components/NewsCard";

export default function NewsFullPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("Slug or ID mila:", id);
  return (
    <div className="p-4  mb-10 max-w-4xl mx-auto">
      {/* Top Navbar */}
      

      {/* Main Content */}

      <div className="bg-gray-50 exam min-h-screen">
        <div className="bg-blue-600  text-white px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold">REET Exam Answer Key</h1>
        </div>
        <button>
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
        <div className="bg-blue-600 text-white px-4 py-2">
          <h1 className="text-lg font-semibold">
            REET Exam Answer Key: रीट 2024 परीक्षा की आंसर की जारी
          </h1>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-6">
          {/* Date & Image */}
          <p className="text-sm text-gray-500 mb-2">5 मिनट पहले</p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouuqmZOBgqEhrhx3R5L0fRmXXb9UQ0HnVNg&s"
            alt="Exam Paper"
            className="w-full h-auto rounded mb-4"
          />

          {/* Main Content */}
          <h2 className="text-xl font-bold mb-2">
            REET Exam Answer Key: रीट 2024 परीक्षा की ऑफिशियल आंसर की
          </h2>

          <p className="mb-3">
            रीट 2024 के लिए आवेदन प्रक्रिया समाप्त हो चुकी है और परीक्षा 2024
            में आयोजित की जाएगी। इस परीक्षा के लिए आधिकारिक आंसर की जारी कर दी
            गई है। जिन उम्मीदवारों ने परीक्षा दी थी, वे अब अपने उत्तर की पुष्टि
            कर सकते हैं।
          </p>

          <p className="mb-3">
            परीक्षा के तुरंत बाद, उम्मीदवारों को अपने प्रदर्शन का अंदाजा लगाने
            के लिए आंसर की की आवश्यकता होती है। राजस्थान माध्यमिक शिक्षा बोर्ड
            ने इस साल की आंसर की वेबसाइट पर जारी कर दी है।
          </p>

          <h3 className="font-semibold text-red-600 mt-6 mb-2">
            REET Exam Answer Key कैसे डाउनलोड करें?
          </h3>
          <p className="mb-2">
            राजस्थान माध्यमिक शिक्षा बोर्ड की ऑफिशियल वेबसाइट पर जाएं... होमपेज
            पर दिए गए REET Answer Key लिंक पर क्लिक करें। मांगी गई जानकारी भरें
            और सबमिट करें। आपकी आंसर की स्क्रीन पर आ जाएगी। आप इसे डाउनलोड और
            प्रिंट कर सकते हैं।
          </p>
        </div>
      </div>

      {/* Related News */}
      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">संबंधित समाचार</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <NewsCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouuqmZOBgqEhrhx3R5L0fRmXXb9UQ0HnVNg&s"
            title="राजस्थान में ऑफिशियल आंसर की जारी, ऐसे करें डाउनलोड"
            time="5 मिनट पहले"
          />

          <NewsCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouuqmZOBgqEhrhx3R5L0fRmXXb9UQ0HnVNg&s"
            title="राजस्थान में ऑफिशियल आंसर की को लेकर आए अपडेट"
            time="5 मिनट पहले"
          />
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { useParams } from "react-router-dom";

// const NewsFullPage = () => {
//   const { id } = useParams();
//   console.log("Slug or ID mila:", id);
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="bg-blue-600 text-white px-4 py-2">
//         <h1 className="text-lg font-semibold">
//           REET Exam Answer Key: रीट 2024 परीक्षा की आंसर की जारी
//         </h1>
//       </div>

//       <div className="max-w-3xl mx-auto px-4 py-6">
//         {/* Date & Image */}
//         <p className="text-sm text-gray-500 mb-2">5 मिनट पहले</p>
//         <img
//           src="/exam-paper.jpg"
//           alt="Exam Paper"
//           className="w-full h-auto rounded mb-4"
//         />

//         {/* Main Content */}
//         <h2 className="text-xl font-bold mb-2">
//           REET Exam Answer Key: रीट 2024 परीक्षा की ऑफिशियल आंसर की
//         </h2>

//         <p className="mb-3">
//           रीट 2024 के लिए आवेदन प्रक्रिया समाप्त हो चुकी है और परीक्षा 2024 में
//           आयोजित की जाएगी। इस परीक्षा के लिए आधिकारिक आंसर की जारी कर दी गई
//           है।...
//         </p>

//         <p className="mb-3">
//           परीक्षा के तुरंत बाद, उम्मीदवारों को अपने प्रदर्शन का अंदाजा लगाने के
//           लिए आंसर की की आवश्यकता होती है।...
//         </p>

//         <h3 className="font-semibold text-red-600 mt-6 mb-2">
//           REET Exam Answer Key कैसे डाउनलोड करें?
//         </h3>
//         <p className="mb-2">
//           राजस्थान माध्यमिक शिक्षा बोर्ड की ऑफिशियल वेबसाइट पर जाएं...
//         </p>

//       </div>
//     </div>
//   );
// };
// export default NewsFullPage;
// {/* Related News */}
//         <div className="mt-8">
//           <h3 className="text-lg font-bold mb-4">संबंधित समाचार</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {[1, 2].map((_, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white p-2 rounded shadow hover:shadow-md transition cursor-pointer"
//               >
//                 <img
//                   src="/exam-paper.jpg"
//                   alt="Related News"
//                   className="rounded mb-2"
//                 />
//                 <p className="text-sm font-medium">
//                   राजस्थान में ऑफिशियल आंसर की को लेकर आए अपडेट
//                 </p>
//                 <p className="text-xs text-gray-500">5 मिनट पहले</p>
//               </div>
//             ))}
//           </div>
//         </div>
