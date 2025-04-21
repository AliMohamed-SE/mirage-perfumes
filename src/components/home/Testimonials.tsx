
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  rating: number;
  productName: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Harrison",
    title: "Financial Analyst",
    quote: "Midnight Mirage has become my signature scent. The complexity and longevity are impressive, and I consistently receive compliments when wearing it.",
    rating: 5,
    productName: "Midnight Mirage"
  },
  {
    id: 2,
    name: "Alexander Chen",
    title: "Creative Director",
    quote: "As someone who appreciates refined craftsmanship, I'm impressed with Mirage's attention to detail. Atlas perfectly balances sophistication and subtlety.",
    rating: 5,
    productName: "Atlas"
  },
  {
    id: 3,
    name: "Marcus Reynolds",
    title: "Architect",
    quote: "Mirage Noir has depth and character unlike any fragrance I've worn before. It's bold yet appropriate for any occasion.",
    rating: 4,
    productName: "Mirage Noir"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-mirage-charcoal text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl">Client Experiences</h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Discover what our clients have to say about their Mirage experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        className={i < testimonial.rating ? "text-mirage-bronze" : "text-gray-600"} 
                        fill={i < testimonial.rating ? "#C19A6B" : "none"}
                      />
                    ))}
                  </div>
                  <blockquote className="font-serif text-xl md:text-2xl italic mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mb-2 font-medium text-lg">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm mb-2">{testimonial.title}</div>
                  <div className="text-mirage-bronze">{testimonial.productName}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
