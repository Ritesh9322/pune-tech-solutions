import Layout from '@/components/layout/Layout';

const Terms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-corporate-navy to-primary py-16 md:py-20">
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-primary-foreground/80">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg prose-slate">
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the NexaTech Solutions website and services, you accept 
                  and agree to be bound by these Terms and Conditions. If you do not agree to 
                  these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Services</h2>
                <p>
                  NexaTech Solutions provides IT consulting, software development, and related 
                  technology services. We also offer internship and training programs for 
                  educational purposes.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Internship Programs</h2>
                <p>Our internship programs are designed for educational and skill-development purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Programs are offered on a paid basis with clearly defined fees</li>
                  <li>Completion of a program does not guarantee employment with NexaTech Solutions or any other organization</li>
                  <li>High-performing participants may be considered for opportunities based on performance and business needs</li>
                  <li>Certificates are issued upon successful completion of program requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. User Responsibilities</h2>
                <p>When using our website and services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Provide accurate and truthful information</li>
                  <li>Not misuse or attempt to gain unauthorized access to our systems</li>
                  <li>Respect intellectual property rights</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and software, 
                  is the property of NexaTech Solutions and is protected by intellectual property 
                  laws. You may not reproduce, distribute, or create derivative works without 
                  our express written permission.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Payment Terms</h2>
                <p>For paid services and programs:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>All fees must be paid in advance unless otherwise agreed</li>
                  <li>Payments are processed through secure payment gateways</li>
                  <li>Refunds are subject to our Refund Policy</li>
                  <li>Prices are subject to change with prior notice</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                <p>
                  NexaTech Solutions shall not be liable for any indirect, incidental, special, 
                  or consequential damages arising from your use of our services. Our total 
                  liability shall not exceed the amount paid by you for the specific service 
                  in question.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Disclaimer</h2>
                <p>
                  Our services are provided "as is" without warranties of any kind, either 
                  express or implied. We do not guarantee specific outcomes from our training 
                  programs or consulting services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance 
                  with the laws of India. Any disputes shall be subject to the exclusive 
                  jurisdiction of the courts in Pune, Maharashtra.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">10. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms and Conditions at any time. 
                  Changes will be effective upon posting on our website. Your continued use 
                  of our services constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
                <p>
                  For questions about these Terms and Conditions, please contact us at:
                </p>
                <p className="mt-4">
                  <strong>NexaTech Solutions</strong><br />
                  402, Near Murkute Garden,<br />
                  Baner, Pune, Maharashtra – 411069, India<br />
                  Email: contact@nexatech.in
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
