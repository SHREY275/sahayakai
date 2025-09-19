import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { User, Building, Lock } from "lucide-react";

const Login = () => {
  const [role, setRole] = useState<"student" | "industry">("student");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "student") {
      window.location.href = "/student-dashboard";
    } else {
      window.location.href = "/industry-dashboard";
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/log_bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full max-w-md">
        <Card className="rounded-2xl shadow-2xl bg-white/95 backdrop-blur-lg border border-primary/20 hover:shadow-primary/40 transition-shadow duration-300">
          <CardHeader className="flex flex-col items-center">
            {/* Logo */}
            <img
              src="/sahayakai_logo.png"
              alt="Sahayak AI Logo"
              className="h-16 w-auto mb-4 drop-shadow-md"
            />
            <CardTitle className="text-center text-2xl font-bold text-secondary">
              {role === "student" ? "Student Login" : "Industry Login"}
            </CardTitle>
            <p className="text-sm text-muted-foreground text-center mt-1">
              Secure access to your internship dashboard
            </p>
          </CardHeader>

          <CardContent>
            {/* Role Switch */}
            <div className="flex justify-center space-x-4 mb-6">
              <Button
                variant={role === "student" ? "default" : "outline"}
                onClick={() => setRole("student")}
                className="px-6"
              >
                <User className="w-4 h-4 mr-2" />
                Student
              </Button>
              <Button
                variant={role === "industry" ? "default" : "outline"}
                onClick={() => setRole("industry")}
                className="px-6"
              >
                <Building className="w-4 h-4 mr-2" />
                Industry
              </Button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="rounded-lg border-muted focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  required
                  className="rounded-lg border-muted focus:border-primary focus:ring-primary"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary text-white hover:opacity-90 shadow-md rounded-lg"
              >
                <Lock className="w-4 h-4 mr-2" />
                Login
              </Button>
            </form>

            {/* Extra */}
            <div className="mt-4 flex justify-between text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary">
                Forgot password?
              </a>
              <a href="#" className="hover:text-primary">
                Create an account
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;


