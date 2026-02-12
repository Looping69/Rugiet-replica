import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import IntakeForm from './components/IntakeForm';
import './App.css';

const LandingPage = () => (
  <>
    <Banner />
    <Hero />
    <Benefits />
    <Testimonials />
    <CTA />
    <FAQ />
  </>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/intake" element={<IntakeForm />} />
        </Routes>

        <footer style={{
          backgroundColor: '#f1ece6',
          padding: '60px 0',
          textAlign: 'center',
          borderTop: '1px solid rgba(0,0,0,0.05)'
        }}>
          <div className="container">
            <img src="https://www.rugiet.com/IMGS/favicons/R.png" alt="Rugiet" style={{ width: '30px', opacity: 0.5, marginBottom: '24px' }} />
            <nav style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '32px', fontSize: '14px', fontWeight: '500', color: '#666', flexWrap: 'wrap' }}>
              <a href="#">visit rugiet.com</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Privacy Choices</a>
            </nav>
            <p style={{ fontSize: '12px', color: '#999' }}>
              © 2025 Rugiet Health. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
