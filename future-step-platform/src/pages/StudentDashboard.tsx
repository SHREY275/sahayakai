import { useState } from "react";
import { Upload, FileText, Mic, Star, MapPin, Calendar, Building, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const StudentDashboard = () => {
  const [atsScore, setAtsScore] = useState<number | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleResumeUpload = () => {
    setIsAnalyzing(true);
    // Simulate ATS analysis
    setTimeout(() => {
      setAtsScore(87);
      setIsAnalyzing(false);
    }, 2000);
  };

  const suggestedInternships = [
    {
      id: 1,
      company: "Tech Innovators Pvt Ltd",
      position: "Frontend Developer Intern",
      location: "Bangalore, Karnataka",
      duration: "6 months",
      skills: ["React", "JavaScript", "CSS"],
      match: 94,
      applicants: 45,
      logo: "🚀"
    },
    {
      id: 2,
      company: "Digital Solutions Inc",
      position: "UI/UX Design Intern",
      location: "Mumbai, Maharashtra",
      duration: "4 months",
      skills: ["Figma", "Adobe XD", "User Research"],
      match: 89,
      applicants: 32,
      logo: "🎨"
    },
    {
      id: 3,
      company: "Data Analytics Corp",
      position: "Data Science Intern",
      location: "Hyderabad, Telangana",
      duration: "6 months",
      skills: ["Python", "Machine Learning", "SQL"],
      match: 85,
      applicants: 67,
      logo: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-secondary mb-4 font-heading">
                Student Dashboard
              </h1>
              <p className="text-xl text-muted-foreground">
                Manage your profile, track applications, and discover new opportunities
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Profile Completion</div>
                  <div className="font-semibold text-secondary">75%</div>
                </div>
                <Progress value={75} className="w-24" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Resume Upload & ATS Score */}
            <Card className="border-none shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-6 h-6 text-primary" />
                  <span>Resume Analysis</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-medium text-secondary mb-2">Upload Your Resume</p>
                    <p className="text-muted-foreground mb-4">
                      Get instant ATS score and improvement suggestions
                    </p>
                    <Button 
                      onClick={handleResumeUpload} 
                      disabled={isAnalyzing}
                      className="bg-gradient-primary text-white hover:opacity-90"
                    >
                      {isAnalyzing ? "Analyzing..." : "Upload Resume"}
                    </Button>
                  </div>

                  {atsScore && (
                    <div className="bg-accent rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-secondary">ATS Compatibility Score</h3>
                        <Badge variant="secondary" className="bg-success text-white">
                          {atsScore}/100
                        </Badge>
                      </div>
                      <Progress value={atsScore} className="mb-4" />
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span className="text-sm">Strong keyword optimization</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span className="text-sm">Good formatting structure</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-warning" />
                            <span className="text-sm">Add more technical skills</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-warning" />
                            <span className="text-sm">Include project descriptions</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Mock Interview */}
            <Card className="border-none shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mic className="w-6 h-6 text-primary" />
                  <span>AI Mock Interview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-section rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-secondary mb-4">
                    Practice with AI Interviewer
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Improve your interview skills with our AI-powered mock interview system. 
                    Get real-time feedback and personalized tips.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-primary text-white hover:opacity-90">
                      <Mic className="w-4 h-4 mr-2" />
                      Start Voice Interview
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Text-Based Interview
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Suggested Internships */}
            <Card className="border-none shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-6 h-6 text-primary" />
                    <span>Suggested Internships</span>
                  </div>
                  <Badge variant="secondary">{suggestedInternships.length} matches</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {suggestedInternships.map((internship) => (
                    <div key={internship.id} className="border rounded-lg p-6 hover:shadow-soft transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-2xl">
                            {internship.logo}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-secondary">{internship.position}</h3>
                            <p className="text-muted-foreground">{internship.company}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{internship.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{internship.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users className="w-4 h-4" />
                                <span>{internship.applicants} applicants</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Badge 
                          className={`${internship.match >= 90 ? 'bg-success' : internship.match >= 80 ? 'bg-warning' : 'bg-muted'} text-white`}
                        >
                          {internship.match}% match
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <Button size="sm" className="bg-gradient-primary text-white hover:opacity-90">
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-6">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    View All Opportunities
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Quick Stats */}
            <Card className="border-none shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Profile Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Applications</span>
                    <span className="font-semibold text-secondary">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Interview Calls</span>
                    <span className="font-semibold text-secondary">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Profile Views</span>
                    <span className="font-semibold text-secondary">48</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Success Rate</span>
                    <span className="font-semibold text-success">25%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-none shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "Applied to Frontend Developer position", time: "2 hours ago" },
                    { action: "Completed mock interview", time: "1 day ago" },
                    { action: "Updated resume", time: "3 days ago" },
                    { action: "Profile viewed by Tech Corp", time: "5 days ago" }
                  ].map((activity, index) => (
                    <div key={index} className="text-sm">
                      <p className="text-secondary">{activity.action}</p>
                      <p className="text-muted-foreground text-xs">{activity.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;