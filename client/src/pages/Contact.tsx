import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:choudharydevesh121@gmail.com?subject=Portfolio Contact";
  };

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/919082444800?text=Hi%20Devesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!`,
      "_blank"
    );
  };

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com/D-singh121",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/devesh-choudhary-b25a01152/",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter className="w-5 h-5" />,
      url: "https://x.com/Dee_Singh121",
      label: "Twitter",
    },
    {
      icon: <SiHashnode className="w-5 h-5" />,
      url: "https://devesh121.hashnode.dev/",
      label: "Hashnode",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05)_0%,rgba(99,102,241,0)_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15)_0%,rgba(99,102,241,0)_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05)_0%,rgba(168,85,247,0)_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15)_0%,rgba(168,85,247,0)_50%)]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 animate-gradient">
            Contact Me
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's connect and discuss how we can work together to bring your
            ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Get in Touch Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/30"
          >
            <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <motion.button
                onClick={handleEmailClick}
                className="w-full flex items-center space-x-4 group hover:scale-105 transition-transform duration-300"
              >
                <div className="p-3 sm:p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-xl backdrop-blur-sm group-hover:from-indigo-500/20 group-hover:to-purple-500/20 dark:group-hover:from-indigo-500/30 dark:group-hover:to-purple-500/30 transition-all duration-300">
                  <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500 dark:text-indigo-400" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 truncate">
                    choudharydevesh121@gmail.com
                  </p>
                </div>
              </motion.button>

              <motion.button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center space-x-4 group hover:scale-105 transition-transform duration-300"
              >
                <div className="p-3 sm:p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 rounded-xl backdrop-blur-sm group-hover:from-green-500/20 group-hover:to-emerald-500/20 dark:group-hover:from-green-500/30 dark:group-hover:to-emerald-500/30 transition-all duration-300">
                  <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 dark:text-green-400" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                    WhatsApp
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    +91 9082444800
                  </p>
                </div>
              </motion.button>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-xl backdrop-blur-sm group-hover:from-indigo-500/20 group-hover:to-purple-500/20 dark:group-hover:from-indigo-500/30 dark:group-hover:to-purple-500/30 transition-all duration-300">
                  <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500 dark:text-indigo-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Mumbai, India
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-xl backdrop-blur-sm group-hover:from-indigo-500/20 group-hover:to-purple-500/20 dark:group-hover:from-indigo-500/30 dark:group-hover:to-purple-500/30 transition-all duration-300">
                  <FaPhone className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500 dark:text-indigo-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    +91 9082444800
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-gray-200/20 dark:border-gray-700/30">
              <h3 className="text-left mb-4 text-base sm:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400">
                Follow Me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 sm:p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-xl hover:from-indigo-500/20 hover:to-purple-500/20 dark:hover:from-indigo-500/30 dark:hover:to-purple-500/30 transition-all duration-300 text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/30"
          >
            <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 mb-6">
              Quick Connect
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Feel free to reach out to me directly through WhatsApp, email, or
              any of my social media platforms. I'm always excited to discuss
              new opportunities, collaborations, or just have a friendly chat
              about technology and development.
            </p>
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className="w-full px-8 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 text-white rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 text-lg font-medium"
              >
                Chat on WhatsApp
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEmailClick}
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 text-lg font-medium"
              >
                Send Email
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
