import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import {useState} from 'react';

function App() {

  return (
    <main className="text-gray-400 bg-gray-800 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
