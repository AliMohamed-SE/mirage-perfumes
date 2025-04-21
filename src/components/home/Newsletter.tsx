
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing to our newsletter");
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-mirage-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join the Mirage Community</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to receive exclusive offers, early access to new releases, and insights into the art of fragrance.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-mirage-charcoal hover:bg-mirage-charcoal/90 text-white sm:flex-shrink-0"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-gray-500 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Mirage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
