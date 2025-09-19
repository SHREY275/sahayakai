import { Brain, FileText, Mic, Users, Shield, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Based Internship Matchmaking",
      description: "Advanced machine learning algorithms analyze student skills, qualifications, and preferences to match them with the most suitable industry opportunities.",
      benefits: ["99% accuracy in skill matching", "Reduced application time by 80%", "Higher success rates"]
    },
    {
      icon: FileText,
      title: "Resume/CV Upload & ATS Scoring",
      description: "Upload your resume and get instant ATS (Applicant Tracking System) compatibility scores with detailed feedback and improvement suggestions.",
      benefits: ["Instant ATS score analysis", "Detailed improvement suggestions", "Industry-specific formatting tips"]
    },
    {
      icon: Shield,
      title: "Resume Verification",
      description: "Automated verification system ensures the authenticity of student credentials and achievements, building trust between students and employers.",
      benefits: ["Blockchain-based verification", "Fraud prevention", "Trusted credential system"]
    },
    {
      icon: Mic,
      title: "Mock AI Interview Practice",
      description: "Practice interviews with our AI interviewer that provides real-time feedback, helping students prepare for actual industry interviews.",
      benefits: ["Real-time feedback", "Industry-specific questions", "Confidence building"]
    },
    {
      icon: Users,
      title: "Industry Dashboard",
      description: "Comprehensive dashboard for companies to manage internship capacity, define requirements, and track matched candidates efficiently.",
      benefits: ["Streamlined candidate management", "Custom requirement setting", "Analytics and insights"]
    },
    {
      icon: Target,
      title: "Smart Recommendations",
      description: "Personalized internship recommendations based on career goals, academic background, and industry trends powered by AI analytics.",
      benefits: ["Personalized matching", "Career growth insights", "Market trend analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 font-heading">
            Powerful Features for 
            <span className="text-primary"> Smart Matching</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our AI-powered platform revolutionizes the internship matching process 
            with cutting-edge technology and intelligent algorithms.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-medium hover:shadow-strong transition-shadow duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-secondary">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6 font-heading">
              How Our AI Matching Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our sophisticated algorithm analyzes multiple data points to create perfect matches 
              between students and industry opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Profile Analysis",
                description: "AI analyzes student skills, academic background, and career preferences"
              },
              {
                step: "02", 
                title: "Industry Matching",
                description: "Algorithm matches profiles with industry requirements and company culture"
              },
              {
                step: "03",
                title: "Smart Recommendations",
                description: "System provides ranked recommendations with compatibility scores"
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {index < 2 && (
                  <ArrowRight className="w-6 h-6 text-primary absolute top-8 -right-3 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6 font-heading">
              Built with Advanced Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform leverages the latest in AI and machine learning to deliver 
              unprecedented accuracy in internship matching.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Machine Learning", description: "Advanced ML algorithms for pattern recognition" },
              { name: "Natural Language Processing", description: "Understanding resume content and job descriptions" },
              { name: "Blockchain Verification", description: "Secure and immutable credential verification" },
              { name: "Real-time Analytics", description: "Live matching and performance insights" }
            ].map((tech, index) => (
              <Card key={index} className="text-center border-none shadow-soft">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-secondary mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-heading">
            Experience the Future of Internship Matching
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our platform today and discover how AI can transform your internship journey.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-secondary hover:bg-white/90 shadow-medium text-lg px-8 py-4"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Features;