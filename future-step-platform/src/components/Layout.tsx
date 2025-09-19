import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, Building } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Student Dashboard", href: "/student-dashboard" },
    { name: "Industry Dashboard", href: "/industry-dashboard" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/sahayakai_logo.png"
                alt="Sahayak AI Logo"
                className="h-14 sm:h-14 lg:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-secondary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-white px-4 py-2"
              >
                <Link to="/login">
                  <User className="w-4 h-4 mr-2" />
                  Student Login
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-gradient-primary text-white hover:opacity-90 px-4 py-2"
              >
                <Link to="/login">
                  <Building className="w-4 h-4 mr-2" />
                  Industry Login
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img
                  src="/sahayakai_logo.png"
                  alt="Sahayak AI Logo"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-secondary-light/80 max-w-md mb-4">
                Empowering students and industries through AI-powered internship
                matching. Part of the Prime Minister's Internship Scheme
                initiative.
              </p>

              {/* Footer Login Buttons */}
              <div className="flex space-x-3">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-white text-white hover:bg-white hover:text-secondary"
                >
                  <Link to="/login">Student Login</Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-primary text-white hover:opacity-90"
                >
                  <Link to="/login">Industry Login</Link>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  to="/features"
                  className="block text-secondary-light/80 hover:text-white transition-colors"
                >
                  Features
                </Link>
                <Link
                  to="/about"
                  className="block text-secondary-light/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="block text-secondary-light/80 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Government</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-secondary-light/80 hover:text-white transition-colors"
                >
                  PM Internship Scheme
                </a>
                <a
                  href="#"
                  className="block text-secondary-light/80 hover:text-white transition-colors"
                >
                  SIH 2025
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary-light/20 mt-8 pt-8 text-center">
            <p className="text-secondary-light/60">
              © 2025 Sahayak AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
