import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Objective from './components/Objective';
import Procedure from './components/Procedure';
import Validation from './components/Validation';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch(activeSection) {
      case 'about':
        return <About />;
      case 'objective':
        return <Objective />;
      case 'procedure':
        return <Procedure />;
      case 'validation':
        return <Validation />;
      default:
        return (
          <>
            <Hero />
            <About />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;