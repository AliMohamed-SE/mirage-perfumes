import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "@/hooks/useCart";
import { getProductById } from "@/data/products";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ open, onClose }: CheckoutModalProps) {
  const [checkingOut, setCheckingOut] = useState(false);
  const { cart, clearCart } = useCart();

  async function handleCheckout() {
    setCheckingOut(true);
    const user = (await supabase.auth.getUser()).data.user;
    const orders = cart
      .map((item) => {
        const product = getProductById(item.productId);
        if (!product) return null;
        return {
          user_id: user?.id,
          product_id: product.id,
          product_name: product.name,
          product_image: product.image,
          price: product.price,
          quantity: item.quantity,
        };
      })
      .filter(Boolean); // Remove nulls

    const { error } = await supabase.from("orders").insert(orders);
    clearCart();
    setCheckingOut(false);

    if (!error) {
      toast.success("Order placed successfully!");
      onClose();
    } else {
      toast.error("Could not place order.");
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) onClose();
      }}
    >
      <DialogOverlay />
      <DialogContent>
        <DialogTitle className="font-serif">Checkout</DialogTitle>
        <DialogDescription>
          Complete your purchase below. (This is a mock payment—no actual
          transaction occurs.)
        </DialogDescription>
        <div className="max-h-[50vh] overflow-y-auto mt-4">
          {cart.map((item, idx) => {
            const product = getProductById(item.productId);
            if (!product) return null;
            return (
              <div key={idx} className="my-6 flex items-center space-x-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.size}</p>
                  <p className="font-semibold text-mirage-bronze">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-sm mt-2">
                    Quantity:{" "}
                    <span className="font-semibold">{item.quantity}</span>
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    Payment step is simulated for demonstration.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="bg-mirage-bronze hover:bg-[#b28240] text-white"
            onClick={handleCheckout}
            disabled={checkingOut}
          >
            {checkingOut ? "Placing Order..." : "Place Order"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
