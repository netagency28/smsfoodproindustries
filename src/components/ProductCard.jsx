import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState(product.variants[0].weight);

  const selectedVariant = product.variants.find((v) => v.weight === selectedWeight) || product.variants[0];

  const handleAddToCart = () => {
    const productWithVariant = {
      ...product,
      weight: selectedVariant.weight,
      image: selectedVariant.image,
      amazonUrl: selectedVariant.amazonUrl,
    };
    delete productWithVariant.variants;
    addToCart(productWithVariant);
    toast.success(`${product.name} (${selectedVariant.weight}) added to cart!`);
  };

  const handleAmazonClick = () => {
    if (selectedVariant.amazonUrl && selectedVariant.amazonUrl !== '#') {
      window.open(selectedVariant.amazonUrl, '_blank');
    } else {
      toast.error('Amazon link not available for this size');
    }
  };

  const isBulk = selectedVariant.weight.includes('kg') && parseInt(selectedVariant.weight) >= 10;

  return (
    <Card className="group overflow-hidden border-border hover:shadow-elevated transition-smooth">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={selectedVariant.image}
            alt={product.name}
            className="w-full h-full object-contain p-6 transition-smooth group-hover:scale-105"
          />
          {isBulk && (
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
              Bulk Order
            </Badge>
          )}
          <div className="absolute top-4 right-4">
            <Select value={selectedWeight} onValueChange={setSelectedWeight}>
              <SelectTrigger className="w-[80px] bg-secondary text-secondary-foreground border-none h-8 text-xs font-semibold">
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                {product.variants.map((variant) => (
                  <SelectItem key={variant.weight} value={variant.weight}>
                    {variant.weight}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
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