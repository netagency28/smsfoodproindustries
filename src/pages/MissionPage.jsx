import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Sprout, Globe } from 'lucide-react';

export default function MissionPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-6">
            Our <span className="text-primary">Mission</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Committed to delivering excellence in every grain
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="border-primary/20 shadow-elevated">
            <CardContent className="p-12">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="flex justify-center">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl font-serif font-bold text-center text-foreground">
                  Our Mission Statement
                </h2>
                <p className="text-xl text-center text-muted-foreground leading-relaxed">
                  To provide families and businesses with premium quality flours that honor traditional processing methods, ensure nutritional value, and contribute to healthier, more flavorful cooking experiences—while maintaining sustainable practices that benefit our communities and the environment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Our Core Objectives
            </h2>
            <p className="text-lg text-muted-foreground">
              The goals that drive our daily operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: 'Quality Assurance',
                description: 'Maintain rigorous quality control at every stage of production, from grain selection to final packaging, ensuring consistency and excellence in every product.',
                points: [
                  'Regular quality testing',
                  'Certified processing facilities',
                  'Traceability systems',
                  'Customer feedback integration',
                ],
              },
              {
                icon: Sprout,
                title: 'Sustainable Practices',
                description: 'Implement environmentally responsible practices throughout our supply chain, supporting sustainable agriculture and reducing our environmental footprint.',
                points: [
                  'Partner with local farmers',
                  'Eco-friendly packaging',
                  'Energy-efficient processing',
                  'Waste reduction programs',
                ],
              },
              {
                icon: Globe,
                title: 'Community Impact',
                description: 'Contribute positively to the communities we serve through fair practices, employment opportunities, and support for local agriculture.',
                points: [
                  'Fair trade practices',
                  'Local employment',
                  'Agricultural education',
                  'Community development',
                ],
              },
            ].map((objective, index) => (
              <Card key={index} className="border-border hover:shadow-soft transition-smooth">
                <CardContent className="p-8 space-y-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <objective.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif font-semibold text-foreground">
                      {objective.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {objective.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-secondary mt-1">•</span>
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-foreground">
                Our Vision for the Future
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We envision a future where SMS Food Pro is recognized not just as a provider of quality products, but as a leader in sustainable food production and community development.
                </p>
                <p>
                  We're committed to expanding our product range while maintaining our core values, investing in innovative processing technologies that preserve nutritional value, and continuing to support the farmers and communities that make our work possible.
                </p>
                <p>
                  Through continuous improvement, customer engagement, and unwavering dedication to quality, we aim to be the preferred choice for families and businesses seeking authentic, nutritious, and responsibly produced flour products.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dytr7tpmt/image/upload/v1768933108/e9f9b9d1-05a8-4f67-b1b3-a20b59568ea0.png"
                alt="Wheat field"
                className="rounded-2xl shadow-elevated w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}