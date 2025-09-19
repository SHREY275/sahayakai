import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "support@aiinternshipportal.gov.in",
      description: "Send us an email for general inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 11 2345 6789",
      description: "Call us during business hours"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "AI Internship Portal Division, Ministry of Education, New Delhi 110001",
      description: "Visit our government office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM",
      description: "We're available to help during these hours"
    }
  ];

  const faqItems = [
    {
      question: "How do I register as a student?",
      answer: "Click on 'Apply as Student' and follow the registration process. You'll need your academic credentials and a current resume."
    },
    {
      question: "How does the AI matching work?",
      answer: "Our AI analyzes your skills, qualifications, and preferences to match you with relevant internship opportunities from our industry partners."
    },
    {
      question: "Is this platform free for students?",
      answer: "Yes, the AI Internship Portal is completely free for students as part of the PM Internship Scheme initiative."
    },
    {
      question: "How can companies join the platform?",
      answer: "Companies can register through 'Register as Industry' and will go through a verification process to ensure quality partnerships."
    },
    {
      question: "What support is available for interview preparation?",
      answer: "We offer AI-powered mock interviews with real-time feedback and personalized improvement suggestions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 font-heading">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about the AI Internship Portal? We're here to help you make the most 
            of your internship journey.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-none shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-secondary">
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Full Name *
                      </label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Phone Number
                      </label>
                      <Input placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Subject *
                      </label>
                      <Input placeholder="What is this about?" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      User Type
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {["Student", "Industry", "Other"].map((type) => (
                        <label key={type} className="flex items-center space-x-2 cursor-pointer">
                          <input type="radio" name="userType" value={type.toLowerCase()} className="text-primary" />
                          <span className="text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-primary text-white hover:opacity-90 text-lg py-3">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & FAQ */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="border-none shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-secondary">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary">{info.title}</h3>
                        <p className="text-secondary font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick FAQ */}
            <Card className="border-none shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-secondary">
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqItems.map((faq, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-secondary mb-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Government Notice */}
      <section className="py-12 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Official Government Portal</h2>
          <p className="text-secondary-light/80 max-w-3xl mx-auto">
            This AI Internship Portal is an official initiative under the Prime Minister's Internship Scheme, 
            developed as part of Smart India Hackathon 2025. All data is secured and processed according to 
            government privacy standards.
          </p>
          <div className="flex justify-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold">SIH</div>
              <div className="text-sm text-secondary-light/70">Smart India Hackathon</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">2025</div>
              <div className="text-sm text-secondary-light/70">Government Initiative</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">PM</div>
              <div className="text-sm text-secondary-light/70">Internship Scheme</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;