"use client";

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
  const fullName = "RIZVI AHMED TOPU";
  const icons = [FaHeadset, FaTasks, FaUserCheck, FaChartLine, FaRocket];

  const orbitRadius = 180;
  const orbitDuration = 12;

  // Typing effect (safe client-only)
  const typedName = fullName; // simplified (no hydration issues)

  // Pure function (NO state, NO useEffect)
  const getIconPosition = (index: number) => {
    const angle = (index / icons.length) * 2 * Math.PI;

    return {
      x: orbitRadius * Math.cos(angle),
      y: orbitRadius * Math.sin(angle),
    };
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center justify-center min-h-[70vh] text-center overflow-hidden py-20 px-4"
    >
      {/* Glow Background */}
      <motion.div
        className="absolute w-[320px] h-[320px] rounded-full border-2 border-cyan-400/30 blur-2xl -z-10"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />

      {/* Orbit Icons */}
      {icons.map((Icon, index) => {
        const pos = getIconPosition(index);

        return (
          <motion.div
            key={index}
            className="absolute text-indigo-300"
            style={{
              fontSize: 50,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
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
                x: pos.x,
                y: pos.y,
              }}
            >
              <Icon />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Profile Image */}
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
      <motion.h1
        className="mt-8 text-4xl sm:text-6xl font-extrabold py-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {typedName}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-1 bg-blue-400 ml-1 h-[1em] align-bottom"
        />
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-gray-300 text-lg sm:text-xl mt-4 max-w-3xl leading-relaxed px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Executive Officer at{" "}
        <span className="text-blue-400 font-semibold">Capelli Sports</span>,
        specializing in{" "}
        <span className="text-emerald-400 font-semibold">
          customer service operations, order management, and workflow
          optimization
        </span>
        . Focused on improving customer satisfaction, response speed, and
        operational efficiency.
        <br />
        <span className="text-green-400 font-semibold">
          ✔ 95%+ issue resolution rate
        </span>
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
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
