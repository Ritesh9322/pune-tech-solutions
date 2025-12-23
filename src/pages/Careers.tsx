import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  Briefcase,
  Users,
  Lightbulb,
  Heart,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';

const openPositions = [
  {
    title: 'Software Developer Intern',
    type: 'Internship',
    location: 'Remote / Hybrid',
    description: 'Work on real software projects and learn industry best practices.',
  },
  {
    title: 'Web Developer Intern',
    type: 'Internship',
    location: 'Remote / Hybrid',
    description: 'Build modern web applications using React, Node.js, and related technologies.',
  },
  {
    title: 'Python Developer Intern',
    type: 'Internship',
    location: 'Remote / Hybrid',
    description: 'Develop Python applications and automation scripts for various projects.',
  },
  {
    title: 'Data Analyst Intern',
    type: 'Internship',
    location: 'Remote / Hybrid',
    description: 'Analyze data and create insights using modern analytics tools.',
  },
  {
    title: 'Cloud Computing Intern',
    type: 'Internship',
    location: 'Remote / Hybrid',
    description: 'Learn cloud technologies and help deploy applications on cloud platforms.',
  },
];

const culturePoints = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Collaborative Environment',
    description: 'Work alongside experienced professionals in a supportive team setting.',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Learning-Focused',
    description: 'Continuous learning and skill development are at the core of our culture.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Work-Life Balance',
    description: 'We value your well-being and maintain flexible working arrangements.',
  },
];

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Application Submitted",
      description: "Thank you for your interest. We'll review your application and get back to you soon.",
    });

    setFormData({ name: '', email: '', interest: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-corporate-navy to-primary py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-foreground/20 text-primary-foreground mb-6">
              Careers
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Join Our Team
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Build your career with a growing IT solutions company in Pune.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="Our Culture"
            title="Why Work With Us"
            description="Join a team that values growth, collaboration, and innovation."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {culturePoints.map((point) => (
              <div key={point.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5">
                  {point.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeading
            badge="Opportunities"
            title="Open Positions"
            description="Explore current opportunities at NexaTech Solutions."
          />
          <div className="space-y-4">
            {openPositions.map((position) => (
              <div 
                key={position.title}
                className="bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-corporate transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {position.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-3">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                    </div>
                  </div>
                  <Button variant="hero" asChild>
                    <a href="#application-form">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              badge="Apply"
              title="Submit Your Application"
              description="Interested in joining our team? Fill out the form below."
            />
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest">Area of Interest *</Label>
                  <Select
                    value={formData.interest}
                    onValueChange={(value) => setFormData({ ...formData, interest: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software-development">Software Development</SelectItem>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="python-development">Python Development</SelectItem>
                      <SelectItem value="data-analytics">Data Analytics</SelectItem>
                      <SelectItem value="cloud-computing">Cloud Computing</SelectItem>
                      <SelectItem value="cybersecurity">Cyber Security</SelectItem>
                      <SelectItem value="ai-ml">AI / Machine Learning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Tell Us About Yourself</Label>
                  <Textarea
                    id="message"
                    placeholder="Share your background, skills, and why you're interested in joining NexaTech..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="xl" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
