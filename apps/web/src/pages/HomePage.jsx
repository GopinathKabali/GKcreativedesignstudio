import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Presentation, FileText, Table, Palette, Video, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OurClientsSection from '@/components/OurClientsSection';

const HomePage = () => {
  const services = [
    {
      icon: Presentation,
      title: 'Presentation Design',
      description: 'Professional presentations that captivate and engage with stunning visuals.',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: FileText,
      title: 'Word Document Services',
      description: 'Expertly formatted documents, reports, and proposals with consistent branding.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Table,
      title: 'Excel Services',
      description: 'Advanced spreadsheet solutions, data analysis, and custom dashboards.',
      color: 'from-emerald-500 to-teal-400'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Eye-catching visual designs for logos, branding, and marketing collateral.',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services for corporate and promotional content.',
      color: 'from-red-500 to-rose-400'
    },
  ];

  return (
    <>
      <Helmet>
        <title>GK Creative Design Studio | Transform Your Ideas Into Stunning Visuals</title>
        <meta name="description" content="Professional Design Services for Presentations, Graphics, and Video. GK Creative Design Studio delivers top-tier visual solutions for your business." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600132806370-bf17e65e942f')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/90 to-blue-900/40"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 to-transparent blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-semibold mb-6 tracking-wider uppercase">
              Welcome to GK Creative Design Studio
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white tracking-tight">
              Transform Your Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Stunning Visuals</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 font-light">
              Professional Design Services for Presentations, Graphics, and Video
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/25 border-0">
                  Explore Our Services
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-full border-gray-600 text-gray-800 hover:bg-gray-100 hover:text-gray-900 bg-white">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital design solutions tailored to elevate your brand and communicate your message effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2 md:w-1/2 md:mx-auto lg:w-full" : ""}
              >
                <Link to="/services" className="block h-full">
                  <div className="group relative px-6 py-8 min-h-[320px] rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col items-center text-center overflow-hidden h-full">
                    {/* Gradient Overlay for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-lg relative z-10 transform group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="text-white" size={36} />
                    </div>
                    
                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed relative z-10">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <OurClientsSection />

      {/* Portfolio Preview */}
      <section className="py-24 bg-gray-900 text-white border-t border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-12"
          >
            <div className="max-w-2xl mb-6 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Works</h2>
              <p className="text-xl text-gray-400">A glimpse into our creative process and successful projects.</p>
            </div>
            <Link to="/portfolio">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 rounded-full">
                View All Projects
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Corporate Pitch Deck', cat: 'Presentation Design', img: 'https://images.unsplash.com/photo-1531796404855-370e2405e388' },
              { title: 'Brand Identity', cat: 'Graphic Design', img: 'https://images.unsplash.com/photo-1695634365024-b7513447e4f0' },
              { title: 'Promo Campaign', cat: 'Video Editing', img: 'https://images.unsplash.com/photo-1589144866822-6e2d617a915d' }
            ].map((work, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
              >
                <img src={work.img} alt={work.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-blue-400 font-medium text-sm mb-2 block">{work.cat}</span>
                  <h3 className="text-2xl font-bold text-white">{work.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to elevate your brand?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Let's collaborate to bring your vision to life with our expert design services.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-7 text-xl rounded-full shadow-2xl">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;