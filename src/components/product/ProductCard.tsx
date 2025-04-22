import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";

export interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
  size: string;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { user } = useAuth();
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      toast.error("Please log in to add items to your cart.");
      return;
    }
    addToCart(product.id, 1);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="group relative animate-fade-in">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />

          {/* Product badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-mirage-charcoal text-white text-xs px-3 py-1">
                NEW
              </span>
            )}
            {product.isBestseller && (
              <span className="bg-mirage-bronze text-white text-xs px-3 py-1">
                BESTSELLER
              </span>
            )}
          </div>

          {/* Quick add button */}
          <div className="absolute bottom-0 left-0 right-0 bg-mirage-charcoal bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 p-4 translate-y-full group-hover:translate-y-0">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-mirage-bronze hover:bg-mirage-bronze/90 text-white border-none"
            >
              <ShoppingCart size={16} className="mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        <div className="mt-4 space-y-1 text-center">
          <h3 className="font-serif text-lg font-medium">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.size}</p>
          <p className="font-medium">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
