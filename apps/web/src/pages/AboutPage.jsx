import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Award, Users, Shield, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About GK Creative Design Studio</title>
        <meta name="description" content="Learn about GK Creative Design Studio's mission, expertise, and commitment to delivering top-tier digital design solutions." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About GK Creative Design Studio</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Where creativity meets precision. We are passionate about turning your business concepts into visual masterpieces.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story & Mission */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story & Mission</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Founded with a vision to redefine digital communication, <strong>GK Creative Design Studio</strong> emerged as a hub for innovative design and strategic formatting.
                </p>
                <p>
                  Our mission is simple: to empower brands, corporations, and individuals by providing impeccable design solutions. Whether it's a pitch deck that secures funding, or a brand identity that captures the market, we deliver excellence.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" alt="Team collaborating" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-2">10+</p>
                <p className="text-sm font-medium opacity-90">Years of Experience</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience & Values */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
              <p className="text-gray-400">Our core values dictate every pixel we push and every frame we cut.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Award, title: 'Unmatched Quality', desc: 'Detail-oriented approach ensuring premium outcomes.' },
                { icon: Clock, title: 'Timely Delivery', desc: 'Strict adherence to deadlines without compromising quality.' },
                { icon: Shield, title: 'Client Satisfaction', desc: '100% dedication to meeting and exceeding client expectations.' },
                { icon: Users, title: 'Expert Team', desc: 'Specialized professionals for every specific design niche.' },
                { icon: Zap, title: 'Innovative Approach', desc: 'Staying ahead of trends with modern aesthetics.' },
                { icon: CheckCircle2, title: 'Proven Process', desc: 'Streamlined methodology from draft to final delivery.' }
              ].map((val, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                  <Card className="bg-gray-800 border-gray-700 h-full text-white hover:bg-gray-750 transition-colors border-0">
                    <CardContent className="p-8">
                      <val.icon className="text-blue-400 mb-6" size={40} />
                      <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{val.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Working Approach */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">Our Working Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consultation', desc: 'Understanding your requirements and goals.' },
                { step: '02', title: 'Strategy', desc: 'Planning the design framework and timeline.' },
                { step: '03', title: 'Execution', desc: 'Crafting the design with precision.' },
                { step: '04', title: 'Delivery', desc: 'Final review and prompt handover.' }
              ].map((process, i) => (
                <div key={i} className="relative">
                  <div className="text-6xl font-black text-gray-200 absolute -top-8 left-1/2 -translate-x-1/2 z-0">{process.step}</div>
                  <div className="relative z-10 pt-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                    <p className="text-gray-600">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;