
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BrandStory = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">The Art of Mirage</h2>
            <p className="text-gray-600 mb-6">
              Mirage was born from a desire to create fragrances that embody modern masculinity – 
              sophistication without pretension, strength with elegance, and mystery with clarity.
            </p>
            <p className="text-gray-600 mb-8">
              Each fragrance in our collection tells a story of refined tastes and quiet confidence, 
              crafted with meticulous attention to detail and the finest ingredients sourced from 
              around the world.
            </p>
            <Button asChild className="bg-mirage-bronze hover:bg-mirage-bronze/90 text-white">
              <Link to="/about">Discover Our Story</Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1563170352-33176b9d37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80" 
                alt="Perfume Craftsmanship" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-mirage-bronze"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
