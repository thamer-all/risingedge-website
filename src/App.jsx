import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SkipLink from './components/SkipLink';
import ErrorBoundary from './components/ErrorBoundary';
import ToastContainer from './components/ToastContainer';
import useToast from './hooks/useToast';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Blog from './components/Blog';
import GetInvolved from './components/GetInvolved';

// Light components - load normally
import Mission from './components/Mission';
import Team from './components/Team';
import Impact from './components/Impact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Accessibility from './components/Accessibility';
import NotFound from './components/NotFound';

// Heavy components - lazy load for performance
const History = React.lazy(() => import('./components/History'));
const Donate = React.lazy(() => import('./components/Donate'));
const Education = React.lazy(() => import('./components/Education'));
const Athletics = React.lazy(() => import('./components/Athletics'));
const Mentorship = React.lazy(() => import('./components/Mentorship'));
const Reports = React.lazy(() => import('./components/Reports'));
const Stories = React.lazy(() => import('./components/Stories'));
const Calculator = React.lazy(() => import('./components/Calculator'));
const Volunteer = React.lazy(() => import('./components/Volunteer'));
const Partner = React.lazy(() => import('././components/Partner'));
const Events = React.lazy(() => import('./components/Events'));

// Enhanced Loading component with better UX
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full mx-4">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-6">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading...</h2>
        <p className="text-gray-600 text-center leading-relaxed">
          Please wait while we prepare an amazing experience for you
        </p>
        <div className="mt-6 w-full bg-gray-200 rounded-full h-1">
          <div className="bg-primary h-1 rounded-full animate-pulse" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  </div>
);

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const toast = useToast();
  
  // Provide toast context to child components via window global
  React.useEffect(() => {
    window.toast = toast;
    return () => {
      delete window.toast;
    };
  }, [toast]);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <ErrorBoundary>
          <div className="App">
            <SkipLink />
            <Header />
            <main id="main-content" className="pt-20">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/get-involved" element={<GetInvolved />} />
                  
                  {/* About subpages - Light components */}
                  <Route path="/mission" element={<Mission />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/history" element={<History />} />
                  
                  {/* Impact and Legal Pages */}
                  <Route path="/impact" element={<Impact />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<TermsOfService />} />
                  <Route path="/accessibility" element={<Accessibility />} />
                  
                  {/* Heavy components - Lazy loaded */}
                  <Route path="/donate" element={<Donate />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/athletics" element={<Athletics />} />
                  <Route path="/mentorship" element={<Mentorship />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/stories" element={<Stories />} />
                  <Route path="/calculator" element={<Calculator />} />
                  <Route path="/volunteer" element={<Volunteer />} />
                  <Route path="/partner" element={<Partner />} />
                  <Route path="/events" element={<Events />} />
                  
                  {/* 404 Error Page */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
          <ToastContainer toasts={toast.toasts} removeToast={toast.removeToast} />
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;

