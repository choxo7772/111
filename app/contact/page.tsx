import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["1151 Nightingale Ave", "Miami Springs, FL 33166"],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["(727) 491-2530"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@gauzenssoftwaresolutions.com"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
    },
  ]

  const services = [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "Database Solutions",
    "Cloud Services & DevOps",
    "Security & Compliance",
    "API Development & Integration",
    "Technology Consulting",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair font-bold text-4xl md:text-6xl text-foreground mb-6 text-balance">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Ready to start your next software project? Let's discuss your requirements and how we can help bring your
              ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <span>Send Us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(727) 491-2530" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Your Company" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, "-")}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Project Budget</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="over-100k">Over $100,000</SelectItem>
                          <SelectItem value="discuss">Let's Discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="3-months">Within 3 months</SelectItem>
                          <SelectItem value="6-months">Within 6 months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your project requirements, goals, and any specific features you need..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair font-bold text-3xl text-foreground mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're here to help you with your software development needs. Reach out to us through any of the
                  following methods, and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-primary mt-1">{info.icon}</div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Response Promise */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="h-6 w-6" />
                    <h3 className="font-semibold text-lg">Quick Response Guarantee</h3>
                  </div>
                  <p className="text-primary-foreground/90">
                    We understand that time is valuable. That's why we guarantee a response to all inquiries within 24
                    hours during business days. For urgent matters, don't hesitate to call us directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">Our Location</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Miami Springs, Florida, we're perfectly positioned to serve clients throughout
              South Florida and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-xl text-foreground">Gauzens Software Solutions</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>1151 Nightingale Ave</p>
                    <p>Miami Springs, FL 33166</p>
                    <p>United States</p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> We primarily work remotely and by appointment. Please contact us to
                      schedule an in-person meeting.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.8234567890123!2d-80.29876543210987!3d25.82345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b123456789ab%3A0x1234567890abcdef!2s1151%20Nightingale%20Ave%2C%20Miami%20Springs%2C%20FL%2033166!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gauzens Software Solutions Location"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity and scope. Simple websites may take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you work with clients outside of Florida?",
                answer:
                  "Yes! While we're based in Miami Springs, FL, we work with clients nationwide and internationally. We're experienced in remote collaboration and project management.",
              },
              {
                question: "What's included in your development services?",
                answer:
                  "Our services include planning, design, development, testing, deployment, and post-launch support. We also provide documentation and training to ensure you can manage your solution effectively.",
              },
              {
                question: "How do you handle project communication?",
                answer:
                  "We maintain regular communication through your preferred channels (email, phone, video calls). You'll receive regular updates and have direct access to Eric throughout the project.",
              },
              {
                question: "Do you provide ongoing support after launch?",
                answer:
                  "Yes, we offer various support and maintenance packages to keep your software running smoothly. This includes updates, bug fixes, and feature enhancements as needed.",
              },
              {
                question: "What technologies do you specialize in?",
                answer:
                  "We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Azure. We choose the best technology stack for each project's specific needs.",
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't wait to transform your business with professional software solutions. Contact us today for a free
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <a href="tel:+17274912530">Call Now: (727) 491-2530</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <a href="mailto:info@gauzenssoftwaresolutions.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
