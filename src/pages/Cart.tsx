import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/hooks/useCart";
import { getProductById } from "@/data/products";
import { Button } from "@/components/ui/button";
import CheckoutModal from "@/components/product/CheckoutModal";
import { useState } from "react";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const cartDetails = cart
    .map((item) => {
      const product = getProductById(item.productId);
      return product
        ? {
            ...product,
            quantity: item.quantity,
            subtotal: product.price * item.quantity,
          }
        : null;
    })
    .filter(Boolean);

  const total = cartDetails.reduce((sum, item) => sum + item!.subtotal, 0);

  const handleCheckoutOpen = () => {
    if (cartDetails.length > 0) {
      setCheckoutOpen(true);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-32">
        <h1 className="text-3xl font-serif mb-6">Your Cart</h1>
        {cartDetails.length === 0 ? (
          <div className="text-gray-600">
            <p>Your cart is empty.</p>
            <Button
              asChild
              className="mt-6 bg-mirage-bronze hover:bg-mirage-bronze/90"
            >
              <Link to="/shop">Return to Shop</Link>
            </Button>
          </div>
        ) : (
          <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
            <ul>
              {cartDetails.map((item) => (
                <li
                  key={item!.id}
                  className="flex items-center py-4 border-b last:border-0"
                >
                  <img
                    src={item!.image}
                    alt={item!.name}
                    className="h-16 w-16 object-cover rounded mr-4 border"
                  />
                  <div className="flex-1">
                    <div className="font-medium">{item!.name}</div>
                    <div className="text-gray-500 text-sm">
                      Qty: {item!.quantity}
                    </div>
                    <div className="text-gray-700 font-semibold">
                      ${item!.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <div className="text-mirage-bronze font-bold">
                      ${item!.subtotal.toFixed(2)}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 border-mirage-bronze text-mirage-bronze hover:bg-mirage-bronze/10"
                      onClick={() => removeFromCart(item!.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-6 text-xl">
              <span>Total</span>
              <span className="font-bold text-mirage-bronze">
                ${total.toFixed(2)}
              </span>
            </div>
            <Button
              className="w-full mt-8 bg-mirage-charcoal hover:bg-mirage-charcoal/90 text-white"
              onClick={handleCheckoutOpen}
            >
              Checkout
            </Button>
          </div>
        )}
      </div>
      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </Layout>
  );
};

export default CartPage;
