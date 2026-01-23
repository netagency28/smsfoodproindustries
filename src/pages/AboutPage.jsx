import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Factory, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-6">
            About <span className="text-primary">SMS Food Pro</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A legacy of quality, tradition, and trust in every grain
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  SMS Food Pro has been a trusted name in premium flour products for several years. What started as a small family business has grown into a leading provider of high-quality flours and grain products. Established in 2019, we launched our state-of-the-art milling facility in 2020.
                </p>
                <p>
                  Our journey began with a simple promise: to deliver the finest quality flours that honor traditional processing methods while embracing modern hygiene standards. With our advanced, fully automated stainless steel machines and a production capacity of 75MT per day, we serve both households and commercial clients.
                </p>
                <p>
                  We source our grains from trusted farmers and process them with care, ensuring that every package of SMS Food Pro meets our exacting standards. Our commitment to quality has made us a household name among families who value authentic taste and nutrition.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dytr7tpmt/image/upload/v1768933272/c7d81e87-e978-4f5d-843e-91b157fbf058.png"
                alt="Flour processing"
                className="rounded-2xl shadow-elevated w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Award,
                title: 'Quality First',
                description: 'We never compromise on the quality of our products. Every batch is carefully tested to meet our high standards.',
              },
              {
                icon: Heart,
                title: 'Customer Focus',
                description: 'Our customers are at the heart of everything we do. We listen, learn, and continuously improve based on your feedback.',
              },
              {
                icon: Factory,
                title: 'Traditional Methods',
                description: 'We honor time-tested processing techniques while incorporating modern food safety and hygiene practices.',
              },
              {
                icon: Users,
                title: 'Community Support',
                description: 'We support local farmers and contribute to sustainable agricultural practices that benefit our communities.',
              },
            ].map((value, index) => (
              <Card key={index} className="border-border hover:shadow-soft transition-smooth">
                <CardContent className="p-8 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Our Commitment to You
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At SMS Food Pro, we're more than just a flour company. We're a family-owned business that takes pride in serving families like yours. Every product that leaves our facility carries our commitment to quality, purity, and customer satisfaction.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thank you for trusting SMS Food Pro to be part of your kitchen and your family traditions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}