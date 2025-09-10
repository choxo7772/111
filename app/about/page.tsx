import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, MapPin, Users, Code, Lightbulb, Target, Heart, CheckCircle, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring transparent communication throughout.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and innovative approaches to solve complex problems.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and respect for all stakeholders.",
    },
  ]

  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "4+ Years in Business",
      description: "Established in 2021, serving clients across Florida and beyond.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "100+ Projects Completed", // Updated from 50+ to 100+
      description: "Successfully delivered custom software solutions for various industries.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "100% Client Satisfaction",
      description: "Committed to delivering quality solutions that meet client expectations.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Modern Technologies",
      description: "Expertise in latest frameworks, cloud platforms, and development practices.",
    },
  ]

  const skills = [
    "JavaScript/TypeScript",
    "React & Next.js",
    "Node.js",
    "Python",
    "Java",
    ".NET",
    "AWS & Azure",
    "Database Design",
    "Mobile Development",
    "DevOps & CI/CD",
    "API Development",
    "Security Best Practices",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair font-bold text-4xl md:text-6xl text-foreground mb-6 text-balance">
              About Gauzens Software Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Founded in 2021, we are a Miami-based software development company dedicated to transforming businesses
              through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-6">Meet Eric Gauzens</h2>
              <p className="text-lg text-muted-foreground mb-6">
                As the founder and lead developer of Gauzens Software Solutions, Eric brings over a decade of
                experience in software development and technology consulting. Born on November 9, 1992, Eric has
                dedicated his career to helping businesses leverage technology for growth and success.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Based in Miami Springs, Florida, Eric established the company in August 2021 with a vision to provide
                personalized, high-quality software development services to businesses of all sizes. His hands-on
                approach ensures that every project receives the attention and expertise it deserves.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Miami Springs, FL</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-foreground">32 years old (Born November 9, 1992)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Founder & Lead Developer</span>
                </div>
              </div>
              <Button asChild size="lg">
                <Link href="/contact">Work With Eric</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square max-w-xl mx-auto">
                  <Image
                    src="/images/owner.png"
                    alt="Eric Gauzens, Founder of Gauzens Software Solutions"
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="font-bold text-2xl">4+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a vision to transform businesses through technology to becoming a trusted partner for companies
              across Florida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-3">The Vision</h3>
                <p className="text-muted-foreground">
                  Founded with the vision to make professional software development accessible to businesses of all
                  sizes, providing personalized service and cutting-edge solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-3">The Growth</h3>
                <p className="text-muted-foreground">
                  Since 2021, we've grown from a single-person operation to a trusted partner for businesses across
                  various industries, delivering innovative solutions that drive success.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-3">The Future</h3>
                <p className="text-muted-foreground">
                  We continue to evolve with the latest technologies and methodologies, always focused on delivering
                  exceptional value and building long-term partnerships with our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape how we work with our clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-card border border-border rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">Our Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">{achievement.icon}</div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our technical expertise spans across modern technologies and development practices.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your ideas to life with professional software
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
