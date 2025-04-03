import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaTelegram, FaSlack, FaDiscord } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/919082444800?text=Hi%20Devesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!`, '_blank');
  };

  const handleDiscordClick = () => {
    // Replace this URL with your Discord server's invite link
    // For example: https://discord.gg/your-invite-code
    window.open('https://discord.gg/your-invite-code', '_blank');
  };

  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, url: "https://github.com/D-singh121", label: "GitHub", color: "hover:text-gray-100" },
    { icon: <FaLinkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/devesh-choudhary-b25a01152/", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: <FaTwitter className="w-5 h-5" />, url: "https://x.com/Dee_Singh121", label: "Twitter", color: "hover:text-blue-400" },
    { icon: <SiHashnode className="w-5 h-5" />, url: "https://devesh121.hashnode.dev/", label: "Hashnode", color: "hover:text-blue-600" },
    { icon: <FaWhatsapp className="w-5 h-5" />, url: "#", label: "WhatsApp", color: "hover:text-green-500", onClick: handleWhatsAppClick },
    { icon: <FaDiscord className="w-5 h-5" />, url: "#", label: "Discord", color: "hover:text-indigo-500", onClick: handleDiscordClick }
  ];

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10"></div>
      <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400">
              DC
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-indigo-400">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300">About</Link>
              <Link to="/projects" className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300">Projects</Link>
              <Link to="/contact" className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300">Contact</Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-indigo-400">Connect</h4>
            <div className="grid grid-cols-4 gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.onClick ? "#" : social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={social.onClick}
                  aria-label={social.label}
                  className={`p-3 bg-white/80 dark:bg-gray-800/50 rounded-xl hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20 transition-all duration-300 text-gray-600 dark:text-gray-400 ${social.color} shadow-sm flex items-center justify-center`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} DC. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <span className="mx-2 text-gray-400 dark:text-gray-600">•</span>
              <Link to="/terms" className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 