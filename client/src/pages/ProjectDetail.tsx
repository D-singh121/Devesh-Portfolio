import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaTools } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
}

const projects: Record<string, Project> = {
  'ecommerce-platform': {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management and payment processing.',
    longDescription: `A comprehensive e-commerce solution built with modern technologies. This platform provides 
    real-time inventory tracking, secure payment processing, and an intuitive admin dashboard. The system handles 
    multiple payment methods, order management, and includes features like wishlist, cart management, and order tracking.`,
    image: '/images/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe API'],
    features: [
      'Real-time inventory management',
      'Secure payment processing with Stripe',
      'Admin dashboard for order management',
      'User authentication and authorization',
      'Responsive design for all devices',
      'Order tracking and history'
    ],
    githubUrl: '#',
    demoUrl: '#'
  },
  'task-management': {
    id: 'task-management',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    longDescription: `A powerful task management solution designed for team collaboration. Features include 
    real-time updates, task assignments, progress tracking, and team communication tools. The application 
    helps teams stay organized and productive with intuitive project management features.`,
    image: '/images/projects/task-app.jpg',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Cloud Functions'],
    features: [
      'Real-time collaboration',
      'Task assignment and tracking',
      'Team chat and comments',
      'File attachments',
      'Progress analytics',
      'Calendar integration'
    ],
    githubUrl: '#',
    demoUrl: '#'
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projects[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600 dark:text-gray-400">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Project Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              {project.description}
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
              >
                <FaGithub className="w-5 h-5" />
                View Source
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden mb-16 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/30 dark:to-purple-500/30" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About the Project</h2>
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {project.longDescription}
              </p>
            </motion.div>

            {/* Features and Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Technologies */}
              <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <FaTools className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Technologies Used</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail; 