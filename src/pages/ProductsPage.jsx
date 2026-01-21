import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Get unique categories
  const categories = ['all', ...new Set(products.map((p) => p.category))];

  // Filter products by category
  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-6">
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our premium selection of high-quality flours, crafted with precision and care
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Bulk Order Banner */}
          <div className="mb-16 relative overflow-hidden rounded-3xl bg-secondary/20 border border-secondary/30 p-8 sm:p-12 text-center group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-50" />
            <div className="relative space-y-4">
              <Badge className="bg-primary text-primary-foreground mb-2">BULK ORDERS</Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground max-w-2xl mx-auto leading-tight">
                Bulk ordering is available in <span className="text-primary italic"> <br></br>10kg, 30kg and 50kg</span> bag options as per customer needs
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                We cater to wholesale and industrial needs with custom packaging and competitive pricing.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-6">
                <Button 
                  asChild
                  variant="outline"
                  className="bg-background/50 backdrop-blur-sm border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground rounded-xl font-semibold shadow-sm transition-all hover:-translate-y-1"
                >
                  <Link to="/contact">
                    <PhoneCall className="mr-3 h-5 w-5" />
                    Contact Our Sales Team
                  </Link>
                </Button>
                <Button 
                  asChild
                  className="bg-primary hover:bg-primary/90 transition-smooth"
                >
                  <a href="https://wa.me/919500446608?text=Hello%20SMS%20Food%20Pro%2C%20I%20am%20interested%20in%20bulk%20orders%20for%2010kg%2C%2030kg%2C%20and%2050kg%20bags.%20Please%20provide%20more%20information." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-3 h-6 w-6" />
                    Enquire on WhatsApp
                  </a>
                </Button>

              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="px-6 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category === 'all' ? 'All Products' : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Why Choose Our Products?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Natural Processing',
                  description: 'All our products are processed naturally without artificial additives',
                },
                {
                  title: 'Hygienic Packaging',
                  description: 'Sealed and packed in state-of-the-art hygienic facilities',
                },
                {
                  title: 'Quality Tested',
                  description: 'Every batch undergoes rigorous quality control testing',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-background border border-border"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}