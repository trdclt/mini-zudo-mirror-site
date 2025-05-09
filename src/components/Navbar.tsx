
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#como-jogar" className="text-gray-800 hover:text-minizudo-green transition-colors">Como Jogar</a>
            <a href="#sobre-nos" className="text-gray-800 hover:text-minizudo-green transition-colors">Sobre nós</a>
            <a href="#premios" className="text-gray-800 hover:text-minizudo-green transition-colors">Prêmios</a>
            <Button className="button-gradient font-medium">Jogar agora</Button>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-800"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#como-jogar" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-minizudo-green">Como Jogar</a>
            <a href="#sobre-nos" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-minizudo-green">Sobre nós</a>
            <a href="#premios" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-minizudo-green">Prêmios</a>
            <div className="px-3 py-2">
              <Button className="button-gradient font-medium w-full">Jogar agora</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
