import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ProgramsSection from './components/ProgramsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Donate from './components/Donate';
import GetInvolved from './components/GetInvolved';

// About subpages
import Mission from './components/Mission';
import Team from './components/Team';
import History from './components/History';

// Programs subpages
import Education from './components/Education';
import Athletics from './components/Athletics';
import Mentorship from './components/Mentorship';

// Impact subpages
import Reports from './components/Reports';
import Stories from './components/Stories';
import Calculator from './components/Calculator';

// Get Involved subpages
import Volunteer from './components/Volunteer';
import Partner from './components/Partner';
import Events from './components/Events';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Added pt-20 to create space between navbar and content */}
        <main className="pt-20">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <StatsSection />
                <ProgramsSection />
                <TestimonialsSection />
                <CTASection />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            
            {/* About subpages */}
            <Route path="/mission" element={<Mission />} />
            <Route path="/team" element={<Team />} />
            <Route path="/history" element={<History />} />
            
            {/* Programs subpages */}
            <Route path="/education" element={<Education />} />
            <Route path="/athletics" element={<Athletics />} />
            <Route path="/mentorship" element={<Mentorship />} />
            
            {/* Impact subpages */}
            <Route path="/reports" element={<Reports />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/calculator" element={<Calculator />} />
            
            {/* Get Involved subpages */}
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

