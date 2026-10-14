import React from 'react';
import { motion } from 'framer-motion';

const OurClientsSection = () => {
  const clients = [
    {
      title: "Business Analytics Solutions",
      image: "https://horizons-cdn.hostinger.com/d624798d-0885-4516-a9f9-c0fff832f818/f7fa50514c139df5b62457d3aae47416.jpg",
    },
    {
      title: "Data Visualization Services",
      image: "https://horizons-cdn.hostinger.com/d624798d-0885-4516-a9f9-c0fff832f818/fb046c47938ce7c1e39e47aaa9f20358.png",
    },
    {
      title: "Dashboard Design & Analytics",
      image: "https://horizons-cdn.hostinger.com/d624798d-0885-4516-a9f9-c0fff832f818/ddf9d3c95a952861acaf22253b298858.jpg",
    },
    {
      title: "Strategic Presentations",
      image: "https://horizons-cdn.hostinger.com/d624798d-0885-4516-a9f9-c0fff832f818/4c97289b719cf6cde8fa3585d2259de9.png",
    }
  ];

  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Clients</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trusted by leading businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-2xl aspect-square bg-gray-900"
            >
              <img 
                src={client.image} 
                alt={client.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-10 h-1 bg-blue-500 mb-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                <h3 className="text-xl font-bold text-white leading-tight">{client.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;