import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Presentation, FileText, Table, Palette, Video, MessageCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FormField from '@/components/FormField';
import ConditionalFormField from '@/components/ConditionalFormField';
import { useToast } from '@/components/ui/use-toast';
import ServiceSelectionTabs from '@/components/ServiceSelectionTabs';

const ServicesPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    serviceType: '',
    name: '',
    email: '',
    phone: '',
    // Presentation
    presentationType: '', slideCount: '', contentStatus: '',
    // Word
    documentType: '', pageCount: '', formattingLevel: '', instructions: '',
    // Excel
    excelWorkType: '', sheetCount: '', dataSize: '', description: '',
    // Graphic Design
    designType: '', designCount: '', brandAssets: '',
    // Video
    videoType: '', videoDuration: '', footageDuration: '', editingStyle: '',
    // Common
    deliveryDate: '', deliveryTime: '', file: null, notes: '',
  });

  const services = [
    {
      id: 'presentation',
      icon: Presentation,
      title: 'Presentation Design',
      description: 'Professional PowerPoint and presentation design services with custom templates, data visualization, and engaging layouts.',
      features: ['Custom Templates', 'Data Visualization', 'Pitch Decks', 'Corporate Presentations']
    },
    {
      id: 'word',
      icon: FileText,
      title: 'Word Document Services',
      description: 'Expert document formatting, template creation, reports, proposals, and professional typography for all your business needs.',
      features: ['Report Formatting', 'Proposal Design', 'Manuals & Guides', 'Typography Optimization']
    },
    {
      id: 'excel',
      icon: Table,
      title: 'Excel Services',
      description: 'Advanced spreadsheet solutions, complex formulas, data analysis, automation, and custom dashboard development.',
      features: ['Data Analysis', 'Custom Dashboards', 'Complex Formulas', 'Macro Automation']
    },
    {
      id: 'graphic',
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creative graphic design for logos, branding, social media graphics, infographics, and marketing materials.',
      features: ['Brand Identity', 'Social Media Kits', 'Marketing Collateral', 'Infographics']
    },
    {
      id: 'video',
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing for corporate videos, promotional content, social media, YouTube, and marketing campaigns.',
      features: ['Corporate Videos', 'Promo Content', 'Social Media Reels', 'Motion Graphics']
    },
  ];

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleServiceSelect = (serviceId) => {
    setFormData(prev => ({ ...prev, serviceType: serviceId }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.serviceType) {
      toast({
        title: "Please select a service",
        description: "You must select a service type before submitting.",
        variant: "destructive"
      });
      return;
    }

    const submissions = JSON.parse(localStorage.getItem('gkServiceRequests') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString(),
      file: formData.file ? formData.file.name : null
    });
    localStorage.setItem('gkServiceRequests', JSON.stringify(submissions));

    toast({
      title: "Request Submitted Successfully!",
      description: "Thank you for your request. We will review your details and get back with pricing shortly.",
      duration: 5000,
    });

    setFormData({ serviceType: '', name: '', email: '', phone: '', presentationType: '', slideCount: '', contentStatus: '', documentType: '', pageCount: '', formattingLevel: '', instructions: '', excelWorkType: '', sheetCount: '', dataSize: '', description: '', designType: '', designCount: '', brandAssets: '', videoType: '', videoDuration: '', footageDuration: '', editingStyle: '', deliveryDate: '', deliveryTime: '', file: null, notes: '' });
  };

  const whatsappNumber = "919840524421";
  const whatsappMessage = encodeURIComponent("Hi I submitted a service request on your website. Please share the quote.");

  return (
    <>
      <Helmet>
        <title>Our Services | GK Creative Design Studio</title>
        <meta name="description" content="Explore our digital design services: Presentation Design, Word Document Services, Excel Services, Graphic Design, and Video Editing." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Comprehensive digital design solutions tailored to your business needs, delivered with exceptional quality and precision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={index >= 3 ? "lg:col-span-1" : ""}
                >
                  <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col bg-white rounded-2xl overflow-hidden group">
                    <CardHeader className="bg-gray-50 pb-8 border-b border-gray-100">
                      <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform">
                        <service.icon size={28} />
                      </div>
                      <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow pt-6 flex flex-col justify-between">
                      <div>
                        <CardDescription className="text-base text-gray-600 mb-6">
                          {service.description}
                        </CardDescription>
                        <ul className="space-y-2 mb-8">
                          {service.features.map(f => (
                            <li key={f} className="flex items-center text-sm text-gray-700">
                              <CheckCircle size={16} className="text-green-500 mr-2" /> {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button
                        onClick={() => {
                          setFormData(prev => ({ ...prev, serviceType: service.id }));
                          document.getElementById('quote-form').scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full bg-gray-900 hover:bg-blue-600 text-white rounded-lg py-6"
                      >
                        Request Quote
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Smart Form */}
            <motion.div
              id="quote-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="shadow-2xl border-none rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-10 text-center">
                  <CardTitle className="text-3xl font-bold mb-2">Request a Custom Quote</CardTitle>
                  <CardDescription className="text-gray-300 text-base mb-6">
                    Select a service below and provide details for accurate pricing.
                  </CardDescription>
                  
                  {/* Service Selection Tabs */}
                  <ServiceSelectionTabs 
                    selectedService={formData.serviceType} 
                    onSelectService={handleServiceSelect} 
                  />
                  
                </CardHeader>
                <CardContent className="p-10 bg-white">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Common Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField label="Full Name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="John Doe" />
                      <FormField label="Email Address" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="john@example.com" />
                      <FormField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required placeholder="+91 98405 24421" />
                    </div>

                    {formData.serviceType && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="h-px bg-gray-200 w-full mb-8"></div>
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">
                          {services.find(s => s.id === formData.serviceType)?.title} Details
                        </h3>

                        <div className="space-y-6">
                          {/* Presentation Conditional */}
                          <ConditionalFormField condition={formData.serviceType === 'presentation'} label="Type of Presentation" name="presentationType" type="select" value={formData.presentationType} onChange={handleInputChange} required={formData.serviceType === 'presentation'} options={[{ value: 'business', label: 'Business' }, { value: 'investor', label: 'Pitch Deck' }, { value: 'sales', label: 'Sales' }, { value: 'training', label: 'Training' }]} />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ConditionalFormField condition={formData.serviceType === 'presentation'} label="Number of Slides" name="slideCount" type="number" value={formData.slideCount} onChange={handleInputChange} required={formData.serviceType === 'presentation'} />
                            <ConditionalFormField condition={formData.serviceType === 'presentation'} label="Content Status" name="contentStatus" type="select" value={formData.contentStatus} onChange={handleInputChange} required={formData.serviceType === 'presentation'} options={[{ value: 'ready', label: 'Ready' }, { value: 'partial', label: 'Partial' }, { value: 'need-help', label: 'Need Help' }]} />
                          </div>

                          {/* Word Conditional */}
                          <ConditionalFormField condition={formData.serviceType === 'word'} label="Document Type" name="documentType" type="select" value={formData.documentType} onChange={handleInputChange} required={formData.serviceType === 'word'} options={[{ value: 'report', label: 'Report' }, { value: 'proposal', label: 'Proposal' }, { value: 'manual', label: 'Manual' }]} />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ConditionalFormField condition={formData.serviceType === 'word'} label="Number of Pages" name="pageCount" type="number" value={formData.pageCount} onChange={handleInputChange} required={formData.serviceType === 'word'} />
                            <ConditionalFormField condition={formData.serviceType === 'word'} label="Formatting Level" name="formattingLevel" type="select" value={formData.formattingLevel} onChange={handleInputChange} required={formData.serviceType === 'word'} options={[{ value: 'basic', label: 'Basic' }, { value: 'advanced', label: 'Advanced' }]} />
                          </div>

                          {/* Excel Conditional */}
                          <ConditionalFormField condition={formData.serviceType === 'excel'} label="Type of Work" name="excelWorkType" type="select" value={formData.excelWorkType} onChange={handleInputChange} required={formData.serviceType === 'excel'} options={[{ value: 'formulas', label: 'Formulas' }, { value: 'dashboard', label: 'Dashboard' }, { value: 'macro', label: 'Macros/VBA' }]} />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ConditionalFormField condition={formData.serviceType === 'excel'} label="Number of Sheets" name="sheetCount" type="number" value={formData.sheetCount} onChange={handleInputChange} required={formData.serviceType === 'excel'} />
                            <ConditionalFormField condition={formData.serviceType === 'excel'} label="Data Size" name="dataSize" type="select" value={formData.dataSize} onChange={handleInputChange} required={formData.serviceType === 'excel'} options={[{ value: 'small', label: 'Small' }, { value: 'large', label: 'Large' }]} />
                          </div>

                          {/* Graphic Conditional */}
                          <ConditionalFormField condition={formData.serviceType === 'graphic'} label="Design Type" name="designType" type="select" value={formData.designType} onChange={handleInputChange} required={formData.serviceType === 'graphic'} options={[{ value: 'logo', label: 'Logo' }, { value: 'social', label: 'Social Media' }, { value: 'branding', label: 'Branding' }]} />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ConditionalFormField condition={formData.serviceType === 'graphic'} label="Number of Designs" name="designCount" type="number" value={formData.designCount} onChange={handleInputChange} required={formData.serviceType === 'graphic'} />
                            <ConditionalFormField condition={formData.serviceType === 'graphic'} label="Brand Assets Available?" name="brandAssets" type="select" value={formData.brandAssets} onChange={handleInputChange} required={formData.serviceType === 'graphic'} options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]} />
                          </div>

                          {/* Video Conditional */}
                          <ConditionalFormField condition={formData.serviceType === 'video'} label="Video Type" name="videoType" type="select" value={formData.videoType} onChange={handleInputChange} required={formData.serviceType === 'video'} options={[{ value: 'promo', label: 'Promo' }, { value: 'corporate', label: 'Corporate' }, { value: 'social', label: 'Social Media' }]} />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ConditionalFormField condition={formData.serviceType === 'video'} label="Final Duration (mins)" name="videoDuration" type="number" value={formData.videoDuration} onChange={handleInputChange} required={formData.serviceType === 'video'} />
                            <ConditionalFormField condition={formData.serviceType === 'video'} label="Raw Footage (mins)" name="footageDuration" type="number" value={formData.footageDuration} onChange={handleInputChange} required={formData.serviceType === 'video'} />
                          </div>
                          <ConditionalFormField condition={formData.serviceType === 'video'} label="Editing Style" name="editingStyle" type="select" value={formData.editingStyle} onChange={handleInputChange} required={formData.serviceType === 'video'} options={[{ value: 'corporate', label: 'Corporate' }, { value: 'dynamic', label: 'Dynamic/Fast' }, { value: 'cinematic', label: 'Cinematic' }]} />

                          {/* Delivery & Files */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <FormField label="Delivery Date" name="deliveryDate" type="date" value={formData.deliveryDate} onChange={handleInputChange} required />
                            <FormField label="Delivery Time" name="deliveryTime" type="time" value={formData.deliveryTime} onChange={handleInputChange} required />
                          </div>
                          <FormField label="Upload File/Reference (Optional)" name="file" type="file" onChange={handleInputChange} />
                          <FormField label="Additional Notes" name="notes" type="textarea" value={formData.notes} onChange={handleInputChange} placeholder="Tell us more about your specific needs..." />
                          
                          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-xl shadow-lg mt-8">
                            Submit Request
                          </Button>
                        </div>
                      </motion.div>
                    )}
                    
                    {!formData.serviceType && (
                      <div className="text-center py-8 text-gray-500">
                        Please select a service above to continue with your request.
                      </div>
                    )}
                  </form>

                  <div className="mt-10 text-center pt-8 border-t border-gray-100">
                    <p className="text-gray-600 mb-4">Or bypass the form and talk to us directly</p>
                    <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-6 rounded-full text-base font-semibold">
                        <MessageCircle className="mr-2" size={22} />
                        Chat on WhatsApp for Instant Quote
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;