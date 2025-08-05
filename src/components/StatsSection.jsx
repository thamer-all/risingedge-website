import React, { useEffect, useState, useRef } from 'react';
import { Users, Clock, GraduationCap } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ students: 0, hours: 0, graduation: 0 });
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: Users,
      number: 500,
      suffix: '+',
      label: 'Young Lives Transformed Annually',
      color: 'text-primary'
    },
    {
      icon: Clock,
      number: 10000,
      suffix: '+',
      label: 'Hours of Dedicated Mentorship',
      color: 'text-accent'
    },
    {
      icon: GraduationCap,
      number: 95,
      suffix: '%',
      label: 'of Our Students Graduate High School',
      color: 'text-green-600'
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 1500; // Reduced from 2000ms
      const steps = 30; // Reduced from 60 for better performance
      const stepDuration = duration / steps;

      stats.forEach((stat, index) => {
        let currentValue = 0;
        const increment = stat.number / steps;
        
        const timer = setInterval(() => {
          currentValue += increment;
          
          setCounters(prev => ({
            ...prev,
            [index === 0 ? 'students' : index === 1 ? 'hours' : 'graduation']: Math.min(Math.floor(currentValue), stat.number)
          }));

          if (currentValue >= stat.number) {
            clearInterval(timer);
            setCounters(prev => ({
              ...prev,
              [index === 0 ? 'students' : index === 1 ? 'hours' : 'graduation']: stat.number
            }));
          }
        }, stepDuration);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="stats" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Change, Measurable Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These aren't just numbers—they represent dreams realized, barriers broken, and futures brightened.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const currentValue = index === 0 ? counters.students : index === 1 ? counters.hours : counters.graduation;
            
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover-lift transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6 ${stat.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <div className="mb-4">
                    <span className={`text-5xl md:text-6xl font-bold ${stat.color}`}>
                      {currentValue.toLocaleString()}
                    </span>
                    <span className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
                      {stat.suffix}
                    </span>
                  </div>
                  
                  <p className="text-lg font-medium text-gray-700 leading-tight">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 italic">
            "Every statistic represents a life changed, a dream pursued, and a community strengthened."
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

