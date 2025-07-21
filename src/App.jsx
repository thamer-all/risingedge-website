import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Blog from './components/Blog';
import GetInvolved from './components/GetInvolved';

// Light components - load normally
import Mission from './components/Mission';
import Team from './components/Team';
import History from './components/History';

// Heavy components - lazy load for performance
const Donate = React.lazy(() => import('./components/Donate'));
const Education = React.lazy(() => import('./components/Education'));
const Athletics = React.lazy(() => import('./components/Athletics'));
const Mentorship = React.lazy(() => import('./components/Mentorship'));
const Reports = React.lazy(() => import('./components/Reports'));
const Stories = React.lazy(() => import('./components/Stories'));
const Calculator = React.lazy(() => import('./components/Calculator'));
const Volunteer = React.lazy(() => import('./components/Volunteer'));
const Partner = React.lazy(() => import('./components/Partner'));
const Events = React.lazy(() => import('./components/Events'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
    <div className="ml-4">
      <h2 className="text-xl font-semibold text-gray-900">Loading...</h2>
      <p className="text-gray-600">Please wait while we load the page</p>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
          {/* Added pt-20 to create space between navbar and content */}
          <main className="pt-20">
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
            </Routes>
          </Suspense>
        </main>
        <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

