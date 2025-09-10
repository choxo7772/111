import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Database, Mail } from "lucide-react"

export default function PrivacyPolicyPage() {
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
            <h1 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">Privacy Policy</h1>
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
                  <Eye className="h-5 w-5 text-primary" />
                  <span>Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gauzens Software Solutions ("we," "our," or "us") is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
                  our website or use our services.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Personal Information</h4>
                    <p className="text-muted-foreground">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                      <li>Contact us through our website forms</li>
                      <li>Request information about our services</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Engage with us on social media</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Automatically Collected Information</h4>
                    <p className="text-muted-foreground">
                      We may automatically collect certain information about your device and usage patterns, including:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                      <li>IP address and browser type</li>
                      <li>Operating system and device information</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referring website addresses</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>To provide and maintain our services</li>
                    <li>To respond to your inquiries and requests</li>
                    <li>To send you technical notices and support messages</li>
                    <li>To communicate with you about our services</li>
                    <li>To improve our website and services</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Information Sharing and Disclosure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties except in
                    the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements</li>
                    <li>To protect our rights and safety</li>
                    <li>With trusted service providers who assist in our operations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="h-5 w-5 text-primary" />
                    <span>4. Data Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational security measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction. However, no method
                    of transmission over the internet is 100% secure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="h-5 w-5 text-primary" />
                    <span>5. Data Retention</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined
                    in this Privacy Policy, unless a longer retention period is required or permitted by law.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Your Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Right to access your personal information</li>
                    <li>Right to correct inaccurate information</li>
                    <li>Right to delete your personal information</li>
                    <li>Right to restrict processing</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Cookies and Tracking Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can
                    control cookie settings through your browser preferences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Changes to This Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>9. Contact Us</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90 mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
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
