import React from 'react';
import SEO from './SEO';
import Hero from './Hero';
import StatsSection from './StatsSection';
import ProgramsSection from './ProgramsSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';

const HomePage = () => {
  return (
    <>
      <SEO 
        title="Rising Edge Community - Empowering Youth Through Education"
        description="Transform young lives through comprehensive education, athletics, and mentorship programs. Join Rising Edge Community in building stronger futures for underserved youth in New York."
        keywords="youth programs, education, athletics, mentorship, nonprofit, community, New York, empowerment"
        url="https://risingedge.org"
        type="website"
      />
      <Hero />
      <StatsSection />
      <ProgramsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default HomePage; 