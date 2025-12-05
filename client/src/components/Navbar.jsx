import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home as HomeIcon,
  Layers,
  LogIn,
  UserPlus,
  Menu,
  X,
  Plus,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path) => {
    if (path === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
    } else {
      navigate(path);
    }
  };

  const navLinks = [
    { name: "Home", icon: <HomeIcon size={18} />, path: "/" },
    { name: "Categories", icon: <Layers size={18} />, path: "/categories" },
    { name: "Login", icon: <LogIn size={18} />, path: "/login" },
    { name: "Register", icon: <UserPlus size={18} />, path: "/register" },
    { name: "Create Post", icon: <Plus size={18} />, path: "/createpost" },
  ];

  return (
    <>
      {/* NAVBAR WRAPPER */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`w-full fixed top-0 left-0 z-50 flex justify-center transition-all duration-300 ${
          scrolled ? "mt-2" : "mt-5"
        }`}
      >
        {/* NAVBAR */}
        <motion.nav
          animate={{
            padding: scrolled ? "8px 20px" : "14px 30px",
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.45)" // brighter when scrolled
              : "rgba(255,255,255,0.2)", // lighter at top
            borderWidth: "1px",
            borderColor: scrolled
              ? "rgba(255,255,255,0.6)"
              : "rgba(255,255,255,0.3)",
          }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
          className="
            flex items-center justify-between w-[92%] md:w-auto gap-8
            rounded-full backdrop-blur-xl 
            border shadow-[0_8px_30px_rgb(0,0,0,0.1)]
          "
        >
          {/* DESKTOP NAV LINKS */}
          <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <motion.li
                  key={item.name}
                  whileHover={{ scale: 1.07 }}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center gap-2 cursor-pointer relative group transition ${
                    isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                  }`}
                >
                  {item.icon}
                  {item.name}

                  {/* Underline Animation */}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-0.5
                      transition-all duration-300
                      ${
                        isActive
                          ? "w-full bg-blue-600"
                          : "w-0 bg-gray-800 group-hover:w-full"
                      }
                    `}
                  />
                </motion.li>
              );
            })}
          </ul>

          {/* MOBILE MENU BUTTON */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-800 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </motion.div>
        </motion.nav>
      </motion.div>

      {/* MOBILE DRAWER MENU */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 140, damping: 20 }}
        className="fixed top-0 right-0 w-[80%] max-w-[300px] h-full bg-white shadow-2xl z-[60] p-6"
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end mb-6">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <X size={28} />
          </motion.div>
        </div>

        {/* MOBILE LINKS */}
        <ul className="flex flex-col gap-6 text-lg font-semibold text-gray-800">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  handleNavClick(item.path);
                  setMenuOpen(false);
                }}
                className={`flex items-center gap-3 cursor-pointer ${
                  isActive ? "text-blue-600" : "text-gray-800"
                }`}
              >
                {item.icon}
                {item.name}
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </>
  );
}
