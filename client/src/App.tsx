import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import useScrollToTop from './hooks/useScrollToTop';

// Separate component for scroll to top functionality
const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

// Footer wrapper component to handle conditional rendering
const FooterWrapper = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  if (isHomePage) {
    return null;
  }
  
  return <Footer />;
};

const App = () => {
  // Set dark mode as default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/privacy" element={<div className="py-16"><h1 className="text-3xl font-bold text-center">Privacy Policy</h1></div>} />
              <Route path="/terms" element={<div className="py-16"><h1 className="text-3xl font-bold text-center">Terms of Service</h1></div>} />
            </Routes>
          </div>
        </main>
        <FooterWrapper />
      </div>
    </Router>
  );
};

export default App;
