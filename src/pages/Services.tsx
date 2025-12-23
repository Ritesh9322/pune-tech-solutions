import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Code, 
  Cloud, 
  Database, 
  Shield, 
  Lightbulb,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with the latest technologies.',
    features: [
      'Business websites & landing pages',
      'Web applications & portals',
      'Frontend development (React, Vue, Angular)',
      'Backend development (Node.js, Python, Java)',
      'E-commerce solutions',
      'Progressive Web Apps (PWA)',
    ],
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Software Development',
    description: 'Custom software solutions designed to streamline your business operations.',
    features: [
      'Custom enterprise software',
      'Business automation tools',
      'API development & integration',
      'Legacy system modernization',
      'Desktop applications',
      'Quality assurance & testing',
    ],
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    features: [
      'Cloud architecture design',
      'Application deployment (AWS, Azure, GCP)',
      'Cloud migration services',
      'DevOps & CI/CD implementation',
      'Container orchestration',
      'Cloud cost optimization',
    ],
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Data & AI',
    description: 'Transform your data into actionable insights with our analytics solutions.',
    features: [
      'Data analysis & visualization',
      'Machine learning models',
      'Predictive analytics',
      'Business intelligence dashboards',
      'Data pipeline development',
      'AI-powered automation',
    ],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Cyber Security',
    description: 'Protect your digital assets with our comprehensive security services.',
    features: [
      'Security assessment & audits',
      'Secure coding practices',
      'Application security testing',
      'Vulnerability management',
      'Security awareness training',
      'Compliance consulting',
    ],
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'IT Consulting',
    description: 'Strategic technology guidance to help you make informed decisions.',
    features: [
      'Technology strategy planning',
      'Architecture consulting',
      'Digital transformation roadmap',
      'Project management support',
      'Technical due diligence',
      'Vendor selection assistance',
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-corporate-navy to-primary py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-foreground/20 text-primary-foreground mb-6">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Comprehensive IT Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              From web development to cloud infrastructure, we provide end-to-end technology services for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    {service.icon}
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {service.description}
                  </p>
                  <Button variant="hero" asChild>
                    <Link to="/contact">
                      Discuss Your Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className={`bg-secondary/50 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="font-display font-semibold text-foreground mb-6">
                    What's Included:
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Let's discuss how we can help transform your business with the right technology solutions.
            </p>
            <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
