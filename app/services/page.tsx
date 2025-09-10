import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Shield,
  Zap,
  Users,
  Settings,
  Monitor,
  Cpu,
  Lock,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business needs and requirements.",
      features: [
        "Requirements Analysis",
        "System Architecture Design",
        "Full-Stack Development",
        "Quality Assurance Testing",
        "Deployment & Maintenance",
      ],
      technologies: ["React", "Node.js", "Python", "Java", ".NET"],
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Web Application Development",
      description: "Modern, responsive web applications that deliver exceptional user experiences across all devices.",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "Content Management Systems",
        "Performance Optimization",
      ],
      technologies: ["Next.js", "React", "Vue.js", "Angular", "TypeScript"],
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: [
        "Native iOS Development",
        "Native Android Development",
        "Cross-Platform Solutions",
        "App Store Optimization",
        "Mobile UI/UX Design",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"],
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Database Solutions",
      description: "Robust database design, optimization, and management for your data-driven applications.",
      features: [
        "Database Design & Modeling",
        "Performance Optimization",
        "Data Migration Services",
        "Backup & Recovery Solutions",
        "Database Security",
      ],
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"],
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: "Cloud Services & DevOps",
      description: "Scalable cloud infrastructure and automated deployment pipelines for modern applications.",
      features: [
        "Cloud Architecture Design",
        "CI/CD Pipeline Setup",
        "Container Orchestration",
        "Infrastructure as Code",
        "Monitoring & Logging",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Security & Compliance",
      description: "Comprehensive security solutions to protect your applications and sensitive data.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Implementation",
        "Data Encryption",
        "Access Control Systems",
      ],
      technologies: ["OAuth", "JWT", "SSL/TLS", "GDPR", "HIPAA"],
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "API Development & Integration",
      description: "Seamless API development and third-party service integrations for enhanced functionality.",
      features: [
        "RESTful API Development",
        "GraphQL Implementation",
        "Third-Party Integrations",
        "API Documentation",
        "Rate Limiting & Security",
      ],
      technologies: ["REST", "GraphQL", "Webhooks", "Postman", "Swagger"],
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Technology Consulting",
      description: "Expert guidance on technology strategy, digital transformation, and best practices.",
      features: [
        "Technology Assessment",
        "Digital Strategy Planning",
        "Architecture Reviews",
        "Team Training",
        "Project Management",
      ],
      technologies: ["Agile", "Scrum", "DevOps", "Microservices", "Clean Code"],
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals, requirements, and technical constraints to create a comprehensive project plan.",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "Our team designs the system architecture and user experience, ensuring scalability and optimal performance.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We build your solution using best practices, with continuous testing and quality assurance throughout the process.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "We deploy your solution and provide ongoing support, maintenance, and updates to ensure continued success.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair font-bold text-4xl md:text-6xl text-foreground mb-6 text-balance">
              Professional Software Development Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              From custom software solutions to mobile apps and cloud services, we deliver comprehensive technology
              solutions that drive your business forward.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of software development services to meet all your technology needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="text-primary">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds
              your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our expertise spans across various industries, delivering tailored solutions that address specific
              business challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: <Monitor className="h-8 w-8" />, name: "Technology" },
              { icon: <Users className="h-8 w-8" />, name: "Healthcare" },
              { icon: <Settings className="h-8 w-8" />, name: "Manufacturing" },
              { icon: <Globe className="h-8 w-8" />, name: "E-commerce" },
              { icon: <Cpu className="h-8 w-8" />, name: "Fintech" },
              { icon: <Lock className="h-8 w-8" />, name: "Education" },
            ].map((industry, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-card border border-border rounded-lg flex items-center justify-center mx-auto mb-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                  {industry.icon}
                </div>
                <p className="text-foreground font-medium">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how our services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
