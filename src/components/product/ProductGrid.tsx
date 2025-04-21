
import { useState } from "react";
import ProductCard, { ProductType } from "./ProductCard";

interface ProductGridProps {
  products: ProductType[];
  title?: string;
  subtitle?: string;
}

const ProductGrid = ({ products, title, subtitle }: ProductGridProps) => {
  return (
    <div className="py-16">
      {title && (
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
