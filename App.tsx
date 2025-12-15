import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Contact from './components/Contact';
import StickyCall from './components/StickyCall';

function App() {
  return (
    <main className="min-h-screen relative bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Contact />
      <StickyCall />
    </main>
  );
}

export default App;