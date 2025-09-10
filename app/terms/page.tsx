import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, AlertTriangle, Mail } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <FileText className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">Terms of Service</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Scale className="h-5 w-5 text-primary" />
                  <span>Agreement to Terms</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using the services provided by Gauzens Software Solutions ("Company," "we,"
                  "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to
                  these Terms, please do not use our services.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Services Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Gauzens Software Solutions provides custom software development services, including but not
                    limited to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Custom software development</li>
                    <li>Web application development</li>
                    <li>Mobile application development</li>
                    <li>Database design and management</li>
                    <li>Cloud services and DevOps</li>
                    <li>Technology consulting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Client Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">As a client, you agree to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Provide accurate and complete information</li>
                    <li>Respond to requests for information in a timely manner</li>
                    <li>Make payments according to agreed terms</li>
                    <li>Respect intellectual property rights</li>
                    <li>Use our services in compliance with applicable laws</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Payment Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Project Payments</h4>
                      <p className="text-muted-foreground">
                        Payment terms will be specified in individual project agreements. Typically, we require a
                        deposit before work begins and milestone payments throughout the project.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Late Payments</h4>
                      <p className="text-muted-foreground">
                        Late payments may result in project delays and additional fees. We reserve the right to suspend
                        work until payment is received.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Client Ownership</h4>
                      <p className="text-muted-foreground">
                        Upon full payment, clients own the custom software developed specifically for their project,
                        excluding any pre-existing intellectual property or third-party components.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Company Rights</h4>
                      <p className="text-muted-foreground">
                        We retain rights to our methodologies, general knowledge, and any pre-existing intellectual
                        property used in the development process.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Confidentiality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We maintain strict confidentiality regarding all client information and project details. We will not
                    disclose confidential information to third parties without explicit written consent, except as
                    required by law.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Warranties and Disclaimers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Limited Warranty</h4>
                      <p className="text-muted-foreground">
                        We warrant that our services will be performed in a professional manner consistent with industry
                        standards. We provide bug fixes for a specified period after project completion.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Disclaimer</h4>
                      <p className="text-muted-foreground">
                        Except as expressly stated, our services are provided "as is" without warranties of any kind,
                        either express or implied.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our liability for any claims arising from our services shall not exceed the total amount paid by the
                    client for the specific project. We shall not be liable for indirect, incidental, or consequential
                    damages.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Project Changes and Scope</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Changes to project scope must be agreed upon in writing and may result in additional costs and
                    timeline adjustments. We will provide estimates for any requested changes before implementation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Termination</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Either party may terminate a project agreement with written notice. Upon termination, the client is
                    responsible for payment of all work completed up to the termination date.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    These Terms shall be governed by and construed in accordance with the laws of the State of Florida,
                    without regard to its conflict of law provisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-destructive text-destructive-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5" />
                    <span>11. Changes to Terms</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-destructive-foreground/90">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                    posting on our website. Continued use of our services constitutes acceptance of the modified Terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>12. Contact Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90 mb-4">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-primary-foreground/90">
                    <p>Gauzens Software Solutions</p>
                    <p>1151 Nightingale Ave, Miami Springs, FL 33166</p>
                    <p>Phone: (727) 491-2530</p>
                    <p>Email: info@gauzenssoftwaresolutions.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
