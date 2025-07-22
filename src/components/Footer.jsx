import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Blog', href: '/blog' }
  ];

  const programs = [
    { name: 'Education Programs', href: '/education' },
    { name: 'Athletic Programs', href: '/athletics' },
    { name: 'Mentorship Programs', href: '/mentorship' },
    { name: 'Donate Now', href: '/donate' },
    { name: 'Impact Calculator', href: '/calculator' }
  ];

  const aboutPages = [
    { name: 'Our Mission', href: '/mission' },
    { name: 'Our Team', href: '/team' },
    { name: 'Our History', href: '/history' },
    { name: 'Impact Reports', href: '/impact' },
    { name: 'Success Stories', href: '/stories' }
  ];

  const getInvolved = [
    { name: 'Volunteer With Us', href: '/volunteer' },
    { name: 'Corporate Partners', href: '/partner' },
    { name: 'Events Calendar', href: '/events' },
    { name: 'Annual Reports', href: '/reports' },
    { name: 'Ways to Help', href: '/get-involved' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/risingedgecommunity', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/risingedgecom', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/risingedgecommunity', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/risingedge-community', label: 'LinkedIn' }
  ];

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (window.toast) {
        window.toast.showError('Please enter a valid email address.');
      }
      return;
    }
    
    try {
      // Track newsletter signup
      if (typeof gtag !== 'undefined') {
        gtag('event', 'newsletter_signup', {
          event_category: 'engagement'
        });
      }
      
      // TODO: Replace with actual API endpoint
      // await fetch('/api/newsletter/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      if (window.toast) {
        window.toast.showSuccess('Thank you for subscribing to our newsletter!');
      }
      e.target.reset();
    } catch (error) {
      if (window.toast) {
        window.toast.showError('Signup failed. Please try again.');
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Signup Section */}
      <div className="bg-primary py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Connected with Our Mission
            </h3>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get updates on our programs, success stories, and ways to get involved in transforming young lives.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white min-w-0"
              />
              <Button 
                type="submit" 
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-3 group whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Organization Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-xl drop-shadow-md">RE</span>
                </div>
                <span className="text-xl font-bold leading-tight">Rising Edge Community</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
                Empowering underserved youth in New York through comprehensive educational, athletic, and mentorship programs that cultivate leadership and create pathways to success.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start text-gray-300 text-sm">
                  <MapPin className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                  <span>123 Community Way, New York, NY 10001</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <span>(212) 555-0100</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <span>info@risingedge.org</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex flex-wrap gap-3 mt-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group text-sm"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">Programs</h4>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <Link
                      to={program.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group text-sm"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{program.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Pages */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">About Us</h4>
              <ul className="space-y-3">
                {aboutPages.map((page, index) => (
                  <li key={index}>
                    <Link
                      to={page.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group text-sm"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{page.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">Get Involved</h4>
              <ul className="space-y-3 mb-8">
                {getInvolved.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group text-sm"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-8">
                <Link to="/donate">
                  <Button className="w-full bg-gradient-coral hover:scale-105 transition-transform duration-200 text-white font-semibold">
                    <Heart className="mr-2 h-4 w-4 flex-shrink-0" />
                    Donate Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm text-center lg:text-left">
              © {currentYear} Rising Edge Community. All rights reserved. | 501(c)(3) Tax-Exempt Organization
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-primary transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-4 pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> for the community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
