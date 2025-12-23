import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard';
import { 
  Globe, 
  Code, 
  Cloud, 
  Database, 
  Shield, 
  Lightbulb,
  CheckCircle2,
  Users,
  Target,
  Award,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Web Development',
    description: 'Business websites, web applications, and modern frontend & backend solutions tailored to your needs.',
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Software Development',
    description: 'Custom software, automation tools, and seamless API integrations for your business operations.',
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Cloud Solutions',
    description: 'Application deployment, hosting, migration, and cloud-ready architecture for scalable growth.',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Data & AI',
    description: 'Data analysis, machine learning models, and actionable business insights to drive decisions.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Cyber Security',
    description: 'Secure coding practices and application security awareness to protect your digital assets.',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'IT Consulting',
    description: 'Technical guidance, architecture planning, and project mentorship from experienced professionals.',
  },
];

const whyChooseUs = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Experienced Technical Team',
    description: 'Our developers and consultants bring years of industry experience to every project.',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Industry-Aligned Solutions',
    description: 'We deliver practical, real-world solutions that address actual business challenges.',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'Quality & Scalability',
    description: 'Every solution is built with quality standards and future growth in mind.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Flexible Work Culture',
    description: 'We adapt to your needs with flexible engagement models and transparent communication.',
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-corporate-navy to-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        <div className="container-custom relative">
          <div className="py-20 md:py-32 lg:py-40">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
                Building Scalable & Secure IT Solutions for Modern Businesses
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Web Development • Software Engineering • Cloud • Data & AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
                <Button variant="hero-outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/internships">Careers & Internships</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-corporate-teal/20 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl" />
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-6">
              About NexaTech
            </span>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              NexaTech Solutions is a technology-driven IT solutions firm based in Pune, Maharashtra. 
              We specialize in delivering high-quality software development, cloud solutions, and 
              digital services to startups and growing businesses. Our focus is on building practical, 
              scalable solutions that drive real business value.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeading
            badge="What We Do"
            title="Our Services"
            description="Comprehensive IT solutions designed to help your business thrive in the digital age."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="Our Strengths"
            title="Why Choose Us"
            description="We combine technical expertise with a client-focused approach to deliver exceptional results."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={item.title}
                className="flex gap-5 p-6 rounded-xl bg-card border border-border hover:shadow-corporate transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Highlight Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-foreground/20 text-primary-foreground mb-6">
              Join Our Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Build Your Career With Us
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              We believe in nurturing talent and providing opportunities for growth. 
              Outstanding performers in our internship and training programs may be considered 
              for long-term roles based on performance and business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <Link to="/internships">
                  Explore Internships
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/careers">View Open Positions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
