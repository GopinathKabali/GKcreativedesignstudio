import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, FileText, Table, Palette, Video } from 'lucide-react';

const ServiceSelectionTabs = ({ selectedService, onSelectService }) => {
  const services = [
    { id: 'presentation', icon: Presentation, label: 'Presentation' },
    { id: 'word', icon: FileText, label: 'Word Document' },
    { id: 'excel', icon: Table, label: 'Excel' },
    { id: 'graphic', icon: Palette, label: 'Graphic Design' },
    { id: 'video', icon: Video, label: 'Video Editing' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {services.map((service) => {
          const isSelected = selectedService === service.id;
          const Icon = service.icon;

          return (
            <button
              key={service.id}
              onClick={() => onSelectService(service.id)}
              className={`relative flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 w-28 sm:w-32 group ${
                isSelected 
                  ? 'bg-blue-50 shadow-[0_0_20px_rgba(59,130,246,0.3)] ring-2 ring-blue-500' 
                  : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors duration-300 ${
                isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 group-hover:text-blue-600'
              }`}>
                <Icon size={24} />
              </div>
              <span className={`text-xs sm:text-sm font-medium text-center transition-colors duration-300 ${
                isSelected ? 'text-blue-700' : 'text-gray-600 group-hover:text-gray-900'
              }`}>
                {service.label}
              </span>
              
              {isSelected && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-blue-600"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSelectionTabs;