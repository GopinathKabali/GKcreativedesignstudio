import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FormField from '@/components/FormField';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msgs = JSON.parse(localStorage.getItem('gkContactMsgs') || '[]');
    msgs.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('gkContactMsgs', JSON.stringify(msgs));

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out to GK Creative Design Studio. We'll reply soon.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const whatsappNumber = "919840524421";
  const whatsappMsg = encodeURIComponent("Hi I want to know more about your services.");

  return (
    <>
      <Helmet>
        <title>Contact GK Creative Design Studio</title>
        <meta name="description" content="Get in touch with GK Creative Design Studio via email, phone, or WhatsApp for instant quotes." />
      </Helmet>

      <div className="min-h-screen bg-gray-950 text-white">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden text-center border-b border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 }} 
              className="text-xl text-white max-w-2xl mx-auto opacity-90"
            >
              Ready to start your next project? We're here to answer any questions you may have.
            </motion.p>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Cards Left Side */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Mail, title: 'Email Us', desc: 'info@gkcreativedesignstudio.in', sub: 'Send us an email anytime', color: 'bg-blue-600', href: 'mailto:info@gkcreativedesignstudio.in' },
                { icon: Phone, title: 'Call Us', desc: '+91 9840524421', sub: 'Open - 9 AM - Closes 12 am IST', color: 'bg-fuchsia-600', href: 'tel:+919840524421' },
                { icon: MapPin, title: 'Visit Us', desc: 'Flat No 127, 3rd St, TNHB Colony, Sanitarium, Tambarom', sub: 'Chennai, Tamil Nadu 600047, India', color: 'bg-emerald-600' },
                { icon: Clock, title: 'Working Hours', desc: 'Mon - Sun, 9:00 AM - 12:00 AM IST', sub: 'We are available almost round the clock!', color: 'bg-orange-600' }
              ].map((card, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={i === 2 || i === 3 ? 'sm:col-span-2' : ''}>
                  <Card className="bg-gray-900 border-gray-700 hover:border-gray-500 transition-colors h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className={`w-12 h-12 rounded-full ${card.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                        <card.icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                      {card.href ? (
                        <a href={card.href} className="text-white font-medium hover:underline mb-1">{card.desc}</a>
                      ) : (
                        <p className="text-white font-medium mb-1">{card.desc}</p>
                      )}
                      <p className="text-sm text-white/70">{card.sub}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* WhatsApp Button */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="sm:col-span-2 mt-4">
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-6 text-lg rounded-xl shadow-xl border-0">
                    <MessageCircle className="mr-2 text-white" size={24} /> Chat on WhatsApp for Instant Quote
                  </Button>
                </a>
              </motion.div>
            </div>

            {/* Form Right Side */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-7">
              <Card 
                className="relative overflow-hidden border border-gray-700 shadow-2xl rounded-2xl"
                style={{ 
                  backgroundImage: `url('https://horizons-cdn.hostinger.com/d624798d-0885-4516-a9f9-c0fff832f818/564313f8db9934a9188f947336082fba.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/70 z-0 backdrop-blur-[2px]"></div>
                
                <CardContent className="p-8 md:p-10 relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Send Us A Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-white uppercase tracking-wider">Your Name</label>
                        <FormField 
                          name="name" 
                          value={formData.name} 
                          onChange={e => setFormData({...formData, name: e.target.value})} 
                          required 
                          placeholder="Ex: John Smith" 
                          className="bg-black/40 backdrop-blur-md border-white/30 text-white placeholder:text-white/40 focus:border-white focus:ring-white h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-white uppercase tracking-wider">Email Address</label>
                        <FormField 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={e => setFormData({...formData, email: e.target.value})} 
                          required 
                          placeholder="john@example.com" 
                          className="bg-black/40 backdrop-blur-md border-white/30 text-white placeholder:text-white/40 focus:border-white focus:ring-white h-12"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-white uppercase tracking-wider">Phone Number</label>
                        <FormField 
                          name="phone" 
                          type="tel" 
                          value={formData.phone} 
                          onChange={e => setFormData({...formData, phone: e.target.value})} 
                          required 
                          placeholder="+91 XXXXX XXXXX" 
                          className="bg-black/40 backdrop-blur-md border-white/30 text-white placeholder:text-white/40 focus:border-white focus:ring-white h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-white uppercase tracking-wider">Subject</label>
                        <FormField 
                          name="subject" 
                          value={formData.subject} 
                          onChange={e => setFormData({...formData, subject: e.target.value})} 
                          required 
                          placeholder="Project Inquiry" 
                          className="bg-black/40 backdrop-blur-md border-white/30 text-white placeholder:text-white/40 focus:border-white focus:ring-white h-12"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-white uppercase tracking-wider">Your Message</label>
                      <FormField 
                        name="message" 
                        type="textarea" 
                        value={formData.message} 
                        onChange={e => setFormData({...formData, message: e.target.value})} 
                        required 
                        placeholder="Tell us about your project..." 
                        className="bg-black/40 backdrop-blur-md border-white/30 text-white placeholder:text-white/40 focus:border-white focus:ring-white min-h-[150px]"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-xl font-bold rounded-xl shadow-lg border-0 transition-all active:scale-[0.98]">
                      <Send className="mr-2 text-white" size={24} /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;