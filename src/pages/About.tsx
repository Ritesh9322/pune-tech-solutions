import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import { Target, Eye, Lightbulb, Heart, Users, Zap } from 'lucide-react';

const values = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Innovation',
    description: 'We embrace new technologies and creative approaches to solve complex problems.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Integrity',
    description: 'We operate with honesty and transparency in all our business relationships.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Collaboration',
    description: 'We work closely with our clients and within our team to achieve shared goals.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Excellence',
    description: 'We strive for the highest quality in every solution we deliver.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-corporate-navy to-primary py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-foreground/20 text-primary-foreground mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Your Trusted Technology Partner
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Building innovative IT solutions for businesses across India.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-6">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                An Emerging IT Services Company Based in Pune
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  NexaTech Solutions is an emerging IT services and consulting company 
                  headquartered in Pune, Maharashtra. We specialize in delivering software 
                  development, cloud solutions, and digital transformation services to 
                  startups and growing businesses.
                </p>
                <p>
                  Founded with a vision to bridge the gap between technology and business needs, 
                  we focus on creating practical, scalable solutions that drive real value. 
                  Our team combines technical expertise with a deep understanding of industry 
                  requirements to deliver results that matter.
                </p>
                <p>
                  As an early-stage company, we maintain a lean, agile approach that allows 
                  us to adapt quickly to our clients' evolving needs while maintaining the 
                  highest standards of quality and professionalism.
                </p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Target className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Our Mission
                    </h3>
                    <p className="text-muted-foreground">
                      To empower businesses with innovative technology solutions that drive 
                      growth, efficiency, and competitive advantage in the digital economy.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Eye className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Our Vision
                    </h3>
                    <p className="text-muted-foreground">
                      To become a trusted technology partner for businesses seeking quality, 
                      reliability, and innovation in their digital transformation journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeading
            badge="Our Expertise"
            title="What We Do"
            description="We deliver comprehensive IT solutions across multiple technology domains."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Custom Software Development',
              'Web & Mobile Applications',
              'Cloud Infrastructure & DevOps',
              'Data Analytics & AI Solutions',
              'Cybersecurity Consulting',
              'IT Strategy & Architecture',
            ].map((item, index) => (
              <div 
                key={item}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-corporate transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold mb-4">
                  {index + 1}
                </div>
                <h3 className="font-display font-semibold text-foreground">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="Our Principles"
            title="Core Values"
            description="The principles that guide everything we do."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div 
                key={value.title}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5">
                  {value.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
