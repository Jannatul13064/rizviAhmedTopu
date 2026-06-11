"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaHeadset,
  FaTasks,
  FaUserCheck,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "RIZVI AHMED TOPU";

  const [iconPositions, setIconPositions] = useState<
    { x: number; y: number }[]
  >([]);

  const icons = [FaHeadset, FaTasks, FaUserCheck, FaChartLine, FaRocket];
  const orbitRadius = 180;
  const orbitDuration = 12;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!mounted) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [mounted]);

  // Orbit positions
  useEffect(() => {
    if (!mounted) return;
    const positions = icons.map((_, index) => {
      const angle = (index / icons.length) * 2 * Math.PI;
      return {
        x: orbitRadius * Math.cos(angle),
        y: orbitRadius * Math.sin(angle),
      };
    });
    setIconPositions(positions);
  }, [mounted]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center justify-center min-h-[70vh] text-center overflow-hidden py-20 px-4"
    >
      {/* Glow Circle */}
      <motion.div
        className="absolute w-[320px] h-[320px] rounded-full border-2 border-cyan-400/30 blur-2xl -z-10"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />

      {/* Orbit Icons */}
      {mounted &&
        icons.map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-indigo-300"
            style={{
              fontSize: 50,
              top: "50%",
              left: "50%",
              translateX: -25,
              translateY: -155,
            }}
            animate={{ rotate: [0, 360] }}
            transition={{
              repeat: Infinity,
              duration: orbitDuration,
              ease: "linear",
              delay: (index / icons.length) * 2,
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                x: iconPositions[index]?.x || 0,
                y: iconPositions[index]?.y || 0,
              }}
            >
              <Icon />
            </motion.div>
          </motion.div>
        ))}

      {/* Profile */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="relative"
      >
        <motion.div
          className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <Image
          src="/images/personal/profile.png"
          alt="Rizvi Ahmed Topu"
          width={320}
          height={320}
          priority
          className="rounded-full object-cover border-4 border-white/20 shadow-[0_0_100px_rgba(59,130,246,0.8)]"
        />
      </motion.div>

      {/* Name */}
      <motion.h1 className="mt-8 text-4xl sm:text-6xl font-extrabold py-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500">
        {displayedName}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-1 bg-blue-400 ml-1 h-[1em]"
        />
      </motion.h1>

      {/* Description */}
      <motion.p className="text-gray-300 text-lg sm:text-xl mt-4 max-w-3xl leading-relaxed px-6">
        Executive Officer at{" "}
        <span className="text-blue-400 font-semibold">Capelli Sports</span>,
        specializing in{" "}
        <span className="text-emerald-400 font-semibold">
          customer service operations, order management, and workflow
          optimization
        </span>
        . Focused on improving customer satisfaction, reducing response time,
        and delivering efficient service solutions.
        <br />
        <span className="text-green-400 font-semibold">
          ✔ 95%+ issue resolution within SLA
        </span>
      </motion.p>

      {/* Buttons */}
      <motion.div className="flex flex-wrap justify-center gap-4 mt-8">
        <Link
          href="/about"
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Explore My Work
        </Link>

        <Link
          href="/cv"
          className="px-8 py-3 border border-blue-500 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-black font-semibold transition"
        >
          Download CV
        </Link>
      </motion.div>
    </motion.section>
  );
}
