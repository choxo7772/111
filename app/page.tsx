import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Globe, Zap, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 text-balance">
              Professional Software Solutions for Your Business
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Transform your ideas into powerful software solutions. We deliver custom development, web applications,
              and technology consulting services in Miami, FL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive software development services to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Custom Software Development",
                description: "Tailored solutions built to meet your specific business requirements and goals.",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Web Applications",
                description: "Modern, responsive web applications that deliver exceptional user experiences.",
              },
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: "Mobile Development",
                description: "Native and cross-platform mobile apps for iOS and Android devices.",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "API Integration",
                description: "Seamless integration with third-party services and existing systems.",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Security Solutions",
                description: "Robust security implementations to protect your data and applications.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Consulting Services",
                description: "Expert guidance on technology strategy and digital transformation.",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-6">
                Why Choose Gauzens Software Solutions?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Proven Expertise</h3>
                    <p className="text-muted-foreground">
                      Years of experience delivering successful software solutions across various industries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Local Miami Presence</h3>
                    <p className="text-muted-foreground">
                      Based in Miami Springs, FL, we understand the local business landscape and needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Personalized Service</h3>
                    <p className="text-muted-foreground">
                      Direct communication with the owner ensures your project gets the attention it deserves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-3xl">G</span>
                  </div>
                  <p className="text-foreground font-semibold text-lg">Professional Software Development</p>
                  <p className="text-muted-foreground">Since 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into powerful software solutions.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
