import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaArrowLeft } from 'react-icons/fa';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

const blogPosts: Record<string, BlogPost> = {
  'getting-started-with-react-typescript': {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    description: 'Learn how to set up a new React project with TypeScript and best practices.',
    content: `
# Getting Started with React and TypeScript

TypeScript has become increasingly popular in the React ecosystem, offering enhanced type safety and improved developer experience. In this guide, we'll walk through setting up a new React project with TypeScript and explore some best practices.

## Prerequisites
- Node.js installed on your machine
- Basic understanding of React
- Familiarity with JavaScript

## Setting up the Project

### 1. Create a new React project with TypeScript template:
\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

### 2. Navigate to the project directory:
\`\`\`bash
cd my-app
\`\`\`

### 3. Start the development server:
\`\`\`bash
npm start
\`\`\`

## TypeScript Best Practices in React

### Type Safety
- Always define proper interfaces for component props
- Use type inference when possible
- Leverage union types for state management
- Implement proper error handling with type guards

### Code Organization
- Keep interfaces and types in separate files
- Use barrel exports for cleaner imports
- Follow consistent naming conventions
- Implement proper folder structure

## Next Steps
1. Explore more advanced TypeScript features
2. Add ESLint with TypeScript support
3. Set up Jest for testing TypeScript code
4. Learn about TypeScript decorators
5. Explore TypeScript utility types
    `,
    category: 'web development',
    readTime: '5 min read',
    date: '03/04/2025',
    author: 'Devesh Singh',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
    slug: 'getting-started-with-react-typescript'
  },
  'understanding-docker-containers': {
    id: '2',
    title: 'Understanding Docker Containers',
    description: 'A comprehensive guide to Docker containers and containerization.',
    content: `
# Understanding Docker Containers

Docker containers have revolutionized how we deploy and scale applications. This guide will help you understand the fundamentals of containerization and how to get started with Docker.

## What are Containers?

Containers are lightweight, standalone executable packages that include everything needed to run an application:
- Code and runtime
- System tools and libraries
- Settings and dependencies

## Benefits of Containerization

### Development Benefits
- Consistent environment across development and production
- Improved scalability and resource utilization
- Easier deployment and version control
- Better isolation and security

### Operations Benefits
- Reduced infrastructure costs
- Faster deployment cycles
- Improved application portability
- Enhanced security through isolation

## Getting Started with Docker

### Basic Setup
1. Install Docker on your machine
2. Learn basic Docker commands
3. Create your first Dockerfile
4. Build and run containers

### Essential Commands
\`\`\`bash
# Pull an image
docker pull image-name

# Run a container
docker run image-name

# List containers
docker ps

# Stop a container
docker stop container-id
\`\`\`

## Best Practices

### Image Building
- Use official base images
- Minimize layer count
- Implement proper security measures
- Optimize for caching

### Container Management
- Use meaningful container names
- Implement health checks
- Monitor resource usage
- Regular security updates

## Next Steps
1. Explore Docker Compose
2. Learn about container orchestration
3. Implement CI/CD with Docker
4. Study container security
5. Master Docker networking
    `,
    category: 'devops',
    readTime: '7 min read',
    date: '03/04/2025',
    author: 'Devesh Singh',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2071&auto=format&fit=crop',
    slug: 'understanding-docker-containers'
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen pt-28 pb-20 flex items-center justify-center">
        <h1 className="text-2xl text-gray-600 dark:text-gray-400">Blog post not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <header className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
            >
              {post.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6"
            >
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.date}</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              {post.description}
            </motion.p>
          </header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/30 dark:to-purple-500/30" />
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-code:text-indigo-600 dark:prose-code:text-indigo-400 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800/50 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700 prose-pre:rounded-lg"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </motion.div>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                {post.author.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{post.author}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Author</p>
              </div>
            </div>
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost; 