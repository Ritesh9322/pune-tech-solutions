import Layout from '@/components/layout/Layout';

const Privacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-corporate-navy to-primary py-16 md:py-20">
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Privacy Policy
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
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p>
                  NexaTech Solutions ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Personal Information:</strong> Name, email address, and other contact details you provide when filling out forms on our website.</li>
                  <li><strong>Application Data:</strong> Information submitted through our career or internship application forms, including resume and educational background.</li>
                  <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited and time spent on the site.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To process internship and job applications</li>
                  <li>To improve our website and services</li>
                  <li>To send relevant communications about our services (with your consent)</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or 
                  destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Third-Party Sharing</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share information with trusted service providers who assist us in 
                  operating our website and conducting our business, subject to confidentiality agreements.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Cookies</h2>
                <p>
                  Our website may use cookies to enhance your browsing experience. You can 
                  choose to disable cookies through your browser settings, though this may 
                  affect the functionality of our website.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be 
                  posted on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default Privacy;
