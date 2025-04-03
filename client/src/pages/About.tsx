import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaCode,
  FaBriefcase,
  FaTools,
  FaShieldAlt,
  FaServer
} from 'react-icons/fa';
import {
  SiPostgresql,
  SiPrisma,
  SiKubernetes,
  SiGitlab,
  SiJenkins,
  SiGoland
} from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" />, level: 95 },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, level: 90 },
    { name: 'Go', icon: <SiGoland className="text-[#00ADD8]" />, level: 85 },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" />, level: 90 },
    { name: 'Prisma', icon: <SiPrisma className="text-[#2D3748]" />, level: 85 },
    { name: 'AWS EKS', icon: <FaAws className="text-[#232F3E]" />, level: 80 },
    { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" />, level: 85 },
    { name: 'Kubernetes', icon: <SiKubernetes className="text-[#326CE5]" />, level: 80 },
    { name: 'GitLab CI/CD', icon: <SiGitlab className="text-[#FC6D26]" />, level: 85 },
    { name: 'Jenkins', icon: <SiJenkins className="text-[#D24939]" />, level: 80 },
    { name: 'API Security', icon: <FaShieldAlt className="text-[#4CAF50]" />, level: 90 },
    { name: 'DevOps', icon: <FaServer className="text-[#2196F3]" />, level: 85 }
  ];

  const services = [
    {
      title: 'Custom Web Applications',
      description: 'Building scalable and secure web solutions tailored to your business needs',
      icon: <FaCode className="w-6 h-6" />
    },
    {
      title: 'API Development',
      description: 'Designing and implementing robust RESTful APIs with proper authentication and security',
      icon: <FaServer className="w-6 h-6" />
    },
    {
      title: 'Cloud Deployment',
      description: 'Setting up and managing cloud infrastructure with AWS, Docker, and Kubernetes',
      icon: <FaAws className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6 md:px-1">
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            🌐 Freelance Full-Stack Web Developer | DevOps
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-0">
            🚀 Building Scalable & Secure Web Solutions
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-8">
            <FaTools className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.01 }}
                className="group relative bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center text-5xl">
                    {skill.icon}
                  </div>
                  <h3 className="md:text-lg font-semibold text-gray-900 dark:text-white mb-3 text-sm">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.3 }}
                      className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaBriefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Services</h2>
          </div>
          <div className="grid gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            📩 Contact for Web Solutions & Business Websites!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 