import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import SampleCards from './components/SampleCards';
import Features from './components/Features';
import TrendingChallenges from './components/TrendingChallenges';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PalmReader from './components/PalmReader';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Routes>
          <Route path="/reader" element={<PalmReader />} />
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <HowItWorks />
              <SampleCards />
              <Features />
              <TrendingChallenges />
              <Testimonials />
              <CTA />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;