"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLightbulb, FaRocket, FaAward } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function About() {
  const features = [
    {
      icon: <FaLightbulb />,
      title: "Customer Experience Focus",
      description:
        "Delivering efficient and customer-centric solutions to improve satisfaction and loyalty.",
      color: "text-yellow-400",
    },
    {
      icon: <FaRocket />,
      title: "Operational Efficiency",
      description:
        "Streamlining order processing and service workflows for faster resolution.",
      color: "text-red-400",
    },
    {
      icon: <FaAward />,
      title: "Performance Driven",
      description:
        "Consistently maintaining high service standards and meeting SLA targets.",
      color: "text-green-400",
    },
    {
      icon: <GiArtificialIntelligence />,
      title: "Process Optimization",
      description:
        "Improving systems and workflows to enhance productivity and reduce errors.",
      color: "text-purple-400",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <Image
            src="/images/personal/profile.png"
            alt="Rizvi Ahmed Topu"
            width={350}
            height={350}
            className="rounded-2xl border-4 border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.4)] object-cover"
            priority
          />
        </motion.div>

        {/* Bio Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent">
            Rizvi Ahmed Topu
          </h1>

          <h2 className="text-xl text-blue-400 font-semibold mb-6">
            Executive Officer, Capelli Sports
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            Dedicated professional specializing in{" "}
            <span className="text-emerald-400 font-semibold">
              customer service operations, order management, and workflow
              optimization
            </span>
            . Focused on improving customer satisfaction, reducing response
            time, and ensuring smooth service delivery across all channels.
          </p>

          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            <a
              href="/work"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-blue-500 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-black font-semibold transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Feature Cards */}
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {features.map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
            transition={{ type: "tween", duration: 0.4 }}
            className="bg-gray-900/70 p-6 rounded-2xl shadow-2xl border border-gray-700 hover:border-blue-500/50 cursor-pointer flex flex-col items-center text-center"
          >
            <div className={`text-4xl mb-4 ${feature.color}`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
