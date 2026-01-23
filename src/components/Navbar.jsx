import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import OrderDialog from '@/components/OrderDialog';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);
  const { getCartTotal } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/mission', label: 'Our Mission' },
    { path: '/products', label: 'Our Products' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const cartTotal = getCartTotal();

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              {/* <div className="text-2xl sm:text-3xl font-serif font-bold text-primary transition-smooth group-hover:text-secondary">
                SMS Food Pro
              </div> */}
              <img src="https://res.cloudinary.com/dytr7tpmt/image/upload/v1768924116/66ebbfa9c6467bf149632b1c_SMS_20New_20Logo_t1ant8.png" width={80} height={80} alt="" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Cart Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                onClick={() => setIsOrderDialogOpen(true)}
                variant="outline"
                size="sm"
                className="relative border-primary/20 hover:border-primary hover:bg-primary/5 transition-smooth"
              >
                <ShoppingCart className="h-5 w-5 text-primary" />
                {cartTotal > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-secondary text-secondary-foreground text-xs">
                    {cartTotal}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                onClick={() => setIsOrderDialogOpen(true)}
                variant="outline"
                size="sm"
                className="relative border-primary/20"
              >
                <ShoppingCart className="h-5 w-5 text-primary" />
                {cartTotal > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-secondary text-secondary-foreground text-xs">
                    {cartTotal}
                  </Badge>
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                      location.pathname === link.path
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Order Dialog */}
      <OrderDialog
        isOpen={isOrderDialogOpen}
        onClose={() => setIsOrderDialogOpen(false)}
      />
    </>
  );
};