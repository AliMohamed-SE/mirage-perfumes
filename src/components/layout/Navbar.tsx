import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUser } from "@/hooks/useUser";
import { useCart } from "@/hooks/useCart";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useUser();
  const { getCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-white bg-opacity-95 backdrop-blur-sm shadow-sm py-3", // Always visible bg now
        isScrolled ? "" : ""
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center z-10">
            <h1 className="text-2xl md:text-3xl font-serif tracking-wide text-mirage-charcoal">
              MIRAGE
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm tracking-wide hover:text-mirage-bronze luxury-transition">HOME</Link>
            <Link to="/shop" className="text-sm tracking-wide hover:text-mirage-bronze luxury-transition">SHOP</Link>
            <Link to="/about" className="text-sm tracking-wide hover:text-mirage-bronze luxury-transition">ABOUT</Link>
            <Link to="/contact" className="text-sm tracking-wide hover:text-mirage-bronze luxury-transition">CONTACT</Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Auth/Profile */}
            {user ? (
              <Link to="/profile" aria-label="Account" className="hover:text-mirage-bronze luxury-transition">
                <User size={20} />
              </Link>
            ) : (
              <Link to="/auth" aria-label="Account" className="hover:text-mirage-bronze luxury-transition">
                <User size={20} />
              </Link>
            )}
            {/* Cart */}
            <Link to="/cart" aria-label="Cart" className="relative hover:text-mirage-bronze luxury-transition">
              <ShoppingCart size={20} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-mirage-bronze text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-mirage-charcoal" />
            ) : (
              <Menu size={24} className="text-mirage-charcoal" />
            )}
          </button>

          {/* Mobile Menu */}
          <div className={`
            fixed inset-0 bg-white z-[5] flex flex-col justify-center items-center space-y-8
            transition-all duration-300 ease-in-out
            ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}>
            <Link
              to="/"
              className="text-lg font-medium hover:text-mirage-bronze luxury-transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/shop"
              className="text-lg font-medium hover:text-mirage-bronze luxury-transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              SHOP
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium hover:text-mirage-bronze luxury-transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium hover:text-mirage-bronze luxury-transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
            <div className="flex space-x-8 mt-8">
              {user ? (
                <Link
                  to="/profile"
                  aria-label="Account"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User size={24} className="hover:text-mirage-bronze luxury-transition" />
                </Link>
              ) : (
                <Link
                  to="/auth"
                  aria-label="Account"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User size={24} className="hover:text-mirage-bronze luxury-transition" />
                </Link>
              )}
              <Link
                to="/cart"
                aria-label="Cart"
                className="relative"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShoppingCart size={20} className="hover:text-mirage-bronze luxury-transition" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-mirage-bronze text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
