
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
    <nav className="fixed top-0 left-0 w-full bg-meumini-dark z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-meumini-orange transition-colors">INÍCIO</button>
            <button onClick={() => scrollToSection('como-funciona')} className="text-white hover:text-meumini-orange transition-colors">COMO FUNCIONA</button>
            <button onClick={() => scrollToSection('galeria')} className="text-white hover:text-meumini-orange transition-colors">GALERIA</button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-white hover:text-meumini-orange transition-colors">DEPOIMENTOS</button>
            <button onClick={() => scrollToSection('criar')} className="text-white hover:text-meumini-orange transition-colors">CRIAR MEUMINI</button>
            <Button 
              onClick={() => scrollToSection('criar')} 
              className="button-gradient font-medium animate-glow"
            >
              Criar Meu MeuMini
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-meumini-dark">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-meumini-orange">INÍCIO</button>
            <button onClick={() => scrollToSection('como-funciona')} className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-meumini-orange">COMO FUNCIONA</button>
            <button onClick={() => scrollToSection('galeria')} className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-meumini-orange">GALERIA</button>
            <button onClick={() => scrollToSection('depoimentos')} className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-meumini-orange">DEPOIMENTOS</button>
            <button onClick={() => scrollToSection('criar')} className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-meumini-orange">CRIAR MEUMINI</button>
            <div className="px-3 py-2">
              <Button 
                onClick={() => scrollToSection('criar')}
                className="button-gradient font-medium w-full"
              >
                Criar Meu MeuMini
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
