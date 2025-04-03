export interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: 'web development' | 'backend' | 'devops' | 'programming';
  image: string;
  readTime: string;
  createdAt: string;
}

const mockPosts: BlogPost[] = [
  {
    _id: '1',
    title: 'Getting Started with React and TypeScript',
    excerpt: 'Learn how to set up a new React project with TypeScript and best practices.',
    content: 'Full content here...',
    author: 'Devesh Singh',
    category: 'web development',
    image: 'https://picsum.photos/800/400',
    readTime: '5 min read',
    createdAt: new Date().toISOString(),
  },
  {
    _id: '2',
    title: 'Understanding Docker Containers',
    excerpt: 'A comprehensive guide to Docker containers and containerization.',
    content: 'Full content here...',
    author: 'Devesh Singh',
    category: 'devops',
    image: 'https://picsum.photos/800/401',
    readTime: '7 min read',
    createdAt: new Date().toISOString(),
  },
];

export const blogService = {
  getAllPosts: async (): Promise<BlogPost[]> => {
    // Simulating API call with mock data
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockPosts), 1000);
    });
  },
}; 