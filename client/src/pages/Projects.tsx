import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'MovieMania: A Netflix-Inspired Movie App',
      description: 'MovieMania is a feature-rich web application inspired by Netflix, built using the MERN stack',
      image: '/moviemania_netflix1.png',
      category: 'web',
      technologies: ['React.js', 'Node.js',"Express.js","Axios",'MongoDB',"Redux-Toolkit","Material-UI","JWT-Authentication","Nodemailer","TMDB-Apis","bcryptjs","Vercel"],
      githubUrl: 'https://github.com/D-singh121/moviemania_netflix_clone',
      demoUrl: 'https://moviemania-netflix-clone.vercel.app/'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: '/images/projects/task-app.jpg',
      category: 'web',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      id: 3,
      title: 'ToDo App',
      description: '​The TodoApp is a simple task management application built using React and the Context API. It allows users to add, edit, and delete tasks, providing an intuitive interface for efficient task management.',
      image: '/TodoProject1.png',
      category: 'web',
      technologies: ['React.js', 'Context API', 'Tailwind CSS',"Varcel Hosting"],
      githubUrl: 'https://github.com/D-singh121/TodoApp',
      demoUrl: 'https://todo-app-pied-psi.vercel.app/'
    },
    {
      id: 4,
      title: "AI Chat Bot",
      description: "An intelligent chatbot powered by OpenAI's GPT model for customer support.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80",
      category: "backend",
      technologies: ["Python", "FastAPI", "OpenAI API", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/ai-chatbot",
      demoUrl: "https://ai-chatbot-demo.com"
    }
  ];

  const categories = ['all', 'web', 'frontend', 'backend', 'devops', 'mobile','wordpress'];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto md:px-0 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my latest work and side projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.01 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-gray-200 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/50'
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.01 }}
              className="relative bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/30 dark:to-purple-500/30 group-hover:opacity-75 transition-opacity duration-300 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain bg-gray-100 dark:bg-gray-900 transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                  >
                    <FaGithub className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 hover:from-purple-600 hover:to-indigo-600 dark:hover:from-purple-400 dark:hover:to-indigo-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-indigo-100/10 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 