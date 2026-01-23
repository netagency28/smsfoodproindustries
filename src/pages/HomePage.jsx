import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Award,
  DollarSign,
  Handshake,
  Factory,
  Leaf,
  Package,
  Truck,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  PhoneCall,
  IndianRupee,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function HomePage() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing!');
      setEmail('');
    }
  };

  const faqs = [
    {
      question: 'What types of flour does SMS FoodPro produce?',
      answer:
        'We produce a variety of premium quality flours including Grand Besan Flour, Royal Besan Flour, Shakthi Besan Flour, Soy Chunks, and Corn Flour. All our products are naturally processed and hygienically packed.',
    },
    {
      question: "How is SMS FoodPro's besan flour made?",
      answer:
        'Our besan flour is made using advanced roller mills in a fully automated stainless steel facility. We follow a precise process of grinding, biotech enhancement, sieving, and hygienic packaging to ensure the highest quality.',
    },
    {
      question: "What makes SMS FoodPro's flour unique?",
      answer:
        'Our flour stands out due to our commitment to quality, purity, and consistency. We use the finest ingredients, state-of-the-art machinery, and maintain strict quality control throughout the production process.',
    },
    {
      question: 'What are the packaging options for your products?',
      answer:
        'We offer various retail packaging options from 500g to 1kg. We also specialize in bulk orders, providing 10kg, 30kg, and 50kg bags as per customer requirements.',
    },
    {
      question: 'How can I place an order with SMS FoodPro?',
      answer:
        'You can place orders through our website, or for bulk and custom requirements, reach out to us directly via WhatsApp or our Contact Us page.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <Badge className="bg-secondary text-secondary-foreground w-fit text-sm">
                FRESH. PURE. QUALITY.
              </Badge>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
                Welcome to{' '}
                <span className="text-primary">SMS FoodPro</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Destination for premium quality flour, crafted for all your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground group">
                    Cook with the Best
                    <ArrowRight className="ml-2 h-5 w-5 transition-smooth group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://res.cloudinary.com/dytr7tpmt/image/upload/v1768933611/930f01bb-e7dc-4f36-a1ca-6d4f204ce549.png"
                  alt="Premium Quality Flour"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SMS FoodPro was founded with a vision to deliver the finest quality flours to households and businesses across the region. What started as a small family initiative has grown into a trusted name in premium flour production. Our journey began with a simple promise: to honor traditional processing methods while embracing modern technology and hygiene standards.
            </p>
            

          </div>
        </div>
      </section>

      {/* Starting a Mill Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary text-secondary-foreground w-fit">STARTING A MILL</Badge>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In 2020, we launched our state-of-the-art milling facility equipped with advanced, fully automated stainless steel machines. Our production capacity of 75MT per day ensures we can meet the demands of both retail and wholesale customers while maintaining the highest standards of hygiene and quality control throughout the manufacturing process.
              </p>
            </div>
            <div className="relative">
              {/* <img
                src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&q=80"
                alt="Manufacturing facility"
                className="rounded-2xl shadow-elevated w-full"
              /> */}
              <video src="https://res.cloudinary.com/dytr7tpmt/video/upload/v1768923911/66e997e531dd0f928f45eaa1_2F670e8047fd10b0608ac55e77_WhatsApp_20Video_202024-10-15_20at_20123553_9af216cc-transcode_ncja2q.mp4"
                className="rounded-2xl shadow-elevated w-full"
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80"
                alt="Our Mission"
                className="rounded-2xl shadow-elevated w-full h-auto"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-serif font-bold text-foreground">
                We're on a Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to offer premium-grade besan flour and specialty products made from the finest ingredients. We are committed to delivering quality, consistency, and affordability to both households and commercial clients. Every product that leaves our facility represents our dedication to excellence and our promise to support your culinary creations.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative lg:sticky lg:top-24">
              <img
                src="https://res.cloudinary.com/dytr7tpmt/image/upload/v1768923994/photo-1603380353725-f8a4d39cc41e_zbr4iy.jpg"
                alt="Manufacturing process"
                className="rounded-2xl shadow-elevated w-full h-auto"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                  Our Process, Your Peace of Mind
                </h2>
                <p className="text-muted-foreground">
                  We follow a meticulous four-step process to ensure every batch meets our exacting standards.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Factory,
                    title: 'Grinding Process',
                    description:
                      'Using advanced roller mills, we carefully grind grains to the perfect consistency, adjusting particle size for optimal texture and quality.',
                  },
                  {
                    icon: Leaf,
                    title: 'Biotech Enhancements',
                    description:
                      'Our process incorporates biotechnology to enhance purity and consistency while preserving natural nutritional value.',
                  },
                  {
                    icon: Package,
                    title: 'Sieving',
                    description:
                      'Multiple sieving stages ensure uniform texture throughout. Coarse particles are returned for re-grinding to maintain consistency.',
                  },
                  {
                    icon: Truck,
                    title: 'Packaging & Delivery',
                    description:
                      'Retail products are hygienically packed. We also provide customized bulk packaging in 10kg, 30kg, and 50kg sizes for industrial needs.',
                  },
                ].map((step, index) => (
                  <Card key={index} className="border-border hover:shadow-soft transition-smooth">
                    <CardContent className="p-6 flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SMS Food Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Why SMS FoodPro?
            </h2>
            <p className="text-lg text-muted-foreground">
              Delivering premium, high-quality besan flour with purity, consistency, and innovation in every batch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Uncompromising Quality',
                description:
                  'We focus on using the finest ingredients and advanced production methods to ensure every product meets the highest standards.',
              },
              {
                icon: IndianRupee,
                title: 'Affordable Excellence',
                description:
                  'Premium quality at competitive prices. We believe excellent flour should be accessible to everyone.',
              },
              {
                icon: Handshake,
                title: 'Trusted Expertise',
                description:
                  'Years of experience in the industry ensure consistency, reliability, and trust with every order.',
              },
            ].map((value, index) => (
              <Card key={index} className="border-border hover:shadow-elevated transition-smooth">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex h-16 w-16 rounded-full bg-primary/10 items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order Banner Component */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-secondary/10 border border-secondary/20 p-8 sm:p-12 text-center group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50" />
            <div className="relative space-y-6">
              <Badge className="bg-primary text-primary-foreground">BULK ORDERS AVAILABLE</Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground max-w-2xl mx-auto leading-tight">
                Bulk ordering is available in <span className="text-primary italic">10kg, 30kg and 50kg</span> bag options as per customer needs
              </h2>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Button 
                  asChild
                  className="bg-primary hover:bg-primary/90 transition-smooth rounded-xl font-semibold shadow-sm"
                >
                  <a href="https://wa.me/919500446608?text=Hello%20SMS%20Food%20Pro%2C%20I%20am%20interested%20in%20bulk%20orders%20for%2010kg%2C%2030kg%2C%20and%2050kg%20bags.%20Please%20provide%20more%20information." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-3 h-5 w-5" />
                    Enquire on WhatsApp
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="bg-background/50 backdrop-blur-sm border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground rounded-xl font-semibold shadow-sm transition-all hover:-translate-y-1"
                >
                  <Link to="/contact">
                    <PhoneCall className="mr-3 h-5 w-5" />
                    Contact Sales
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">OUR PRODUCTS</Badge>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Experience Our Bounty
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our premium selection of high-quality flours, crafted with precision and care. From traditional to multigrain blends, our products are designed to elevate every dish you create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-12 flex-row items-center md:flex-row flex-col">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                Contact to Make an Order
              </Button>
            </Link>
            <Link to="https://www.amazon.in/s?k=SMS+FOODPRO" target="_blank">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Shop Now on Amazon
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Got Questions? We've Got Answers
            </h2>
            <p className="text-lg text-muted-foreground">
              Common inquiries about our service, quality products, and more, answered.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-accent/10 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 z-10 relative">
              <Badge className="bg-secondary text-secondary-foreground w-fit">
                READY TO COOK WITH QUALITY?
              </Badge>
              <h2 className="text-4xl font-serif font-bold text-foreground">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions or want to share your suggestions? We'd love to hear from you. Contact us today and let's create something amazing together!
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dytr7tpmt/image/upload/v1768924055/photo-1509440159596-0249088772ff_u8hfsv.jpg"
                alt="Get in touch"
                className="rounded-2xl shadow-elevated w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Stay Informed
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our community to receive updates, recipes, and exclusive insights straight to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" size="lg" className="bg-secondary hover:bg-secondary/90">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}