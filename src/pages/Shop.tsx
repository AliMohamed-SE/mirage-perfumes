
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { products } from "@/data/products";
import ProductGrid from "@/components/product/ProductGrid";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type CategoryType = "all" | "signature" | "limited";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");
  
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <Layout>
      <div className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Our Collection</h1>
            <p className="text-gray-600">
              Explore our range of sophisticated fragrances crafted with the finest ingredients. 
              Each scent tells a unique story of modern masculinity.
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-12">
            <Button 
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => setActiveCategory("all")}
              className={activeCategory === "all" ? "bg-mirage-charcoal hover:bg-mirage-charcoal/90" : ""}
            >
              All Fragrances
            </Button>
            <Button 
              variant={activeCategory === "signature" ? "default" : "outline"}
              onClick={() => setActiveCategory("signature")}
              className={activeCategory === "signature" ? "bg-mirage-charcoal hover:bg-mirage-charcoal/90" : ""}
            >
              Signature Collection
            </Button>
            <Button 
              variant={activeCategory === "limited" ? "default" : "outline"}
              onClick={() => setActiveCategory("limited")}
              className={activeCategory === "limited" ? "bg-mirage-charcoal hover:bg-mirage-charcoal/90" : ""}
            >
              Limited Edition
            </Button>
          </div>
          
          <Separator className="mb-12" />
          
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
