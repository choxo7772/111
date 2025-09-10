import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Smartphone,
  Database,
  Cloud,
  Shield,
  Code,
  Users,
  TrendingUp,
  Calendar,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Application",
      description:
        "A full-featured e-commerce platform with inventory management, payment processing, and customer analytics.",
      image: "/modern-ecommerce-dashboard.png",
      technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      features: [
        "Product catalog management",
        "Secure payment processing",
        "Real-time inventory tracking",
        "Customer analytics dashboard",
        "Mobile-responsive design",
      ],
      results: ["40% increase in online sales", "60% reduction in order processing time", "99.9% uptime achieved"],
      duration: "4 months",
      year: "2023", // Updated from 2025 to 2023 for Web Application
      industry: "Retail",
      client: "Miami Retail Group",
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "Custom Software",
      description: "HIPAA-compliant patient management system with appointment scheduling and medical records.",
      image: "/healthcare-management-system.png",
      technologies: ["React", "Python", "Django", "PostgreSQL", "Docker", "Azure"],
      features: [
        "Patient record management",
        "Appointment scheduling",
        "HIPAA compliance",
        "Insurance integration",
        "Reporting and analytics",
      ],
      results: [
        "50% reduction in administrative time",
        "100% HIPAA compliance achieved",
        "30% improvement in patient satisfaction",
      ],
      duration: "6 months",
      year: "2025", // Updated from 2023 to 2025
      industry: "Healthcare",
      client: "Florida Medical Center",
    },
    {
      id: 3,
      title: "Real Estate Mobile App",
      category: "Mobile Application",
      description: "Cross-platform mobile app for property listings with virtual tours and mortgage calculator.",
      image: "/real-estate-app-interface.png",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Google Maps API"],
      features: [
        "Property search and filters",
        "Virtual tour integration",
        "Mortgage calculator",
        "Favorite properties",
        "Push notifications",
      ],
      results: ["10,000+ downloads in first month", "4.8/5 app store rating", "25% increase in property inquiries"],
      duration: "3 months",
      year: "2024", // Updated from 2025 to 2024 for Mobile Application
      industry: "Real Estate",
      client: "Miami Properties LLC",
    },
    {
      id: 4,
      title: "Restaurant POS System",
      category: "Custom Software",
      description: "Point-of-sale system with inventory management, staff scheduling, and sales analytics.",
      image: "/restaurant-pos-system-interface.jpg",
      technologies: ["Vue.js", "Node.js", "MySQL", "Express", "Socket.io"],
      features: [
        "Order management",
        "Inventory tracking",
        "Staff scheduling",
        "Sales reporting",
        "Kitchen display system",
      ],
      results: ["35% faster order processing", "20% reduction in food waste", "Improved staff efficiency"],
      duration: "3 months",
      year: "2024", // Updated from 2025 to 2024 for Custom Software
      industry: "Food & Beverage",
      client: "Local Restaurant Chain",
    },
    {
      id: 5,
      title: "Financial Dashboard",
      category: "Web Application",
      description: "Real-time financial analytics dashboard with data visualization and reporting capabilities.",
      image: "/financial-analytics-dashboard.png",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
      features: [
        "Real-time data visualization",
        "Custom report generation",
        "Multi-user access control",
        "API integrations",
        "Automated alerts",
      ],
      results: ["90% faster report generation", "Real-time decision making enabled", "Improved data accuracy"],
      duration: "5 months",
      year: "2023", // Updated from 2025 to 2023 for Web Application
      industry: "Finance",
      client: "Investment Firm",
    },
    {
      id: 6,
      title: "Learning Management System",
      category: "Web Application",
      description: "Educational platform with course management, student tracking, and interactive assessments.",
      image: "/lms-interface.png",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vercel"],
      features: [
        "Course creation and management",
        "Student progress tracking",
        "Interactive quizzes",
        "Video streaming",
        "Certification system",
      ],
      results: ["500+ students enrolled", "95% course completion rate", "Excellent user feedback"],
      duration: "4 months",
      year: "2025", // Updated from 2023 to 2025
      industry: "Education",
      client: "Online Education Provider",
    },
  ]

  const categories = ["All", "Web Application", "Mobile Application", "Custom Software"]
  const industries = ["All", "Retail", "Healthcare", "Real Estate", "Food & Beverage", "Finance", "Education"]

  const stats = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      number: "100+", // Updated from 50+ to 100+
      label: "Projects Completed",
      description: "Successfully delivered across various industries",
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "60+", // Updated from 30+ to 60+
      label: "Happy Clients",
      description: "Satisfied customers who trust our solutions",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "99%",
      label: "Success Rate",
      description: "Projects delivered on time and within budget",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      number: "4+",
      label: "Years Experience",
      description: "Proven track record since 2021",
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
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Explore our successful projects and see how we've helped businesses transform their operations with custom
              software solutions.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
                  <div className="font-playfair font-bold text-4xl text-foreground mb-2">{stat.number}</div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{stat.label}</h3>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of our most successful projects showcasing our expertise across different industries and
              technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/90 text-foreground border-border">
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <p className="text-muted-foreground text-sm mb-2">
                        {project.client} • {project.industry}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.duration}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-sm text-muted-foreground">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Results Achieved:</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button variant="outline" className="w-full bg-transparent">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Case Study
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage modern technologies and frameworks to build scalable, secure, and performant solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: <Code className="h-8 w-8" />, name: "React/Next.js", category: "Frontend" },
              { icon: <Database className="h-8 w-8" />, name: "Node.js", category: "Backend" },
              { icon: <Smartphone className="h-8 w-8" />, name: "React Native", category: "Mobile" },
              { icon: <Database className="h-8 w-8" />, name: "PostgreSQL", category: "Database" },
              { icon: <Cloud className="h-8 w-8" />, name: "AWS/Azure", category: "Cloud" },
              { icon: <Shield className="h-8 w-8" />, name: "Security", category: "Protection" },
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-card border border-border rounded-xl flex items-center justify-center mx-auto mb-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                  {tech.icon}
                </div>
                <p className="text-foreground font-medium text-sm">{tech.name}</p>
                <p className="text-muted-foreground text-xs">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">Our Success Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every successful project follows our proven methodology that ensures quality delivery and client
              satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your business needs, goals, and technical requirements through detailed consultation.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Creating detailed project roadmap, timeline, and technical architecture for optimal results.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Building your solution using best practices, with regular updates and quality assurance testing.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "Deploying your solution and providing ongoing support to ensure continued success and growth.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
