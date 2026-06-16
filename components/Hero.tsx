"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";
import {
  FaHeadset,
  FaTasks,
  FaUserCheck,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  const fullName = "RIZVI AHAMED TOPU";

  const icons = useMemo(
    () => [FaHeadset, FaTasks, FaUserCheck, FaChartLine, FaRocket],
    [],
  );

  const orbitRadius = 180;
  const orbitDuration = 12;

  // ✅ FIXED: stable + rounded values (no SSR mismatch)
  const iconPositions = useMemo(() => {
    return icons.map((_, index) => {
      const angle = (index / icons.length) * 2 * Math.PI;

      const x = orbitRadius * Math.cos(angle);
      const y = orbitRadius * Math.sin(angle);

      return {
        x: Math.round(x * 1000) / 1000,
        y: Math.round(y * 1000) / 1000,
      };
    });
  }, [icons]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] text-center overflow-hidden py-20 px-4">
      {/* Glow Background */}
      <motion.div
        className="absolute w-[320px] h-[320px] rounded-full border-2 border-cyan-400/30 blur-2xl -z-10"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />

      {/* ORBIT ICONS (FINAL FIXED VERSION) */}
      {icons.map((Icon, index) => {
        const pos = iconPositions[index];

        return (
          <div
            key={`orbit-${index}`}
            className="absolute left-1/2 top-1/2 text-indigo-300"
            style={{
              fontSize: 50,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* rotation layer */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: orbitDuration,
                ease: "linear",
              }}
              style={{ position: "relative" }}
            >
              {/* ✅ FIX: NO STRING transform, use motion values instead */}
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
          </div>
        );
      })}

      {/* Profile Image */}
      <div className="relative mt-10">
        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />

        <Image
          src="/images/personal/profile.png"
          alt="Rizvi Ahmed Topu"
          width={320}
          height={320}
          priority
          className="rounded-full object-cover border-4 border-white/20 shadow-[0_0_100px_rgba(59,130,246,0.8)]"
        />
      </div>

      {/* Name */}
      <h1 className="mt-8 text-4xl sm:text-6xl font-extrabold py-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500">
        {fullName}
        <span className="inline-block w-1 h-[1em] ml-1 bg-blue-400 animate-pulse" />
      </h1>

      {/* Description */}
      <p className="text-gray-300 text-lg sm:text-xl mt-4 max-w-3xl leading-relaxed px-6">
        Executive Officer at{" "}
        <span className="text-blue-400 font-semibold">Capelli Sports</span>,
        specializing in customer service operations, order management, and
        workflow optimization.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Link
          href="/about"
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-xl font-semibold hover:scale-105 transition"
        >
          Explore My Work
        </Link>

        <Link
          href="/cv"
          className="px-8 py-3 border border-blue-500 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-black transition"
        >
          Download CV
        </Link>
      </div>
    </section>
  );
}
