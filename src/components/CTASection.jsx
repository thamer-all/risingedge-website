import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Users, ArrowRight } from 'lucide-react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta" ref={sectionRef} className="py-20 bg-gradient-coral relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse-gentle"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-xl animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-xl animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
              <Heart className="h-16 w-16 text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Support Creates
            <br />
            <span className="text-yellow-300">Miracles</span>
          </h2>
        </div>

        <div className={`transition-all duration-300 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto">
            When you invest in Rising Edge, you're not just supporting programs—you're investing in the next generation of leaders, innovators, and changemakers. Every dollar, every hour of volunteer time, every act of support creates ripple effects that transform entire communities.
          </p>
        </div>

        <div className={`transition-all duration-300 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-10 py-4 text-xl hover-scale group"
              onClick={() => window.location.href = '/donate'}
            >
              <Heart className="mr-2 h-5 w-5 group-hover:text-red-500 transition-colors" />
              Donate Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold px-10 py-4 text-xl hover-scale group"
              onClick={() => window.location.href = '/volunteer'}
            >
              <Users className="mr-2 h-5 w-5" />
              Volunteer Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className={`transition-all duration-300 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">$50</div>
              <div className="text-sm">Provides school supplies for one student for a full semester</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">$250</div>
              <div className="text-sm">Sponsors one child's participation in our STEM workshop series</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">$1,000</div>
              <div className="text-sm">Funds one full year of one-on-one mentorship</div>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-300 delay-250 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-white/80 mt-8 italic">
            "The best time to plant a tree was 20 years ago. The second best time is now."
            <br />
            <span className="text-sm font-medium">- Start making a difference today</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

