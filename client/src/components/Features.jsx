import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  PenTool,
  Settings2,
  Cpu,
  Sparkles,
  Zap,
} from "lucide-react";

import word2 from "../assets/word-2.png";
import word3 from "../assets/word-3.png";

export default function Features() {
  const features = [
    {
      icon: <PenTool size={22} strokeWidth={2.4} />,
      title: "Easy Blog Creation",
      desc: "Create and publish posts with a distraction-free writing experience.",
    },
    {
      icon: <Settings2 size={22} strokeWidth={2.4} />,
      title: "Full Customization",
      desc: "Edit SEO, categories, tags, layout, and control your content fully.",
    },
    {
      icon: <Lightbulb size={22} strokeWidth={2.4} />,
      title: "Smart Suggestions",
      desc: "Improve readability and SEO with intelligent recommendations.",
    },
    {
      icon: <Cpu size={22} strokeWidth={2.4} />,
      title: "AI Title Generator",
      desc: "Generate powerful SEO titles instantly using AI.",
    },
    {
      icon: <Sparkles size={22} strokeWidth={2.4} />,
      title: "AI Content Writer",
      desc: "Write full-length blog posts automatically with AI.",
    },
    {
      icon: <Zap size={22} strokeWidth={2.4} />,
      title: "AI Meta + Tags",
      desc: "Auto-generate meta descriptions, keywords, and tag suggestions.",
    },
  ];

  return (
    <div
      id="Blogs"
      className="w-full py-28 px-6 md:px-24 relative bg-white overflow-visible"
    >
      {/* LEFT + RIGHT WORD IMAGES */}
      <div className="absolute inset-0 pointer-events-none">
        {/* LEFT — Word */}
        <motion.img
          src={word2}
          alt="left-word"
          className="absolute w-[150px] opacity-90 left-10 md:left-10 top-6"
          initial={{ opacity: 0, rotate: 0, x: -40 }}
          whileInView={{ opacity: 1, rotate: -10, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />

        {/* RIGHT — Word (NEW) */}
        <motion.img
          src={word3}
          alt="right-word"
          className="absolute w-[260px] opacity-90 right-10 md:right-10 top-40"
          initial={{ opacity: 0, rotate: 0, x: 40 }}
          whileInView={{ opacity: 1, rotate: 12, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />
      </div>

      {/* HEADER */}
      <div className="relative z-10 flex items-center justify-center gap-6">
        <div className="h-0.5 w-20 md:w-40 bg-black/30"></div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center text-gray-900 drop-shadow-lg whitespace-nowrap"
        >
          Powerful Features Built for You
        </motion.h2>

        <div className="h-0.5 w-20 md:w-40 bg-black/30"></div>
      </div>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-gray-700 mt-4 text-lg relative z-10"
      >
        Clean. Minimal. Professional. Designed to enhance your blogging
        workflow.
      </motion.p>

      {/* FEATURES GRID */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              rotate: -1,
              y: -8,
              transition: { duration: 0.3 },
            }}
            className="
              rounded-2xl shadow-lg bg-white 
              p-0 pt-10 pb-6 px-6
              transform -rotate-2
              hover:rotate-0
              transition-all cursor-pointer
              max-w-[280px] mx-auto
            "
          >
            {/* Icon Badge */}
            <div
              className="absolute -top-6 left-1/2 -translate-x-1/2
              w-14 h-14 rounded-full flex items-center justify-center shadow-md bg-gray-900"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                <span className="text-black">{feature.icon}</span>
              </div>
            </div>

            {/* Card */}
            <div className="rounded-xl p-4 mt-3 shadow-sm bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-[14px] leading-relaxed text-center">
                {feature.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
