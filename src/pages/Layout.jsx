
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: createPageUrl("Home") },
    { name: "Projects", path: createPageUrl("Projects") },
    { name: "Research", path: createPageUrl("Research") },
    { name: "About", path: createPageUrl("About") },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Announcement Banner */}
      <div className="bg-yellow-400 text-black text-center py-3 px-4 font-bold">
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <span>⚡</span>
          <span>3rd Place at YC Agent Jam 2025 | NASA Space Apps Global Nominee</span>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black border-b-4 border-yellow-400" : "bg-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to={createPageUrl("Home")} className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center font-black text-black text-xl">
                KE
              </div>
              <span className="font-black text-xl hidden sm:block">KAVIN ELANGOVAN</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-wider transition-all hover:text-yellow-400 ${
                    location.pathname === link.path
                      ? "text-yellow-400 border-b-4 border-yellow-400 pb-1"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://www.linkedin.com/in/kavin-elangovan-93b556324/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  CONNECT
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t-2 border-yellow-400">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-bold uppercase tracking-wider transition-all ${
                      location.pathname === link.path ? "text-yellow-400" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="https://www.linkedin.com/in/kavin-elangovan-93b556324/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="w-full bg-blue-600 text-white font-bold">
                    <Linkedin className="w-4 h-4 mr-2" />
                    CONNECT ON LINKEDIN
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-black border-t-4 border-yellow-400 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center font-black text-black text-xl">
                  KE
                </div>
                <span className="font-black text-xl">KAVIN ELANGOVAN</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                High school innovator building AI-driven solutions for healthcare and environmental intelligence.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/kavin-elangovan-93b556324/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:ketechwiz@gmail.com"
                  className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center transition-colors"
                >
                  <Mail className="w-5 h-5 text-black" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wider mb-6 text-yellow-400">Navigation</h3>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-gray-400 hover:text-yellow-400 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wider mb-6 text-yellow-400">Projects</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://getarc.pro/landing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors font-medium flex items-center gap-2"
                >
                  Arc <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.envirocast.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors font-medium flex items-center gap-2"
                >
                  EnviroCast <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://oncoai.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors font-medium flex items-center gap-2"
                >
                  OncoAI <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://oculai.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors font-medium flex items-center gap-2"
                >
                  OculAI <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500 font-medium">© 2025 Kavin Elangovan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
