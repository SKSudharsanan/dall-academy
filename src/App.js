import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Hero />
        <Features />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
