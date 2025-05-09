
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-meumini-dark z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-meumini-orange transition-colors">Home</a>
            <a href="#criar" className="text-white hover:text-meumini-orange transition-colors">Criar Meu MeuMini</a>
            <a href="#galeria" className="text-white hover:text-meumini-orange transition-colors">Galeria</a>
            <a href="#depoimentos" className="text-white hover:text-meumini-orange transition-colors">Depoimentos</a>
            <a href="#contato" className="text-white hover:text-meumini-orange transition-colors">Contato</a>
            <Button className="button-gradient font-medium animate-glow">Criar Meu MeuMini</Button>
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
            <a href="#" className="block px-3 py-2 text-base font-medium text-white hover:text-meumini-orange">Home</a>
            <a href="#criar" className="block px-3 py-2 text-base font-medium text-white hover:text-meumini-orange">Criar Meu MeuMini</a>
            <a href="#galeria" className="block px-3 py-2 text-base font-medium text-white hover:text-meumini-orange">Galeria</a>
            <a href="#depoimentos" className="block px-3 py-2 text-base font-medium text-white hover:text-meumini-orange">Depoimentos</a>
            <a href="#contato" className="block px-3 py-2 text-base font-medium text-white hover:text-meumini-orange">Contato</a>
            <div className="px-3 py-2">
              <Button className="button-gradient font-medium w-full">Criar Meu MeuMini</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
