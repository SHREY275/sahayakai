import { useState } from "react";
import { Building, Plus, Users, Star, MapPin, Calendar, FileText, Filter, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const IndustryDashboard = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const internshipRoles = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      location: "Bangalore, Karnataka",
      duration: "6 months",
      skills: ["React", "JavaScript", "CSS", "TypeScript"],
      capacity: 5,
      applicants: 45,
      status: "Active",
      matches: 12
    },
    {
      id: 2,
      title: "Data Science Intern",
      location: "Mumbai, Maharashtra", 
      duration: "4 months",
      skills: ["Python", "Machine Learning", "SQL", "Pandas"],
      capacity: 3,
      applicants: 67,
      status: "Active",
      matches: 8
    },
    {
      id: 3,
      title: "UI/UX Design Intern",
      location: "Delhi, NCR",
      duration: "3 months",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      capacity: 2,
      applicants: 32,
      status: "Draft",
      matches: 0
    }
  ];

  const matchedCandidates = [
    {
      id: 1,
      name: "Priya Sharma",
      education: "B.Tech Computer Science, IIT Delhi",
      skills: ["React", "JavaScript", "Node.js", "MongoDB"],
      experience: "2 personal projects, 1 freelance project",
      score: 94,
      atsScore: 87,
      location: "Delhi, NCR"
    },
    {
      id: 2,
      name: "Arjun Patel",
      education: "B.E. Software Engineering, BITS Pilani",
      skills: ["React", "TypeScript", "Python", "AWS"],
      experience: "3 hackathon wins, Open source contributor",
      score: 91,
      atsScore: 83,
      location: "Bangalore, Karnataka"
    },
    {
      id: 3,
      name: "Sneha Reddy",
      education: "B.Tech IT, NIT Warangal",
      skills: ["JavaScript", "React", "CSS", "Git"],
      experience: "Internship at startup, 2 web projects",
      score: 88,
      atsScore: 79,
      location: "Hyderabad, Telangana"
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
                Industry Dashboard
              </h1>
              <p className="text-xl text-muted-foreground">
                Manage internship programs and discover talented candidates
              </p>
            </div>
            <Button 
              onClick={() => setShowCreateForm(!showCreateForm)}
              className="bg-gradient-primary text-white hover:opacity-90"
            >
              <Plus className="w-5 h-5 mr-2" />
              Create Internship
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Active Internships", value: "8", icon: Building, color: "text-primary" },
            { label: "Total Applicants", value: "234", icon: Users, color: "text-success" },
            { label: "Matched Candidates", value: "67", icon: Star, color: "text-warning" },
            { label: "Successful Hires", value: "45", icon: FileText, color: "text-secondary" },
          ].map((stat, index) => (
            <Card key={index} className="border-none shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Create Internship Form */}
            {showCreateForm && (
              <Card className="border-none shadow-medium">
                <CardHeader>
                  <CardTitle>Create New Internship Role</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary mb-2">
                          Role Title
                        </label>
                        <Input placeholder="e.g., Frontend Developer Intern" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary mb-2">
                          Location
                        </label>
                        <Input placeholder="e.g., Bangalore, Karnataka" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary mb-2">
                          Duration
                        </label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3">3 months</SelectItem>
                            <SelectItem value="6">6 months</SelectItem>
                            <SelectItem value="12">12 months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary mb-2">
                          Required Skills
                        </label>
                        <Input placeholder="React, JavaScript, CSS (comma separated)" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary mb-2">
                          Capacity
                        </label>
                        <Input type="number" placeholder="Number of interns needed" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary mb-2">
                          Experience Level
                        </label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button className="bg-gradient-primary text-white hover:opacity-90">
                      Create Role
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowCreateForm(false)}
                      className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Active Internships */}
            <Card className="border-none shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Your Internship Roles</span>
                  <Badge variant="secondary">{internshipRoles.length} total</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {internshipRoles.map((role) => (
                    <div key={role.id} className="border rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-secondary">{role.title}</h3>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{role.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{role.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{role.capacity} positions</span>
                            </div>
                          </div>
                        </div>
                        <Badge 
                          className={`${role.status === 'Active' ? 'bg-success' : 'bg-warning'} text-white`}
                        >
                          {role.status}
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-4 bg-accent rounded-lg">
                          <div className="text-2xl font-bold text-secondary">{role.applicants}</div>
                          <div className="text-sm text-muted-foreground">Applicants</div>
                        </div>
                        <div className="text-center p-4 bg-accent rounded-lg">
                          <div className="text-2xl font-bold text-primary">{role.matches}</div>
                          <div className="text-sm text-muted-foreground">AI Matches</div>
                        </div>
                        <div className="text-center p-4 bg-accent rounded-lg">
                          <div className="text-2xl font-bold text-success">{Math.round((role.matches / role.applicants) * 100)}%</div>
                          <div className="text-sm text-muted-foreground">Match Rate</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                            View Applications
                          </Button>
                          <Button size="sm" className="bg-gradient-primary text-white hover:opacity-90">
                            View Matches
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Matched Candidates */}
          <div className="space-y-6">
            <Card className="border-none shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Top Matched Candidates</span>
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                    <Input placeholder="Search candidates..." className="pl-10" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {matchedCandidates.map((candidate) => (
                    <div key={candidate.id} className="border rounded-lg p-4 hover:shadow-soft transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-secondary">{candidate.name}</h4>
                          <p className="text-sm text-muted-foreground">{candidate.education}</p>
                        </div>
                        <Badge className="bg-primary text-white">
                          {candidate.score}% match
                        </Badge>
                      </div>
                      
                      <div className="text-sm text-muted-foreground mb-3">
                        <p className="mb-1"><span className="font-medium">Experience:</span> {candidate.experience}</p>
                        <p><span className="font-medium">Location:</span> {candidate.location}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {candidate.skills.slice(0, 3).map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {candidate.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{candidate.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-muted-foreground">
                          ATS Score: <span className="font-medium text-secondary">{candidate.atsScore}/100</span>
                        </div>
                        <Button size="sm" className="bg-gradient-primary text-white hover:opacity-90">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-4">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    View All Candidates
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDashboard;