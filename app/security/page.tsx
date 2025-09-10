import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Server, Key, AlertTriangle, CheckCircle, Mail } from "lucide-react"

export default function SecurityPage() {
  const securityMeasures = [
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Data Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard encryption protocols.",
      details: ["AES-256 encryption", "TLS 1.3 for data in transit", "Encrypted database storage"],
    },
    {
      icon: <Key className="h-8 w-8" />,
      title: "Access Control",
      description: "Strict access controls ensure only authorized personnel can access client data.",
      details: ["Multi-factor authentication", "Role-based access control", "Regular access reviews"],
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Secure Infrastructure",
      description: "Our infrastructure is hosted on secure, compliant cloud platforms with regular updates.",
      details: ["AWS/Azure security standards", "Regular security patches", "Network firewalls"],
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Monitoring & Logging",
      description: "Continuous monitoring and comprehensive logging help detect and respond to threats.",
      details: ["24/7 security monitoring", "Audit trail logging", "Incident response procedures"],
    },
  ]

  const compliance = [
    {
      standard: "GDPR",
      description: "General Data Protection Regulation compliance for EU data protection",
      status: "Compliant",
    },
    {
      standard: "CCPA",
      description: "California Consumer Privacy Act compliance for California residents",
      status: "Compliant",
    },
    {
      standard: "HIPAA",
      description: "Health Insurance Portability and Accountability Act for healthcare projects",
      status: "Available",
    },
    {
      standard: "SOC 2",
      description: "Service Organization Control 2 for service provider security",
      status: "In Progress",
    },
  ]

  const bestPractices = [
    "Secure coding practices and code reviews",
    "Regular security assessments and penetration testing",
    "Employee security training and awareness",
    "Incident response and disaster recovery plans",
    "Regular backup and recovery testing",
    "Vendor security assessments",
    "Data minimization and retention policies",
    "Privacy by design principles",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">Security & Compliance</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your data security and privacy are our top priorities. Learn about our comprehensive security measures and
              compliance standards.
            </p>
          </div>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">Our Security Approach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We implement multiple layers of security to protect your data and ensure the integrity of our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="text-primary">{measure.icon}</div>
                    <span>{measure.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{measure.description}</p>
                  <ul className="space-y-2">
                    {measure.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">Compliance Standards</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We adhere to industry-leading compliance standards to ensure your data is handled according to the highest
              regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {compliance.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-xl text-foreground">{item.standard}</h3>
                    <Badge
                      variant={
                        item.status === "Compliant" ? "default" : item.status === "Available" ? "secondary" : "outline"
                      }
                      className={item.status === "Compliant" ? "bg-primary" : ""}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">
              Security Best Practices
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive security practices ensure the protection of your data throughout the entire development
              lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bestPractices.map((practice, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{practice}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-6">
                Data Protection Commitment
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Data Minimization</h3>
                    <p className="text-muted-foreground">
                      We collect only the data necessary for providing our services and delete it when no longer needed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Transparent Processing</h3>
                    <p className="text-muted-foreground">
                      We clearly communicate how we collect, use, and protect your data throughout our engagement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Your Rights</h3>
                    <p className="text-muted-foreground">
                      You have the right to access, correct, delete, or restrict the processing of your personal data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-semibold text-lg">Enterprise-Grade Security</p>
                  <p className="text-muted-foreground">Protecting your data is our responsibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-destructive/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-destructive">
                <AlertTriangle className="h-6 w-6" />
                <span>Security Incident Response</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                In the unlikely event of a security incident, we have established procedures to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Immediately contain and assess the incident</li>
                <li>Notify affected clients within 72 hours</li>
                <li>Work with relevant authorities as required</li>
                <li>Implement corrective measures to prevent recurrence</li>
                <li>Provide regular updates throughout the resolution process</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
            Security Questions or Concerns?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our security team is available to address any questions or concerns about our security practices and data
            protection measures.
          </p>
          <Card className="max-w-md mx-auto bg-primary-foreground text-primary">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-4">Security Contact</h3>
              <div className="space-y-2 text-sm">
                <p>Email: info@gauzenssoftwaresolutions.com</p>
                <p>Phone: (727) 491-2530</p>
                <p className="text-xs text-muted-foreground mt-4">For urgent security matters, please call directly</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
