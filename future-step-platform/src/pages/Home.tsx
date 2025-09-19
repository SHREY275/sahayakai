import { ArrowRight, Star, Users, Brain, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroStudentsImage from "@/assets/hero-students.jpg";
import aiMatchingImage from "@/assets/ai-matching.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  Government Certified
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                AI-Powered 
                <span className="text-yellow-300"> Internship</span>
                <br />
                Matching Portal
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                Revolutionizing the PM Internship Scheme with intelligent 
                student-industry matching powered by advanced AI algorithms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-secondary hover:bg-white/90 shadow-medium text-lg px-8 py-4"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Apply as Student
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-4"
                >
                  Register as Industry
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <img 
                src={heroStudentsImage} 
                alt="Students using AI technology for internships"
                className="rounded-2xl shadow-strong"
              />
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-medium">
                <div className="flex items-center space-x-2">
                  <Brain className="w-6 h-6 text-primary" />
                  <span className="text-secondary font-semibold">AI Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Students Matched", value: "10,000+", icon: Users },
              { label: "Industry Partners", value: "500+", icon: Award },
              { label: "Success Rate", value: "95%", icon: Star },
              { label: "AI Accuracy", value: "98%", icon: Brain },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6 font-heading">
              Intelligent Matching Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our advanced AI algorithms analyze skills, qualifications, and preferences 
              to create perfect student-industry matches.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={aiMatchingImage} 
                alt="AI matching algorithm visualization"
                className="rounded-2xl shadow-medium"
              />
            </div>
            
            <div className="space-y-8">
              {[
                {
                  icon: Brain,
                  title: "AI-Powered Matching",
                  description: "Advanced machine learning algorithms analyze student profiles and industry requirements for optimal matches."
                },
                {
                  icon: Shield,
                  title: "Secure & Verified",
                  description: "All profiles are verified and secure, ensuring trustworthy connections between students and industries."
                },
                {
                  icon: Award,
                  title: "Government Approved",
                  description: "Part of the official PM Internship Scheme, ensuring quality and credibility for all participants."
                },
              ].map((feature, index) => (
                <Card key={index} className="border-none shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-secondary mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6 font-heading">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students and industry partners who are already benefiting 
            from our AI-powered matching platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-white hover:opacity-90 shadow-medium text-lg px-8 py-4"
            >
              <Users className="w-5 h-5 mr-2" />
              Start as Student
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4"
            >
              Partner with Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;