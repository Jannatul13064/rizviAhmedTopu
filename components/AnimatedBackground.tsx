// components/AnimatedBackground.tsx
"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function AnimatedBackground() {
  useEffect(() => {
    const gradientElement = document.querySelector(".gradient-background");

    if (gradientElement) {
      gsap.to(gradientElement, {
        duration: 10,
        backgroundPosition: "100% 100%",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: mouseX, clientY: mouseY } = e;
      const x = (mouseX / window.innerWidth) * 100;
      const y = (mouseY / window.innerHeight) * 100;

      gsap.to(gradientElement, {
        duration: 1,
        backgroundPosition: `${x}% ${y}%`,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="gradient-background fixed inset-0 z-[-1] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:400%_400%]"></div>
  );
}
