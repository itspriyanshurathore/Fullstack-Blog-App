import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ThumbsUp, Sparkles, Cpu } from "lucide-react";

import word1 from "../assets/word-1.png";
import word2 from "../assets/word-2.png";
import word3 from "../assets/word-3.png";
import word4 from "../assets/word-4.png";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <ShieldCheck size={20} strokeWidth={2.2} />,
      title: "Trusted & Secure",
      desc: "Your data is protected with industry-leading security standards.",
    },
    {
      icon: <Sparkles size={20} strokeWidth={2.2} />,
      title: "AI Powered",
      desc: "AI-driven features that enhance your productivity and creativity.",
    },
    {
      icon: <Cpu size={20} strokeWidth={2.2} />,
      title: "High Performance",
      desc: "Fast loading, smooth UI, and optimized performance at all times.",
    },
    {
      icon: <ThumbsUp size={20} strokeWidth={2.2} />,
      title: "User Friendly",
      desc: "Minimal and intuitive interface for a smoother experience.",
    },
  ];

  return (
    <div className="w-full py-20 px-6 md:px-24 relative bg-white overflow-hidden">
      {/* ---------- RIGHT SIDE WORD IMAGES ---------- */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {/* Right Top */}
        <motion.img
          src={word2}
          alt="side-word-1"
          className="absolute w-[220px] opacity-90 right-[-70px] top-10"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />

        {/* Right Middle */}
        <motion.img
          src={word4}
          alt="side-word-2"
          className="absolute w-[260px] opacity-90 right-[-90px] top-[350px]"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        />
      </div>

      {/* ---------- HEADING ---------- */}
      <div className="flex items-center justify-center gap-6 mb-4 relative z-20">
        <div className="h-0.5 w-20 md:w-40 bg-black/30"></div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center text-gray-900 whitespace-nowrap"
        >
          Why Choose Us
        </motion.h2>

        <div className="h-0.5 w-20 md:w-40 bg-black/30"></div>
      </div>

      <p className="text-center text-gray-600 text-lg max-w-xl mx-auto relative z-20">
        A modern, clean, and intelligent platform tailored for your success.
      </p>

      {/* ---------- DIAMOND SHAPE + PREMIUM BACKGROUND ---------- */}
      <div className="relative z-20 mt-24 w-full flex flex-col items-center min-h-[650px]">
        {/* PREMIUM GRADIENT DOTTED BACKGROUND */}
        <svg
          className="absolute inset-0 w-full h-full opacity-70 pointer-events-none"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="gradStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9b9bff" />
              <stop offset="50%" stopColor="#ff6ec7" />
              <stop offset="100%" stopColor="#6ee7ff" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Arcs */}
          <path
            d="M 100 80 C 300 -20, 500 -20, 700 80"
            stroke="url(#gradStroke)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 10"
          />
          <path
            d="M 80 260 C 300 160, 500 160, 720 260"
            stroke="url(#gradStroke)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 10"
          />
          <path
            d="M 100 430 C 300 520, 500 520, 700 430"
            stroke="url(#gradStroke)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 10"
          />

          {/* Glowing Nodes */}
          <circle cx="100" cy="80" r="6" fill="#A78BFA" filter="url(#glow)" />
          <circle cx="700" cy="80" r="6" fill="#38BDF8" filter="url(#glow)" />
          <circle cx="80" cy="260" r="6" fill="#FB7185" filter="url(#glow)" />
          <circle cx="720" cy="260" r="6" fill="#4ADE80" filter="url(#glow)" />
          <circle cx="100" cy="430" r="6" fill="#F472B6" filter="url(#glow)" />
          <circle cx="700" cy="430" r="6" fill="#60A5FA" filter="url(#glow)" />
        </svg>

        {/* TOP CARD */}
        <div className="mb-12">
          <Card item={cards[0]} />
        </div>

        {/* MIDDLE ROW */}
        <div className="flex flex-row justify-center gap-16 md:gap-32 mb-12">
          <Card item={cards[1]} />
          <Card item={cards[2]} />
        </div>

        {/* BOTTOM CARD */}
        <div>
          <Card item={cards[3]} />
        </div>

        {/* ---------- BOTTOM FOUNTAIN WORD IMAGES ---------- */}
        <div className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none z-[1]">
          {/* Bottom Left */}
          <motion.img
            src={word1}
            alt="bottom-word-1"
            className="absolute w-[180px] opacity-80 -left-16 bottom-[-40px]"
            initial={{ opacity: 0, y: 40, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -12 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          />

          {/* Bottom Right */}
          <motion.img
            src={word4}
            alt="bottom-word-3"
            className="absolute w-[200px] opacity-80 -right-16 bottom-[-40px]"
            initial={{ opacity: 0, y: 40, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 10 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- CARD COMPONENT ---------- */
function Card({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="relative rounded-xl shadow-md bg-white pt-10 pb-4 px-6 max-w-[260px] text-center"
    >
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-md bg-gray-900">
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow">
          {item.icon}
        </div>
      </div>

      <div className="rounded-lg p-3 mt-3 shadow-sm bg-white">
        <h3 className="text-md font-semibold text-gray-900 mb-1">
          {item.title}
        </h3>
        <p className="text-gray-700 text-[13px] leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}
