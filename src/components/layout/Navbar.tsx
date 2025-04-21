
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-white bg-opacity-95 backdrop-blur-sm py-3 shadow-sm" 
          : "bg-transparent py-6"
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
            <Link to="/collections" className="text-sm tracking-wide hover:text-mirage-bronze luxury-transition">COLLECTIONS</Link>
            <Link to="/about" className="text-sm tracking-wide hover:text-mirage-bronze luxury-transition">ABOUT</Link>
            <Link to="/contact" className="text-sm tracking-wide hover:text-mirage-bronze luxury-transition">CONTACT</Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button aria-label="Search" className="hover:text-mirage-bronze luxury-transition">
              <Search size={20} />
            </button>
            <Link to="/account" aria-label="Account" className="hover:text-mirage-bronze luxury-transition">
              <User size={20} />
            </Link>
            <Link to="/cart" aria-label="Cart" className="relative hover:text-mirage-bronze luxury-transition">
              <ShoppingCart size={20} />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-mirage-bronze text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
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
              to="/collections" 
              className="text-lg font-medium hover:text-mirage-bronze luxury-transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              COLLECTIONS
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
              <Link 
                to="/search" 
                aria-label="Search"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Search size={24} className="hover:text-mirage-bronze luxury-transition" />
              </Link>
              <Link 
                to="/account" 
                aria-label="Account"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User size={24} className="hover:text-mirage-bronze luxury-transition" />
              </Link>
              <Link 
                to="/cart" 
                aria-label="Cart" 
                className="relative"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShoppingCart size={24} className="hover:text-mirage-bronze luxury-transition" />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-mirage-bronze text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
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
