import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Heart, 
  Calendar, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const GetInvolved = () => {
  const volunteerOpportunities = [
    {
      title: 'Tutoring & Mentorship',
      description: 'Help students with homework and provide one-on-one guidance',
      commitment: '2-4 hours/week',
      icon: Users,
      color: 'bg-gradient-teal'
    },
    {
      title: 'Athletic Coaching',
      description: 'Coach youth sports teams and lead fitness activities',
      commitment: '3-5 hours/week',
      icon: Heart,
      color: 'bg-gradient-coral'
    },
    {
      title: 'Event Support',
      description: 'Assist with community events, fundraisers, and workshops',
      commitment: 'Flexible',
      icon: Calendar,
      color: 'bg-gradient-purple'
    },
    {
      title: 'Administrative Support',
      description: 'Help with office tasks, data entry, and program coordination',
      commitment: '2-3 hours/week',
      icon: CheckCircle,
      color: 'bg-gradient-blue'
    }
  ];

  const impactStats = [
    { number: '200+', label: 'Active Volunteers' },
    { number: '5,000+', label: 'Volunteer Hours Annually' },
    { number: '98%', label: 'Volunteer Satisfaction Rate' }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-teal rounded-full flex items-center justify-center">
            <Users className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Involved</h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Join our community of dedicated volunteers and make a lasting impact on young lives. 
          Whether you have a few hours a week or want to get deeply involved, there's a place for you here.
        </p>
      </div>

      {/* Impact Stats */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {impactStats.map((stat, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
            <div className="text-gray-700">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Volunteer Opportunities */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Volunteer Opportunities
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {volunteerOpportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className={`w-12 h-12 ${opportunity.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {opportunity.title}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {opportunity.description}
                    </p>
                    <div className="text-sm text-primary font-medium">
                      Time Commitment: {opportunity.commitment}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Volunteer Application Form */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Ready to Volunteer?
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2">
                Areas of Interest *
              </label>
              <select
                id="interests"
                name="interests"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select an area</option>
                <option value="tutoring">Tutoring & Mentorship</option>
                <option value="coaching">Athletic Coaching</option>
                <option value="events">Event Support</option>
                <option value="admin">Administrative Support</option>
                <option value="multiple">Multiple Areas</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                Availability
              </label>
              <textarea
                id="availability"
                name="availability"
                rows="3"
                placeholder="Please describe your availability (days, times, frequency)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Relevant Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                rows="3"
                placeholder="Tell us about any relevant experience or skills you'd like to share"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>
            </div>
            
            <div className="text-center">
              <Button
                type="submit"
                className="bg-gradient-teal hover:scale-105 transition-transform duration-200 text-white font-semibold px-8 py-3"
              >
                Submit Application
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions About Volunteering?
          </h2>
          <p className="text-gray-700">
            Our volunteer coordinator is here to help you find the perfect opportunity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gradient-teal rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-700">(212) 555-0100</p>
            <p className="text-sm text-gray-500">Mon-Fri, 9am-5pm</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gradient-coral rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-700">volunteer@risingedge.org</p>
            <p className="text-sm text-gray-500">We respond within 24 hours</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gradient-purple rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-700">123 Community Way</p>
            <p className="text-gray-700">New York, NY 10001</p>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-teal rounded-lg p-8 text-white">
          <div className="flex justify-center mb-4">
            <Star className="w-8 h-8 text-yellow-300" />
          </div>
          <blockquote className="text-xl italic mb-4">
            "Volunteering with Rising Edge has been one of the most rewarding experiences of my life. 
            Seeing the impact we make on these young people's lives is incredible."
          </blockquote>
          <cite className="font-semibold">- Sarah Johnson, Volunteer Mentor</cite>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;

