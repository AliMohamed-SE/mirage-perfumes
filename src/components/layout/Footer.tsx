
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing to our newsletter.");
      setEmail("");
    }
  };

  return (
    <footer className="bg-mirage-charcoal text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif tracking-wide">MIRAGE</h3>
            <p className="text-sm text-gray-300 mt-4 max-w-xs">
              Modern masculine fragrances for the sophisticated man. Crafted with passion and precision.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-mirage-bronze luxury-transition">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-mirage-bronze luxury-transition">
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-mirage-bronze luxury-transition">
                Twitter
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider">Shop</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/shop" className="text-sm hover:text-mirage-bronze luxury-transition">All Fragrances</Link>
              </li>
              <li>
                <Link to="/collections/signature" className="text-sm hover:text-mirage-bronze luxury-transition">Signature Collection</Link>
              </li>
              <li>
                <Link to="/collections/limited" className="text-sm hover:text-mirage-bronze luxury-transition">Limited Edition</Link>
              </li>
              <li>
                <Link to="/gift-sets" className="text-sm hover:text-mirage-bronze luxury-transition">Gift Sets</Link>
              </li>
              <li>
                <Link to="/samples" className="text-sm hover:text-mirage-bronze luxury-transition">Samples</Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/about" className="text-sm hover:text-mirage-bronze luxury-transition">Our Story</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-mirage-bronze luxury-transition">Contact Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm hover:text-mirage-bronze luxury-transition">Careers</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-mirage-bronze luxury-transition">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-sm hover:text-mirage-bronze luxury-transition">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider">Newsletter</h4>
            <p className="text-sm text-gray-300">
              Subscribe to receive updates, exclusive offers, and more.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 space-y-3">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-mirage-dark border-mirage-bronze text-white placeholder:text-gray-400 rounded-r-none focus:ring-mirage-bronze"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-mirage-bronze hover:bg-mirage-bronze/90 text-white rounded-l-none"
                >
                  <Mail size={16} />
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mirage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
