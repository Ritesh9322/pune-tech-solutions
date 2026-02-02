import {
  ArrowRight,
  Briefcase,
  Clock,
  Heart,
  Lightbulb,
  MapPin,
  Users,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const openPositions = [
  {
    title: 'Software Developer',
    type: 'Full-Time job role',
    location: 'Vadodara',
    description: 'Work on real software projects and learn industry best practices.',
  },
  {
    title: 'Web Developer Intern',
    type: 'Internship',
    location: 'Remote',
    description: 'Build modern web applications using React, Node.js, and related technologies.',
  },
  {
    title: 'Python Developer',
    type: 'Full-Time job role',
    location: 'Remote',
    description: 'Develop Python applications and automation scripts for various projects.',
  },
  {
    title: 'Data Analyst',
    type: 'Full-Time job role',
    location: 'Vadodara',
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

  try {
   await fetch(
  "https://script.google.com/macros/s/AKfycbxw_1--OpARLovuviIjCJviIRUFSrzk-Y7ohGc0MnR5bdp23wQ1UFqd7zVsDUcmElVE/exec",
  {
    method: "POST",
    mode: "no-cors", // 🔑 VERY IMPORTANT
    headers: {
      "Content-Type": "text/plain", // 🔑 VERY IMPORTANT
    },
    body: JSON.stringify({
      fullName: formData.name,
      email: formData.email,
      areaOfInterest: formData.interest,
      about: formData.message,
    }),
  }
);



    toast({
      title: "Application Submitted",
      description:
        "Thank you for your interest. We'll review your application and get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      interest: "",
      message: "",
    });

  } catch (error) {
    toast({
      title: "Submission Failed",
      description: "Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-corporate-navy to-primary py-20 md:py-28">
        <div className="container-custom relative max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-foreground/20 text-primary-foreground mb-6">
            Careers
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80">
            Build your career with a growing IT solutions company in Vadodara, Gujarat.
          </p>
        </div>
      </section>

      {/* Culture */}
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
                <h3 className="font-display text-xl font-semibold mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom space-y-4">
          <SectionHeading
            badge="Opportunities"
            title="Open Positions"
            description="Explore current opportunities at NexaTech Solutions."
          />
          {openPositions.map((position) => (
            <div
              key={position.title}
              className="bg-card border border-border rounded-xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold">{position.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    {position.description}
                  </p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {position.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {position.location}
                    </span>
                  </div>
                </div>
                <Button variant="hero" asChild>
                  <a href="#application-form">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="section-padding bg-background">
        <div className="container-custom max-w-2xl">
          <SectionHeading
            badge="Apply"
            title="Submit Your Application"
            description="Interested in joining our team? Fill out the form below."
          />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label>Full Name *</Label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label>Email Address *</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label>Area of Interest *</Label>
              <Select
                value={formData.interest}
                onValueChange={(value) =>
                  setFormData({ ...formData, interest: value })
                }
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

            <div>
              <Label>Tell Us About Yourself, Paste Your Resume Drive Link*</Label>
              <Textarea
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
