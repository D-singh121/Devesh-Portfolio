import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { blogService, BlogPost } from '../services/blogService';
import { useApi } from '../hooks/useApi';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'web development' | 'backend' | 'devops' | 'programming'
  >('all');
  const { data: posts, loading, error, execute } = useApi<BlogPost[]>();

  useEffect(() => {
    execute(() => blogService.getAllPosts());
  }, [execute]);

  const filteredPosts = posts?.filter(
    (post) => selectedCategory === 'all' || post.category === selectedCategory
  );

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-500">
          <p>Error loading blog posts: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Blog
      </motion.h1>

      <div className="flex justify-center gap-4 mb-8">
        {['all', 'web development', 'backend', 'devops', 'programming'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category as typeof selectedCategory)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts?.map((post, index) => (
          <motion.article
            key={post._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-sm text-gray-500">{post.category}</span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By {post.author}</span>
                <span className="text-sm text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to my newsletter</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Get the latest posts delivered right to your inbox.
        </p>
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Blog; 