"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  role: string;
  desc: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ title, role, desc, img }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-full sm:w-[48%] md:w-[32%] lg:w-[26%] bg-gray-900 border border-gray-700 rounded-3xl overflow-hidden shadow-xl cursor-grab"
      whileHover={{ scale: 1.05, rotateY: 4 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <div className="relative w-full h-56 overflow-hidden rounded-t-3xl">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-xs text-cyan-400 uppercase">{role}</p>
        <p className="text-sm text-gray-300 mt-2 line-clamp-3">{desc}</p>
      </div>
    </motion.div>
  );
};

export default Card;
