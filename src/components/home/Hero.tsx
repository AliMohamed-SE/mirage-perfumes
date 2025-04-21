
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1584949514490-73fc1a2fca88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Mirage Perfume"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight animate-fade-in">
            Discover the Art of Masculine Fragrance
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Mirage crafts sophisticated scents that embody modern masculinity, 
            timeless elegance, and quiet confidence.
          </p>
          <div className="mt-10 space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild className="bg-mirage-bronze hover:bg-mirage-bronze/90 text-white border-none px-8 py-6">
              <Link to="/shop">
                Explore Collection
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-6">
              <Link to="/about">
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
