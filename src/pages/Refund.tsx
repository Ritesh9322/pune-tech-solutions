import Layout from '@/components/layout/Layout';

const Refund = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-corporate-navy to-primary py-16 md:py-20">
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Refund Policy
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
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Overview</h2>
                <p>
                  This Refund Policy outlines the terms and conditions for refunds on services 
                  and programs offered by NexaTech Solutions. We strive to ensure customer 
                  satisfaction while maintaining fair business practices.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Internship & Training Programs</h2>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">2.1 Cancellation Before Program Start</h3>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>7+ days before start date:</strong> Full refund minus processing fees (if applicable)</li>
                  <li><strong>3-7 days before start date:</strong> 75% refund of the program fee</li>
                  <li><strong>Less than 3 days before start date:</strong> 50% refund of the program fee</li>
                </ul>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-6">2.2 After Program Commencement</h3>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Within first week:</strong> 50% refund of the remaining program fee</li>
                  <li><strong>After first week:</strong> No refund will be provided</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Consulting & IT Services</h2>
                <p>For project-based consulting and IT services:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Refunds are subject to the terms outlined in individual service agreements</li>
                  <li>Work completed up to the cancellation date will be billed proportionally</li>
                  <li>Any advance payments for uncompleted work will be refunded after deducting costs incurred</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Non-Refundable Items</h2>
                <p>The following are generally non-refundable:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Registration and processing fees</li>
                  <li>Third-party costs (software licenses, cloud services, etc.)</li>
                  <li>Customized materials and resources provided</li>
                  <li>Programs completed beyond 50% of the duration</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Refund Process</h2>
                <p>To request a refund:</p>
                <ol className="list-decimal pl-6 space-y-2 mt-4">
                  <li>Submit a written request to contact@nexatech.in with your details and reason for refund</li>
                  <li>Include your registration/invoice number and payment details</li>
                  <li>Our team will review your request within 5 business days</li>
                  <li>Approved refunds will be processed within 7-14 business days</li>
                  <li>Refunds will be credited to the original payment method</li>
                </ol>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Exceptional Circumstances</h2>
                <p>
                  We understand that unforeseen circumstances may arise. In cases of medical 
                  emergencies, family emergencies, or other exceptional situations, please 
                  contact us with supporting documentation. We will review such cases on an 
                  individual basis and may offer alternative arrangements.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Program Cancellation by NexaTech</h2>
                <p>
                  In the rare event that NexaTech Solutions cancels a program or service:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>A full refund of all payments made will be provided</li>
                  <li>Alternative program dates may be offered where applicable</li>
                  <li>Refunds will be processed within 7 business days of cancellation announcement</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Disputes</h2>
                <p>
                  If you have any concerns about our refund decision, please escalate the 
                  matter to info@nexatech.in. We are committed to resolving disputes fairly 
                  and promptly.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
                <p>
                  For refund-related inquiries, please contact:
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

export default Refund;
