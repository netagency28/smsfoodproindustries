import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill all required fields');
      return;
    }

    // Create WhatsApp message
    const message = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone || 'Not provided'}%0A*Subject:* ${formData.subject || 'General Inquiry'}%0A%0A*Message:*%0A${formData.message}`;

    const whatsappURL = `https://wa.me/919500446608?text=${message}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    toast.success('Message sent! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-6">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Get in touch with us today!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Have questions about our products or want to place a bulk order? We're here to help!
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: '+91 95004 46608',
                    link: 'tel:+919500446608',
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'smsfoodproindustries@gmail.com',
                    link: 'mailto:smsfoodproindustries@gmail.com',
                  },
                  {
                    icon: MapPin,
                    title: 'Address',
                    content: 'Block no : 1, 1st floor , Elumalai Vattam, Kandhampatty, Tamil Nadu, Salem, 636005',
                    link: null,
                  },
                  {
                    icon: Clock,
                    title: 'Business Hours',
                    content: 'Mon - Sat: 9:00 AM - 6:00 PM',
                    link: null,
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-border hover:shadow-soft transition-smooth">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border shadow-soft">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What is this about?"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="border-border shadow-soft overflow-hidden">
            <div className="aspect-video bg-muted flex justify-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.5643207330513!2d78.12015928206363!3d11.654362859037244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ebbc4d3519%3A0x32413b6767bda239!2sSMS%20food%20pro%20industries!5e0!3m2!1sen!2sin!4v1768932318418!5m2!1sen!2sin" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}