"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

type Quote = {
  text: string;
  author: string;
  arabic?: string; // Optional Arabic translation
  bangla?: string; // Optional Bangla translation
};

export default function Quote() {
  const quotes: Quote[] = [
    {
      text: "The best among you are those who have the best manners and character.",
      author: "Prophet Muhammad ﷺ",
      arabic: "خيركم أحسنكم أخلاقاً.",
    },
    {
      text: "When you are grateful, I will surely increase you [in favor].",
      author: "Quran 14:7",
      arabic: "وَإِذْ تَشْكُرُوا يَرْفَعْكُمْ",
      bangla:
        "আপনি যখন কৃতজ্ঞ থাকবেন, আমি নিশ্চিতভাবে আপনার প্রতি বরকত বৃদ্ধি করব।",
    },
    {
      text: "Prayer is the key to Paradise.",
      author: "Islamic Saying",
      arabic: "الصلاة مفتاح الجنة",
      bangla: "নামাজই জান্নাতের চাবিকাঠি।",
    },
    {
      text: "The best among you are those who have the best manners and character.",
      author: "Prophet Muhammad ﷺ",
      arabic: "خيركم أحسنكم أخلاقاً.",
    },
    {
      text: "When you are grateful, I will surely increase you [in favor].",
      author: "Quran 14:7",
      arabic: "وَإِذْ تَشْكُرُوا يَرْفَعْكُمْ",
      bangla:
        "আপনি যখন কৃতজ্ঞ থাকবেন, আমি নিশ্চিতভাবে আপনার প্রতি বরকত বৃদ্ধি করব।",
    },
    {
      text: "Prayer is the key to Paradise.",
      author: "Islamic Saying",
      arabic: "الصلاة مفتاح الجنة",
      bangla: "নামাজই জান্নাতের চাবিকাঠি।",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-16 to-black text-white">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 pb-3">
        Inspirational Quotes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {quotes.map((quote, i) => (
          <motion.div
            key={i}
            className="relative bg-gray-800/80 p-6 rounded-3xl shadow-2xl border border-gray-700 perspective"
            whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <div className="absolute top-4 left-4 text-blue-400 text-2xl">
              <FaQuoteLeft />
            </div>

            <p className="text-lg sm:text-xl italic mb-3 leading-relaxed">
              {quote.text}
            </p>

            {quote.arabic && (
              <p className="text-right text-lg sm:text-xl italic mb-3 leading-relaxed text-emerald-400">
                {quote.arabic}
              </p>
            )}

            {quote.bangla && (
              <p className="text-right text-lg sm:text-xl italic mb-3 leading-relaxed text-yellow-400">
                {quote.bangla}
              </p>
            )}

            <footer className="text-blue-400 font-semibold flex items-center justify-end gap-2">
              — {quote.author} <FaQuoteRight />
            </footer>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
