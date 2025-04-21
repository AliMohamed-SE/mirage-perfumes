
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    toast.success("Your message has been sent. We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <Layout>
      <div className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Contact Us</h1>
            <p className="text-gray-600">
              We'd love to hear from you. Feel free to reach out with any questions, 
              feedback, or inquiries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-mirage-charcoal hover:bg-mirage-charcoal/90 text-white w-full"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="lg:pl-12">
              <h2 className="font-serif text-2xl mb-6">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="text-mirage-bronze mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Our Address</h3>
                    <p className="text-gray-600">
                      123 Luxury Avenue<br />
                      Paris, 75008<br />
                      France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-mirage-bronze mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@mirageperfume.com" className="hover:text-mirage-bronze transition-colors">
                        info@mirageperfume.com
                      </a><br />
                      <a href="mailto:customer.service@mirageperfume.com" className="hover:text-mirage-bronze transition-colors">
                        customer.service@mirageperfume.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-mirage-bronze mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      +33 (0)1 23 45 67 89<br />
                      Monday-Friday: 9am-6pm CET
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-mirage-charcoal hover:text-mirage-bronze transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-mirage-charcoal hover:text-mirage-bronze transition-colors"
                  >
                    Facebook
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-mirage-charcoal hover:text-mirage-bronze transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-20">
            <div className="bg-mirage-gray h-[400px] flex items-center justify-center">
              <p className="text-gray-500">Interactive map would be embedded here</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
