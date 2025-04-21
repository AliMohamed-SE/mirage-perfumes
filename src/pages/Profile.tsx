
import { useUser } from "@/hooks/useUser";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ShoppingCart, User } from "lucide-react";

interface Order {
  id: string;
  product_id: number;
  product_name: string;
  product_image: string;
  price: number;
  quantity: number;
  status: string;
  created_at: string;
}

export default function ProfilePage() {
  const { user, loading, signOut } = useUser();
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderLoading, setOrderLoading] = useState(true);

  useEffect(() => {
    if (user) {
      supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false })
        .then(({ data }) => {
          setOrders(data as Order[] || []);
          setOrderLoading(false);
        });
    }
  }, [user]);

  if (loading) return null;
  if (!user) {
    window.location.href = "/auth";
    return null;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-24 max-w-2xl">
        <div className="bg-white rounded-xl border p-8 flex flex-col items-center shadow space-y-6">
          <User size={36} className="text-mirage-bronze mb-2" />
          <h2 className="font-serif text-2xl mb-1">Welcome, {user.full_name || user.email}</h2>
          <p className="text-gray-500 mb-3 text-sm">Email: {user.email}</p>
          <Button onClick={signOut} className="bg-mirage-bronze hover:bg-[#b28240] text-white w-32">Sign Out</Button>
        </div>
        <div className="mt-12">
          <h3 className="font-serif text-xl mb-4">Purchase History</h3>
          {orderLoading ? (
            <p>Loading orders…</p>
          ) : orders.length > 0 ? (
            <ul className="space-y-6">
              {orders.map(order => (
                <li key={order.id} className="p-4 border rounded flex items-center space-x-4">
                  <img src={order.product_image} alt={order.product_name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <p className="font-medium">{order.product_name}</p>
                    <p className="text-sm text-gray-500">Ordered on {new Date(order.created_at).toLocaleDateString()}</p>
                    <p className="text-sm">Qty: {order.quantity} • <span className="text-mirage-bronze">${order.price.toFixed(2)}</span></p>
                  </div>
                  <span className="inline-flex items-center space-x-1">
                    <ShoppingCart size={16} className="text-mirage-charcoal" />
                    <span className="text-xs capitalize">{order.status}</span>
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 mt-6">No purchases yet.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}
