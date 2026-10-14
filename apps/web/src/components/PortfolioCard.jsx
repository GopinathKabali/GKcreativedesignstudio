import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const PortfolioCard = ({ work, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div className="relative h-64 overflow-hidden">
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-xs font-semibold mb-2">
                {work.category}
              </span>
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{work.title}</h3>
          <p className="text-gray-600">{work.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PortfolioCard;