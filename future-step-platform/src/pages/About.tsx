import { Target, Users, Award, TrendingUp, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import governmentTechImage from "@/assets/government-tech.jpg";

const About = () => {
  const stats = [
    { label: "Students Benefited", value: "50,000+", icon: Users },
    { label: "Industry Partners", value: "1,200+", icon: Award },
    { label: "Successful Placements", value: "45,000+", icon: Target },
    { label: "Success Rate", value: "94%", icon: TrendingUp },
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Leveraging cutting-edge AI technology to revolutionize internship matching and create better opportunities for students."
    },
    {
      icon: Heart,
      title: "Inclusivity",
      description: "Ensuring equal opportunities for all students regardless of their background, promoting diversity in the workforce."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Building a secure, transparent platform that maintains the highest standards of data protection and verification."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 font-heading">
                Transforming India's 
                <span className="text-primary"> Internship Ecosystem</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our AI-powered platform addresses the challenges of the PM Internship Scheme 
                by creating intelligent connections between talented students and forward-thinking industries.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-secondary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src={governmentTechImage} 
                alt="Government technology initiative"
                className="rounded-2xl shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6 font-heading">
              The Challenge We're Solving
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The PM Internship Scheme faces significant challenges in efficiently matching 
              students with appropriate industry opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">Current Challenges</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Manual Matching Process",
                    description: "Traditional methods are time-consuming and often result in mismatched placements"
                  },
                  {
                    title: "Limited Industry Visibility",
                    description: "Students struggle to find relevant opportunities that match their skills and interests"
                  },
                  {
                    title: "Inefficient Verification",
                    description: "Manual verification of student credentials creates bottlenecks and trust issues"
                  },
                  {
                    title: "Lack of Preparation Support",
                    description: "Students often lack proper interview preparation and industry-specific guidance"
                  }
                ].map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">{challenge.title}</h4>
                      <p className="text-muted-foreground">{challenge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">Our AI Solution</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Intelligent Matching",
                    description: "AI algorithms analyze skills, preferences, and industry requirements for optimal matches"
                  },
                  {
                    title: "Enhanced Discovery",
                    description: "Smart recommendations help students discover opportunities they might have missed"
                  },
                  {
                    title: "Automated Verification",
                    description: "Blockchain-based credential verification ensures trust and reduces processing time"
                  },
                  {
                    title: "AI-Powered Preparation",
                    description: "Mock interviews and personalized feedback help students prepare effectively"
                  }
                ].map((solution, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-success rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">{solution.title}</h4>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Matching is Better */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6 font-heading">
              Why AI Matching is Superior
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our artificial intelligence approach delivers unprecedented accuracy and efficiency 
              compared to traditional matching methods.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "98% Accuracy",
                description: "Our AI algorithms achieve 98% accuracy in skill-based matching, compared to 65% with manual processes.",
                improvement: "+33% improvement"
              },
              {
                title: "80% Faster",
                description: "Automated matching reduces processing time from weeks to minutes, accelerating placements.",
                improvement: "From weeks to minutes"
              },
              {
                title: "3x More Relevant",
                description: "Students receive 3 times more relevant opportunities through intelligent recommendation systems.",
                improvement: "300% better relevance"
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-none shadow-medium text-center">
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-primary mb-4">{benefit.title}</div>
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <div className="text-sm font-semibold text-success bg-success/10 rounded-full px-4 py-2 inline-block">
                    {benefit.improvement}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6 font-heading">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our mission to transform India's internship ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-medium text-center group hover:shadow-strong transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-heading">
            Creating Lasting Impact
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Our platform is not just about matching students with internships—we're building 
            the foundation for India's future workforce through intelligent technology and 
            meaningful connections.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">For Students</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Access to verified industry opportunities</li>
                <li>• AI-powered career guidance and preparation</li>
                <li>• Skill development through targeted matching</li>
                <li>• Increased employment opportunities</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">For Industries</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Access to pre-screened, qualified candidates</li>
                <li>• Reduced hiring time and costs</li>
                <li>• Better cultural and skill fit matches</li>
                <li>• Streamlined internship management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;