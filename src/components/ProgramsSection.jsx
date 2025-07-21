import React, { useEffect, useState, useRef } from 'react';
import { BookOpen, Trophy, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import stemImage from '../assets/stem-coding.jpg';
import soccerImage from '../assets/soccer-kids.jpg';
import mentorshipImage from '../assets/mentorship.jpg';

const ProgramsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const programs = [
    {
      icon: BookOpen,
      title: 'Education',
      subtitle: 'Building Tomorrow\'s Leaders',
      description: 'From coding bootcamps to literacy workshops, we make learning exciting and accessible. Our STEM programs don\'t just teach skills—they ignite curiosity and open doors to careers students never imagined possible.',
      image: stemImage,
      features: ['STEM Workshops', 'Coding Bootcamps', 'Literacy Programs', 'Homework Support'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Trophy,
      title: 'Athletics',
      subtitle: 'Strength Beyond the Field',
      description: 'Through soccer, basketball, and team sports, we build more than physical fitness. We develop resilience, teamwork, and the confidence to tackle any challenge life presents.',
      image: soccerImage,
      features: ['Soccer League', 'Basketball Clinics', 'Track & Field', 'Team Building'],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Heart,
      title: 'Mentorship',
      subtitle: 'Guidance That Changes Everything',
      description: 'Every student gets a dedicated mentor—a champion, guide, and friend. These relationships don\'t just last a program cycle; they create lifelong connections that shape futures.',
      image: mentorshipImage,
      features: ['One-on-One Mentoring', 'Career Guidance', 'Life Skills', 'College Prep'],
      color: 'from-pink-500 to-red-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="programs" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Three Pillars of Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach addresses the whole child—mind, body, and spirit. 
            Each program builds on the others, creating a supportive ecosystem for growth.
          </p>
        </div>

        <div className="space-y-20">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Image */}
                <div className="flex-1 relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${program.color} text-white`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{program.title}</h3>
                      <p className="text-xl text-primary font-semibold">{program.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="group border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join our programs and be part of a community that's transforming lives every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold">
                Volunteer With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

