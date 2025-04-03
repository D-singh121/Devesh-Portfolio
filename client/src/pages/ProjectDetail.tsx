import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaTools, FaArrowLeft, FaCalendar, FaTags } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

// Add getImagePath function
const getImagePath = (path: string) => {
  if (path.startsWith('http')) return path;
  return `/Devesh-Portfolio${path}`;
};

// Import the same projects data from Projects.tsx
const projects: Project[] = [
  {
    id: 1,
    title: 'MovieMania: A Netflix-Inspired Movie App',
    description: 'MovieMania is a feature-rich web application inspired by Netflix, built using the MERN stack. It offers a comprehensive movie browsing experience with features like user authentication, personalized recommendations, and real-time updates.',
    image: '/images/moviemania_netflix2.png',
    category: 'web',
    technologies: ['React.js', 'Node.js', "Express.js", "Axios", 'MongoDB', "Redux-Toolkit", "Material-UI", "JWT-Authentication", "Nodemailer", "TMDB-Apis", "bcryptjs", "Vercel"],
    githubUrl: 'https://github.com/D-singh121/moviemania_netflix_clone',
    demoUrl: 'https://moviemania-netflix-clone.vercel.app/'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features. This application helps teams stay organized with intuitive project management features, task assignments, and progress tracking.',
    image: '/images/task-app.jpg',
    category: 'web',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 3,
    title: 'ToDo App',
    description: '​The TodoApp is a simple task management application built using React and the Context API. It allows users to add, edit, and delete tasks, providing an intuitive interface for efficient task management.',
    image: '/images/todo-app.png',
    category: 'web',
    technologies: ['React.js', 'Context API', 'Tailwind CSS', "Vercel Hosting"],
    githubUrl: 'https://github.com/D-singh121/TodoApp',
    demoUrl: 'https://todo-app-pied-psi.vercel.app/'
  },
  {
    id: 4,
    title: "AI Chat Bot",
    description: "An intelligent chatbot powered by OpenAI's GPT model for customer support. This AI-powered solution provides instant responses to customer queries, learns from interactions, and maintains context for natural conversations.",
    image: '/images/moviemania.png',
    category: "backend",
    technologies: ["Python", "FastAPI", "OpenAI API", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/ai-chatbot",
    demoUrl: "https://ai-chatbot-demo.com"
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-gray-600 dark:text-gray-400 mb-4">Project not found</h1>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
          >
            <FaArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 mb-6 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg group"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-2">
                <FaCalendar className="w-4 h-4" />
                <span>Project Category: {project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTags className="w-4 h-4" />
                <span>{project.technologies.length} Technologies Used</span>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden mb-8 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/30 dark:to-purple-500/30" />
            <img
              src={getImagePath(project.image)}
              alt={project.title}
              className="w-full h-[200px] md:h-[400px] object-cover transition-all duration-300"
            />
          </motion.div>

          {/* Project Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
              >
                <FaGithub className="w-5 h-5" />
                View Source Code
              </a>
            )}
            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                View Live Demo
              </a>
            )}
          </div>

          {/* Project Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl px-5 py-1 shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <FaTools className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                Project Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line mb-6">
                {project.description}
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>User Authentication and Authorization</li>
                <li>Real-time Data Updates</li>
                <li>Responsive Design for All Devices</li>
                <li>Modern UI/UX with Smooth Animations</li>
                <li>Integration with External APIs</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail; 