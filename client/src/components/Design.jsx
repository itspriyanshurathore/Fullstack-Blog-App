import React from "react";
import { motion } from "framer-motion";
import bgImg1 from "../assets/bg-section-1.png";
import bgImg2 from "../assets/bg-section-2.png";
import tools from "../assets/tools.png";

export default function DesignSection() {
  return (
    <div className="w-full py-28 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT SECTION */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-black text-5xl font-extrabold leading-tight"
          >
            Beautifully Designed,
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-black/90 text-lg mt-6 max-w-xl"
          >
            Create a beautiful blog that fits your style. Choose from a
            selection of easy-to-use templates—flexible layouts and hundreds of
            background images—or design something new.
          </motion.p>
        </div>

        {/* RIGHT FALLING IMAGE SECTION */}
        <div className="relative flex justify-end overflow-visible">
          <motion.img
            src={tools}
            alt="tools"
            className="
    w-[330px] md:w-[380px]       
    absolute
    top-[-20px] md:top-[-30px]    
    right-2 md:right-6
    z-30
    pointer-events-none

    drop-shadow-[0px_18px_40px_rgba(0,0,0,0.35)]  
  "
            initial={{ opacity: 0, rotate: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              rotate: -12,
              y: 0,
            }} /* GOOD DRAMATIC ROTATION */
            transition={{ duration: 0.7, delay: 0.05 }}
            viewport={{ once: true }}
          />

          {/* BACK IMAGE (bgImg1 – behind) */}
          <motion.img
            src={bgImg1}
            alt="bg1"
            className="
      w-[700px] md:w-[600px]
      rounded-xl
      absolute
      top-20 md:top-24
      right-0
      opacity-90
      z-10                 /* BEHIND BOTH */
      pointer-events-none
    "
            initial={{ opacity: 0, rotate: 0, y: 40 }}
            whileInView={{ opacity: 1, rotate: -4, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          />

          {/* FRONT IMAGE (bgImg2 – front) */}
          <motion.img
            src={bgImg2}
            alt="bg2"
            className="
      w-[520px] md:w-[680px]
      rounded-xl
      relative
      top-40 md:top-48
      right-0
      z-20                  /* MIDDLE LAYER */
      pointer-events-none
    "
            initial={{ opacity: 0, rotate: 0, y: 40 }}
            whileInView={{ opacity: 1, rotate: -7, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </div>
  );
}
