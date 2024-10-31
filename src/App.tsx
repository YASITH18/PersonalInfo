import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code, Network, Server, Shield, GraduationCap, Award, ExternalLink, Facebook, Instagram, Twitter } from 'lucide-react';
import NavBar from './components/NavBar';
import Section from './components/Section';
import CertificationCard from './components/CertificationCard';
import SkillCard from './components/SkillCard';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-950 to-black text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
        <div className="hero-background" />
        <div className="max-w-4xl mx-auto text-center stagger-animation">
          <div className={`transform ${isLoaded ? 'animate-scale-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Yasith Piyumantha
            </h1>
          </div>
          <div>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              IT Infrastructure Professional | Network Specialist
            </p>
          </div>
          <div>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              NOC Operations | Network Security | Incident Management
            </p>
          </div>
          <div>
            <div className="flex gap-6 justify-center mb-12">
              <a href="https://github.com/yasithpiyarathne" 
                 className="hover:text-blue-400 transition-colors transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/yasith-piyumantha-8a6228180" 
                 className="hover:text-blue-400 transition-colors transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="mailto:yasithpiyumantha@gmail.com" 
                 className="hover:text-blue-400 transition-colors transform hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div>
            <div className="flex gap-4 justify-center">
              <a href="/uploads/1/5/0/5/150556284/yasith-piyumantha-resume.pdf" 
                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                Download CV
              </a>
              <a href="#contact" 
                 className="border border-blue-600 hover:bg-blue-600/10 text-white px-6 py-2 rounded-full transition-all duration-300 hover:transform hover:scale-105">
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce opacity-75 hover:opacity-100 cursor-pointer" 
                    size={32} 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} />
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* About Section */}
      <Section id="about" icon={<Server />} title="About Me">
        {/* Content remains the same */}
      </Section>

      {/* Expertise Section */}
      <Section id="expertise" icon={<Network />} title="Core Expertise">
        {/* Content remains the same */}
      </Section>

      {/* Certifications Section */}
      <Section id="certifications" icon={<Award />} title="Certifications & Achievements">
        {/* Content remains the same */}
      </Section>

      {/* Education Section */}
      <Section id="education" icon={<GraduationCap />} title="Education">
        {/* Content remains the same */}
      </Section>

      {/* Contact Section */}
      <Section id="contact" icon={<Mail />} title="Get in Touch">
        {/* Content remains the same */}
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900/30 backdrop-blur-sm mt-20 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Yasith Piyumantha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;