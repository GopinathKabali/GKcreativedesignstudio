import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Studio Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
              GK Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Design Studio</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Transforming your ideas into stunning visuals. Professional digital design services for presentations, documents, graphics, and video editing.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all duration-300" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                    className="hover:text-blue-400 transition-colors text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                'Presentation Design',
                'Word Document Services',
                'Excel Services',
                'Graphic Design',
                'Video Editing'
              ].map((service) => (
                <li key={service} className="hover:text-purple-400 transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-0.5 flex-shrink-0 text-green-400" />
                <span className="leading-relaxed">Flat No 127, 3rd St, TNHB Colony,<br />Sanitarium, Tambarom, Chennai,<br />Tamil Nadu 600047, India</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-blue-400" />
                <a href="mailto:info@gkcreativedesignstudio.in" className="hover:text-white transition-colors">
                  info@gkcreativedesignstudio.in
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-purple-400" />
                <a href="tel:+919840524421" className="hover:text-white transition-colors">
                  +91 98405 24421
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 mt-0.5 flex-shrink-0 text-orange-400" />
                <span className="leading-relaxed">Mon - Sun<br />9:00 AM - 12:00 AM IST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} GK Creative Design Studio. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;