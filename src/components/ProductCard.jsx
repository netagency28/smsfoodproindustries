import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleAmazonClick = () => {
    if (product.amazonUrl) {
      window.open(product.amazonUrl, '_blank');
    } else {
      toast.error('Amazon link not available');
    }
  };

  return (
    <Card className="group overflow-hidden border-border hover:shadow-elevated transition-smooth">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-6 transition-smooth group-hover:scale-105"
          />
          <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
            {product.weight}
          </Badge>
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-smooth">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 2).map((feature, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs border-primary/20 text-primary"
              >
                {feature}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-2 pt-2">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-primary hover:bg-primary/90 transition-smooth"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <Button
              onClick={handleAmazonClick}
              variant="outline"
              className="w-full border-secondary text-secondary hover:bg-secondary/10 transition-smooth"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Shop on Amazon
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};