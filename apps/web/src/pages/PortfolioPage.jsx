import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const portfolioWorks = [
    {
      id: 1, 
      category: 'Presentation', 
      title: 'Presentation Design',
      description: 'Professional and engaging presentation layout.',
      image: 'https://images.unsplash.com/photo-1571677246347-5040036b95cc',
      alt: 'Professional startup pitch deck with colorful charts and modern design'
    },
    {
      id: 2, 
      category: 'Presentation', 
      title: 'Pitch Deck Case Study',
      description: 'Comprehensive pitch deck for startup funding.',
      image: 'https://images.unsplash.com/photo-1675715335132-7028ebc3ad8e',
      alt: 'Business pitch deck with proposal layout and market analysis'
    },
    {
      id: 3, 
      category: 'Presentation', 
      title: 'Strategy Pitch Deck',
      description: 'Strategic business overview and planning slides.',
      image: 'https://images.unsplash.com/photo-1675715335132-7028ebc3ad8e',
      alt: 'Strategic business presentation with goals and market analysis'
    },
    {
      id: 4, 
      category: 'Document Services', 
      title: 'Document Services',
      description: 'Expertly formatted business documents.',
      image: 'https://images.unsplash.com/photo-1485988412941-77a35537dae4',
      alt: 'Professional Word document with formatted text and headers'
    },
    {
      id: 5, 
      category: 'Document Services', 
      title: 'Document Formatting Case Study',
      description: 'In-depth review of document restructuring.',
      image: 'https://images.unsplash.com/photo-1695634365294-7e50d731722b',
      alt: 'Beautifully formatted business proposal'
    },
    {
      id: 6, 
      category: 'Excel Solutions', 
      title: 'Excel Solutions',
      description: 'Advanced spreadsheet models and macros.',
      image: 'https://images.unsplash.com/photo-1571677246347-5040036b95cc',
      alt: 'Excel spreadsheet with colorful charts and data visualization'
    },
    {
      id: 7, 
      category: 'Excel Solutions', 
      title: 'Excel Dashboard Case Study',
      description: 'Interactive data visualization dashboard.',
      image: 'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d',
      alt: 'Professional Excel dashboard with charts and KPIs'
    },
    {
      id: 8, 
      category: 'Graphic Design', 
      title: 'Graphic Design',
      description: 'Creative branding and marketing materials.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      alt: 'Creative design workspace with color palettes and tools'
    },
    {
      id: 9, 
      category: 'Graphic Design', 
      title: 'Social Media Design Case Study',
      description: 'Cohesive social media campaign assets.',
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1',
      alt: 'Colorful social media designs and marketing materials'
    },
    {
      id: 10, 
      category: 'Video Editing', 
      title: 'Video Editing',
      description: 'Professional video production and editing.',
      image: 'https://images.unsplash.com/photo-1696389500310-cd6d247cb609',
      alt: 'Professional video editing software interface'
    }
  ];

  const categories = ['All', 'Presentation', 'Document Services', 'Excel Solutions', 'Graphic Design', 'Video Editing'];

  const filteredWorks = activeCategory === 'All'
    ? portfolioWorks
    : portfolioWorks.filter(work => work.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Our Portfolio | GK Creative Design Studio</title>
        <meta name="description" content="View our extensive portfolio of presentations, graphic design, document services, and video editing works by GK Creative Design Studio." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
           <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
              <p className="text-xl text-gray-400">
                Explore a curated selection of our finest work across various disciplines.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-[73px] z-40 shadow-sm">
          <div className="container mx-auto px-4 flex justify-center flex-wrap gap-4">
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                variant={activeCategory === cat ? 'default' : 'outline'}
                className={`rounded-full px-6 ${activeCategory === cat ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md' : 'text-gray-600 hover:text-gray-900 border-gray-300'}`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence>
                {filteredWorks.map((work) => (
                  <motion.div
                    key={work.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 flex flex-col"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                      <img src={work.image} alt={work.alt || work.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button className="rounded-full bg-white text-gray-900 hover:bg-blue-600 hover:text-white border-0">
                          <Eye className="mr-2" size={18} /> View Project
                        </Button>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-center">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">{work.category}</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{work.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{work.description}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PortfolioPage;