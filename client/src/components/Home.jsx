import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import hero1 from "../assets/hero-card-1.png";
import hero2 from "../assets/hero-card-2.png";
import hero3 from "../assets/hero-card-3.png";

import blue1 from "../assets/hero-tech-1.png";
import blue2 from "../assets/hero-tech-2.png";
import blue3 from "../assets/hero-tech-3.png";
import blue4 from "../assets/hero-tech-4.png";
import blue5 from "../assets/hero-tech-5.png";
import blue6 from "../assets/hero-tech-6.png";

import red1 from "../assets/hero-food-1.png";
import red2 from "../assets/hero-food-2.png";
import red3 from "../assets/hero-food-3.png";
import red4 from "../assets/hero-food-4.png";
import red5 from "../assets/hero-food-5.png";
import red6 from "../assets/hero-food-6.png";
import red7 from "../assets/hero-food-7.png";

import green1 from "../assets/hero-travel-1.png";
import green2 from "../assets/hero-travel-2.png";
import green3 from "../assets/hero-travel-3.png";
import green4 from "../assets/hero-travel-4.png";
import green5 from "../assets/hero-travel-5.png";
import green6 from "../assets/hero-travel-6.png";
import green7 from "../assets/hero-travel-7.png";
import green8 from "../assets/hero-travel-8.png";

// Utility: Lighten a hex color
function lighten(hex, amount) {
  let col = hex.replace("#", "");
  let num = parseInt(col, 16);

  let r = Math.min(255, (num >> 16) + amount);
  let g = Math.min(255, ((num >> 8) & 0x00ff) + amount);
  let b = Math.min(255, (num & 0x0000ff) + amount);

  return "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
}

function LeftIllustration() {
  return (
    <svg width="220" height="360" viewBox="0 0 220 360" fill="none">
      <rect
        x="10"
        y="20"
        width="180"
        height="120"
        rx="14"
        fill="#fff"
        opacity="0.04"
      />
      <circle cx="60" cy="200" r="40" fill="#fff" opacity="0.04" />
      <rect
        x="20"
        y="260"
        width="140"
        height="60"
        rx="10"
        fill="#fff"
        opacity="0.03"
      />
    </svg>
  );
}

function RightIllustration() {
  return (
    <svg width="220" height="360" viewBox="0 0 220 360" fill="none">
      <rect
        x="20"
        y="40"
        width="160"
        height="90"
        rx="12"
        fill="#fff"
        opacity="0.03"
      />
      <circle cx="150" cy="200" r="36" fill="#fff" opacity="0.04" />
      <rect
        x="24"
        y="150"
        width="64"
        height="40"
        rx="8"
        fill="#fff"
        opacity="0.35"
      />
    </svg>
  );
}

function FloatingIcon({ x = 0, y = 0, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="absolute"
      style={{ left: x, top: y }}
    >
      <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="6" stroke="#fff" strokeWidth="1.5" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const headings = [
    {
      text: "Share Your Tech Ideas",
      cardBg: "#4583AA",
      image: hero1,
      leftMini: [blue1, blue2, blue3],
      rightMini: [blue4, blue5, blue6],
    },
    {
      text: "Inspire With Your Food Stories",
      cardBg: "#BC382E",
      image: hero2,
      leftMini: [red1, red2, red3],
      rightMini: [red4, red5, red6, red7],
    },
    {
      text: "Write About Your Travel Adventures",
      cardBg: "#388D80",
      image: hero3,
      leftMini: [green1, green2, green3, green4],
      rightMini: [green5, green6, green7, green8],
    },
  ];

  const [index, setIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updater = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updater);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 4500);

    return () => {
      window.removeEventListener("resize", updater);
      clearInterval(interval);
    };
  }, []);

  const current = headings[index];

  return (
    <div id="/" className="relative w-full min-h-screen overflow-hidden">
      <motion.section
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="pt-28 pb-20 flex flex-col items-center justify-center min-h-screen"
      >
        <motion.div
          className="hidden lg:block absolute left-8 top-32"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <LeftIllustration />
        </motion.div>

        <motion.div
          className="hidden lg:block absolute right-8 top-40"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <RightIllustration />
        </motion.div>

        <FloatingIcon x={120} y={120} delay={0.3} />
        <FloatingIcon x={screenWidth - 160} y={260} delay={0.6} />

        <motion.h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 text-center">
          {current.text}
        </motion.h1>

        <motion.p className="mt-6 text-lg md:text-xl text-slate-700 max-w-2xl text-center">
          Create a beautiful and personal blog to share your thoughts, stories,
          and ideas with the world.
        </motion.p>

        {/* LEFT MINI IMAGES */}
        <motion.div
          key={"left-" + index}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block absolute left-8 bottom-20"
        >
          <div className="relative w-80 h-[700px]">
            {current.leftMini.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                className="absolute w-32 h-32 object-contain"
                style={{ top: i * 170, left: i % 2 === 0 ? 0 : 90 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.12 }}
              />
            ))}
          </div>
        </motion.div>

        {/* RIGHT MINI IMAGES */}
        <motion.div
          key={"right-" + index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block absolute right-8 bottom-20"
        >
          <div className="relative w-80 h-[700px]">
            {current.rightMini.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                className="absolute w-32 h-32 object-contain"
                style={{ top: i * 170, right: i % 2 === 0 ? 0 : 90 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.12 }}
              />
            ))}
          </div>
        </motion.div>

        {/* FEATURE CARD */}
        <motion.div className="mt-16 w-full flex justify-center px-6">
          <div className="w-full max-w-3xl relative">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: current.cardBg }}
            >
              <div className="w-full aspect-video">
                <img
                  src={current.image}
                  alt="Featured"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <motion.div
              className="absolute -top-6 left-8 bg-white/90 px-4 py-1 rounded-full shadow text-sm font-medium text-slate-800"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Featured
            </motion.div>
          </div>
        </motion.div>

        {/* CREATE POST BUTTON with Auto Hover Shade + FontAwesome Plus */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/create-post"
            className="w-[260px] md:w-[300px] px-8 py-4 rounded-full text-lg font-semibold shadow-lg text-white transition-all duration-300 flex items-center justify-center gap-3"
            style={{
              backgroundColor: current.cardBg,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = lighten(current.cardBg, 35);
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = current.cardBg;
            }}
          >
            <i className="fa-solid fa-plus text-xl"></i>
            Create Post
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
