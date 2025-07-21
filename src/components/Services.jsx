import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        We offer a comprehensive range of services designed to support and empower our community members. Our programs are tailored to meet diverse needs and foster personal and professional growth.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education Programs</h3>
          <p className="text-gray-700 leading-relaxed">
            Comprehensive educational initiatives including tutoring, workshops, and skill development programs to enhance learning opportunities for all ages.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Athletic Programs</h3>
          <p className="text-gray-700 leading-relaxed">
            Sports and fitness programs that promote physical health, teamwork, and leadership skills through various athletic activities and competitions.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mentorship</h3>
          <p className="text-gray-700 leading-relaxed">
            One-on-one and group mentorship programs connecting experienced professionals with individuals seeking guidance and support.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Community Outreach</h3>
          <p className="text-gray-700 leading-relaxed">
            Initiatives focused on addressing community needs through volunteer work, charitable activities, and social impact projects.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Career Development</h3>
          <p className="text-gray-700 leading-relaxed">
            Professional development services including job placement assistance, resume building, and interview preparation.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Support Services</h3>
          <p className="text-gray-700 leading-relaxed">
            Comprehensive support services including counseling, resource referrals, and emergency assistance for community members in need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

