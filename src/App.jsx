import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/layout/ErrorBoundary';
import LoadingSpinner from './components/layout/LoadingSpinner';
import ScrollToTop from './components/layout/ScrollToTop';

// Core Layout Components (not lazy loaded for immediate availability)
import Header from './components/Header';
import Footer from './components/Footer';

// Home Page Components (not lazy loaded for performance)
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ProgramsSection from './components/ProgramsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';

// Lazy Load All Other Components
const About = React.lazy(() => import('./components/About'));
const Services = React.lazy(() => import('./components/Services'));
const Impact = React.lazy(() => import('./components/Impact'));
const Contact = React.lazy(() => import('./components/Contact'));
const Blog = React.lazy(() => import('./components/Blog'));
const Donate = React.lazy(() => import('./components/Donate'));
const GetInvolved = React.lazy(() => import('./components/GetInvolved'));

// About subpages
const Mission = React.lazy(() => import('./components/Mission'));
const Team = React.lazy(() => import('./components/Team'));
const History = React.lazy(() => import('./components/History'));

// Programs subpages
const Education = React.lazy(() => import('./components/Education'));
const Athletics = React.lazy(() => import('./components/Athletics'));
const Mentorship = React.lazy(() => import('./components/Mentorship'));

// Impact subpages
const Reports = React.lazy(() => import('./components/Reports'));
const Stories = React.lazy(() => import('./components/Stories'));
const Calculator = React.lazy(() => import('./components/Calculator'));

// Get Involved subpages
const Volunteer = React.lazy(() => import('./components/Volunteer'));
const Partner = React.lazy(() => import('./components/Partner'));
const Events = React.lazy(() => import('./components/Events'));

// Page transition animations
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.2
};

// Enhanced page wrapper with animations
const PageWrapper = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header />
          
          <main className="pt-20">
            <AnimatePresence mode="wait">
              <Suspense fallback={
                <div className="min-h-[50vh] flex items-center justify-center">
                  <LoadingSpinner size="md" text="Loading..." />
                </div>
              }>
                <Routes>
                  {/* Home Page - No wrapper needed for immediate components */}
                  <Route path="/" element={
                    <motion.div
                      initial="initial"
                      animate="in"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Hero />
                      <StatsSection />
                      <ProgramsSection />
                      <TestimonialsSection />
                      <CTASection />
                    </motion.div>
                  } />
                  
                  {/* Main Pages */}
                  <Route path="/about" element={
                    <PageWrapper><About /></PageWrapper>
                  } />
                  <Route path="/services" element={
                    <PageWrapper><Services /></PageWrapper>
                  } />
                  <Route path="/impact" element={
                    <PageWrapper><Impact /></PageWrapper>
                  } />
                  <Route path="/contact" element={
                    <PageWrapper><Contact /></PageWrapper>
                  } />
                  <Route path="/blog" element={
                    <PageWrapper><Blog /></PageWrapper>
                  } />
                  <Route path="/donate" element={
                    <PageWrapper><Donate /></PageWrapper>
                  } />
                  <Route path="/get-involved" element={
                    <PageWrapper><GetInvolved /></PageWrapper>
                  } />
                  
                  {/* About subpages */}
                  <Route path="/mission" element={
                    <PageWrapper><Mission /></PageWrapper>
                  } />
                  <Route path="/team" element={
                    <PageWrapper><Team /></PageWrapper>
                  } />
                  <Route path="/history" element={
                    <PageWrapper><History /></PageWrapper>
                  } />
                  
                  {/* Programs subpages */}
                  <Route path="/education" element={
                    <PageWrapper><Education /></PageWrapper>
                  } />
                  <Route path="/athletics" element={
                    <PageWrapper><Athletics /></PageWrapper>
                  } />
                  <Route path="/mentorship" element={
                    <PageWrapper><Mentorship /></PageWrapper>
                  } />
                  
                  {/* Impact subpages */}
                  <Route path="/reports" element={
                    <PageWrapper><Reports /></PageWrapper>
                  } />
                  <Route path="/stories" element={
                    <PageWrapper><Stories /></PageWrapper>
                  } />
                  <Route path="/calculator" element={
                    <PageWrapper><Calculator /></PageWrapper>
                  } />
                  
                  {/* Get Involved subpages */}
                  <Route path="/volunteer" element={
                    <PageWrapper><Volunteer /></PageWrapper>
                  } />
                  <Route path="/partner" element={
                    <PageWrapper><Partner /></PageWrapper>
                  } />
                  <Route path="/events" element={
                    <PageWrapper><Events /></PageWrapper>
                  } />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

