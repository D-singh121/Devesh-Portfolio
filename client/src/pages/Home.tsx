import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const Home = () => {
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/919082444800?text=Hi%20Devesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!`,
      "_blank"
    );
  };

  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      url: "https://github.com/D-singh121",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/devesh-choudhary-b25a01152/",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      url: "https://x.com/Dee_Singh121",
      label: "Twitter",
    },
    {
      icon: <SiHashnode className="w-6 h-6" />,
      url: "https://devesh121.hashnode.dev/",
      label: "Hashnode",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full px-4 sm:px-6 lg:px-8 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-30 dark:opacity-50">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 2,
                }}
                style={{
                  background: `radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)`,
                  width: `${Math.random() * 300 + 100}px`,
                  height: `${Math.random() * 300 + 100}px`,
                  left: `${i * 30}%`,
                  top: `${Math.random() * 40}%`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center relative z-10">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8 sm:space-y-10 max-w-4xl py-20 sm:py-24"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-indigo-400 dark:text-indigo-300 font-medium tracking-wide"
            >
              👋 Welcome to my portfolio
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative px-4 sm:px-0 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 dark:from-indigo-300 dark:via-purple-300 dark:to-indigo-300 animate-gradient inline-block">
                Hi, I'm Devesh Choudhary
              </span>
            </motion.h1>

            {/* Role */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-indigo-500 dark:text-indigo-400 font-medium">
                Full Stack Developer
              </span>
              <span className="hidden sm:inline-block text-gray-400">•</span>
              <span className="text-purple-500 dark:text-purple-400 font-medium">
                Problem Solver
              </span>
              <span className="hidden sm:inline-block text-gray-400">•</span>
              <span className="text-indigo-500 dark:text-indigo-400 font-medium">
                DevOps & Tech Enthusiast
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-6 mt-8 sm:mt-10 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/projects"
                className="w-48 sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-indigo-500/30 dark:hover:shadow-indigo-500/50 transition-all duration-300 animate-gradient bg-[length:200%_auto] text-base sm:text-lg font-medium"
              >
                View Projects
              </Link>
              <a
                href="/contact"
                className="w-48 sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 dark:bg-gray-800/20 text-gray-700 dark:text-gray-200 backdrop-blur-sm rounded-full hover:bg-white/10 dark:hover:bg-gray-700/40 transition-all duration-300 border-2 border-gray-300 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/40"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <div className="flex justify-center items-center space-x-4 sm:space-x-5 mt-10 sm:mt-12">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 sm:p-3 bg-white/10 dark:bg-gray-800/20 rounded-full hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20 transition-all duration-300 text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/40"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {React.cloneElement(social.icon, {
                    className: "w-5 h-5 sm:w-6 sm:h-6"
                  })}
                </motion.a>
              ))}
              <motion.button
                onClick={handleWhatsAppClick}
                className="p-2.5 sm:p-3 bg-white/10 dark:bg-gray-800/20 rounded-full hover:bg-green-500/10 dark:hover:bg-green-500/20 transition-all duration-300 text-green-500 hover:text-green-400 shadow-lg hover:shadow-xl hover:shadow-green-500/20 dark:hover:shadow-green-500/40"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
