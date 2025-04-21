
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

const FeaturedSection = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-20 bg-mirage-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl">Featured Collection</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Discover our most coveted fragrances, crafted with the finest ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild className="bg-mirage-charcoal hover:bg-mirage-charcoal/90 text-white">
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
