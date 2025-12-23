import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Globe,
  Code,
  Database,
  Cloud,
  Shield,
  Brain,
  Clock,
  MapPin,
  GraduationCap,
  Award,
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const domains = [
  { icon: <Globe className="w-6 h-6" />, title: 'Web Development' },
  { icon: <Code className="w-6 h-6" />, title: 'Python Programming' },
  { icon: <Code className="w-6 h-6" />, title: 'Java Development' },
  { icon: <Database className="w-6 h-6" />, title: 'Data Science' },
  { icon: <Brain className="w-6 h-6" />, title: 'AI / Machine Learning' },
  { icon: <Cloud className="w-6 h-6" />, title: 'Cloud Computing' },
  { icon: <Shield className="w-6 h-6" />, title: 'Cyber Security' },
];

const modes = [
  { icon: <MapPin className="w-5 h-5" />, title: 'Remote', description: 'Work from anywhere' },
  { icon: <Users className="w-5 h-5" />, title: 'Hybrid', description: 'Flexible arrangement' },
  { icon: <MapPin className="w-5 h-5" />, title: 'In-Office', description: 'Pune location' },
];

const structure = [
  { title: 'Duration', description: '4, 6, or 8 weeks based on program' },
  { title: 'Assignments', description: 'Real project-based work' },
  { title: 'Learning', description: 'Hands-on, practical approach' },
  { title: 'Evaluation', description: 'Technical assessment & feedback' },
];

const benefits = [
  'Internship completion certificate',
  'Real project experience',
  'Portfolio-ready work samples',
  'Technical mentorship',
  'Industry exposure',
  'Networking opportunities',
];

const Internships = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-corporate-navy to-primary py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-foreground/20 text-primary-foreground mb-6">
              Programs
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Internship & Early Career Programs
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Gain practical, industry-oriented experience and build your career in technology.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              NexaTech Solutions offers industry-oriented internship programs designed to help 
              students and early-career professionals gain practical, real-world exposure to 
              software development and IT services. Our programs bridge the gap between academic 
              learning and industry requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Internship Modes */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeading
            badge="Flexibility"
            title="Internship Modes"
            description="Choose the work arrangement that suits you best."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {modes.map((mode) => (
              <div key={mode.title} className="bg-card border border-border rounded-xl p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5">
                  {mode.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {mode.title}
                </h3>
                <p className="text-muted-foreground">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="Technology Areas"
            title="Internship Domains"
            description="Explore opportunities across various technology domains."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {domains.map((domain) => (
              <div 
                key={domain.title}
                className="card-corporate p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  {domain.icon}
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm md:text-base">
                  {domain.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-6">
                Program Details
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Program Structure
              </h2>
              <div className="space-y-6">
                {structure.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-6">
                Requirements
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Eligibility Criteria
              </h2>
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      Academic Background
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      BTech / BE / MCA / BCA students or recent graduates
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      Preferred Streams
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      CSE / IT / AI / Data Science / Electronics with programming interest
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="What You Get"
            title="Completion Benefits"
            description="What you'll receive upon successful completion of the program."
          />
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunity */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Career Opportunity
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              High-performing interns may be considered for full-time or long-term opportunities 
              based on their performance, skill development, and business requirements. 
              We believe in recognizing and nurturing talent within our organization.
            </p>
            <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <Link to="/careers">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Internships;
