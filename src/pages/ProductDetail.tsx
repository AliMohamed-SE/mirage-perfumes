import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { getProductById, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Heart } from "lucide-react";
import { toast } from "sonner";
import ProductGrid from "@/components/product/ProductGrid";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(Number(id));
  const [quantity, setQuantity] = useState(1);
  const { user } = useAuth();
  const { addToCart } = useCart();

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      if (!user) {
        toast.error("Please log in to place orders.");
        return;
      }
      addToCart(product.id, quantity);
      toast.success(`${product.name} added to cart!`);
      setQuantity(1);
    }
  };

  const handleAddToWishlist = () => {
    if (product) {
      toast.success(`${product.name} added to wishlist`);
    }
  };

  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
          <p className="mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button
            asChild
            className="bg-mirage-bronze hover:bg-mirage-bronze/90"
          >
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="bg-mirage-gray">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex space-x-3">
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

              {/* Product Title and Price */}
              <div>
                <h1 className="font-serif text-3xl md:text-4xl">
                  {product.name}
                </h1>
                <p className="text-xl mt-2">${product.price.toFixed(2)}</p>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Size */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Size</p>
                <p>{product.size}</p>
              </div>

              {/* Quantity */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Quantity</p>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart & Wishlist */}
              <div className="flex space-x-4 pt-4">
                <Button
                  onClick={handleAddToCart}
                  className="bg-mirage-charcoal hover:bg-mirage-charcoal/90 text-white flex-1"
                >
                  <ShoppingCart size={16} className="mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  onClick={handleAddToWishlist}
                  className="border-mirage-charcoal text-mirage-charcoal hover:bg-mirage-charcoal/10"
                >
                  <Heart size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start border-b rounded-none">
                <TabsTrigger value="description" className="rounded-none">
                  Description
                </TabsTrigger>
                <TabsTrigger value="details" className="rounded-none">
                  Details
                </TabsTrigger>
                <TabsTrigger value="reviews" className="rounded-none">
                  Reviews
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-6">
                <div className="max-w-3xl">
                  <h3 className="font-serif text-xl mb-4">
                    About {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-gray-600">
                    Created by our master perfumer, this fragrance embodies the
                    essence of modern masculinity. The carefully selected notes
                    work in harmony to create a unique scent that is both
                    sophisticated and captivating.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="details" className="mt-6">
                <div className="max-w-3xl space-y-4">
                  <div>
                    <h3 className="font-serif text-xl mb-4">Product Details</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        <span className="font-medium">Size:</span>{" "}
                        {product.size}
                      </li>
                      <li>
                        <span className="font-medium">Category:</span>{" "}
                        {product.category.charAt(0).toUpperCase() +
                          product.category.slice(1)}{" "}
                        Collection
                      </li>
                      <li>
                        <span className="font-medium">Made in:</span> France
                      </li>
                      <li>
                        <span className="font-medium">Concentration:</span> Eau
                        de Parfum
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Ingredients</h4>
                    <p className="text-gray-600">
                      Alcohol Denat., Parfum (Fragrance), Aqua (Water),
                      Limonene, Linalool, Coumarin, Citral, Geraniol,
                      Citronellol, Eugenol.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-6">
                <div className="max-w-3xl">
                  <h3 className="font-serif text-xl mb-4">Customer Reviews</h3>
                  <p className="text-gray-600 mb-8">
                    This product has not been reviewed yet. Be the first to
                    share your experience.
                  </p>
                  <Button className="bg-mirage-bronze hover:bg-mirage-bronze/90">
                    Write a Review
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-24">
              <ProductGrid
                products={relatedProducts}
                title="You May Also Like"
                subtitle="Explore these complementary fragrances from our collection"
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
