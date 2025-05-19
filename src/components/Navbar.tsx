
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-orange-900 to-amber-800 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-amber-300 transition-colors">INÍCIO</button>
            <button onClick={() => scrollToSection('como-funciona')} className="text-white hover:text-amber-300 transition-colors">COMO FUNCIONA</button>
            <button onClick={() => scrollToSection('galeria')} className="text-white hover:text-amber-300 transition-colors">GALERIA</button>
            <a 
              href="https://linktr.ee/meu.mini"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-amber-300 transition-colors"
            >
              WHATSAPP
            </a>
            <button onClick={() => scrollToSection('faq')} className="text-white hover:text-amber-300 transition-colors">FAQ</button>
            <Button 
              onClick={() => scrollToSection('criar')} 
              className="button-gradient font-medium animate-glow"
            >
              Criar MeuMini
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-orange-900 to-amber-800">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-amber-300">INÍCIO</button>
            <button onClick={() => scrollToSection('como-funciona')} className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-amber-300">COMO FUNCIONA</button>
            <button onClick={() => scrollToSection('galeria')} className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-amber-300">GALERIA</button>
            <a 
              href="https://linktr.ee/meu.mini" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-amber-300"
            >
              WHATSAPP
            </a>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-amber-300">FAQ</button>
            <div className="px-3 py-2">
              <Button 
                onClick={() => scrollToSection('criar')}
                className="button-gradient font-medium w-full"
              >
                Criar MeuMini
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
