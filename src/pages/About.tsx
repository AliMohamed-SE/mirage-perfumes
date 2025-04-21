
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <Layout>
      <div className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Our Story</h1>
            <p className="text-gray-600">
              Crafting modern masculinity through the art of fragrance
            </p>
          </div>
          
          {/* Brand Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="font-serif text-3xl mb-6">The Mirage Philosophy</h2>
              <p className="text-gray-600 mb-4">
                Mirage was born from a desire to redefine masculine fragrance. Moving beyond traditional 
                notions of masculinity, we craft scents that embody quiet confidence, timeless elegance, 
                and thoughtful sophistication.
              </p>
              <p className="text-gray-600">
                Our fragrances are designed for the modern man who appreciates the subtle art of 
                self-expression. Each scent tells a story of refined tastes and quiet confidence.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1501644898242-cfea317d7faf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Mirage Philosophy" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
          
          {/* Craftsmanship */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1563170352-33176b9d37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80" 
                alt="The Art of Creation" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl mb-6">The Art of Creation</h2>
              <p className="text-gray-600 mb-4">
                Each Mirage fragrance begins as a vision—an experience we aim to capture and 
                bottle. Our master perfumers work with the world's finest ingredients, sourced 
                from sustainable producers around the globe.
              </p>
              <p className="text-gray-600">
                We believe in quality over quantity, taking time to perfect each scent. 
                From concept to completion, a Mirage fragrance undergoes rigorous development 
                and testing before it earns its place in our collection.
              </p>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="mb-24">
            <h2 className="font-serif text-3xl text-center mb-12">Our Journey</h2>
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-1 text-center md:text-left">
                  <span className="font-serif text-3xl text-mirage-bronze">2018</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-medium text-xl mb-2">The Beginning</h3>
                  <p className="text-gray-600">
                    Mirage was founded in Paris by a collective of perfumers and designers 
                    who shared a vision for redefining masculine fragrances.
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-1 text-center md:text-left">
                  <span className="font-serif text-3xl text-mirage-bronze">2019</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-medium text-xl mb-2">First Collection</h3>
                  <p className="text-gray-600">
                    Our inaugural collection launched with three signature scents, 
                    establishing Mirage as a distinctive voice in men's fragrances.
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-1 text-center md:text-left">
                  <span className="font-serif text-3xl text-mirage-bronze">2021</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-medium text-xl mb-2">International Expansion</h3>
                  <p className="text-gray-600">
                    Mirage expanded from Europe to North America and Asia, 
                    bringing our vision of modern masculinity to a global audience.
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-1 text-center md:text-left">
                  <span className="font-serif text-3xl text-mirage-bronze">2023</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-medium text-xl mb-2">Limited Editions</h3>
                  <p className="text-gray-600">
                    We launched our first series of limited edition fragrances, 
                    each telling unique stories through scent profiles developed with artists and cultural icons.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team */}
          <div>
            <h2 className="font-serif text-3xl text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Alexandre Dubois" 
                  className="w-full aspect-square object-cover object-center mb-4"
                />
                <h3 className="font-medium text-xl">Alexandre Dubois</h3>
                <p className="text-mirage-bronze mb-2">Founder & Creative Director</p>
                <p className="text-gray-600 text-sm">
                  With over 15 years in luxury fragrance development, Alexandre brings artistic vision and technical expertise to Mirage.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80" 
                  alt="Sophia Laurent" 
                  className="w-full aspect-square object-cover object-center mb-4"
                />
                <h3 className="font-medium text-xl">Sophia Laurent</h3>
                <p className="text-mirage-bronze mb-2">Master Perfumer</p>
                <p className="text-gray-600 text-sm">
                  Trained in Grasse, France, Sophia creates complex, evocative scent profiles that define the Mirage experience.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Marcus Bennett" 
                  className="w-full aspect-square object-cover object-center mb-4"
                />
                <h3 className="font-medium text-xl">Marcus Bennett</h3>
                <p className="text-mirage-bronze mb-2">Design Director</p>
                <p className="text-gray-600 text-sm">
                  With a background in luxury product design, Marcus ensures every Mirage product embodies our ethos of refined elegance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
