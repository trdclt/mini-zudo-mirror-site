
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
            <a 
              href="https://wa.me/5511987918168?text=Eu%20quero%20MeuMini"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-meumini-orange transition-colors flex items-center space-x-1"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 175.216 175.552"
                className="h-5 w-5"
                role="img"
                aria-label="Logo do WhatsApp"
              >
                <path 
                  d="M87.4 25.805c-32.916 0-59.704 26.788-59.704 59.704 0 13.02 4.182 25.092 11.284 34.897L26.441 149.59l30.322-9.816c9.344 6.126 20.439 9.735 32.442 9.735 32.916 0 59.704-26.788 59.704-59.704.195-32.916-26.788-59.899-61.509-60z" 
                  fill="currentColor"
                />
                <path 
                  d="M87.4 153.177c-11.479 0-22.566-3.073-32.178-8.905l-22.566 7.327 7.522-21.946c-6.711-10.027-10.611-21.946-10.611-34.772 0-37.486 30.517-67.615 67.615-67.615s67.615 30.517 67.615 67.615c.195 37.096-30.127 67.296-67.397 67.296z" 
                  fill="currentColor"
                />
                <path 
                  d="M126.853 105.682c-.585-.195-3.268-1.56-3.657-1.755s-.878-.293-1.17.293c-.39.585-1.365 1.755-1.755 2.145-.293.39-.683.488-1.17.195-3.073-1.56-6.516-2.78-9.199-6.321-1.365-1.365-2.34-3.073-2.145-3.95.195-.878 1.365-2.145 1.56-2.633.195-.39.098-.878-.098-1.17-.195-.39-1.755-4.146-2.34-5.636-.585-1.56-1.17-1.268-1.56-1.268h-1.365c-.488 0-1.17.195-1.755.878-.585.683-2.145 2.145-2.145 5.148s2.243 6.126 2.535 6.516c.293.39 4.434 7.327 10.954 9.979 6.516 2.633 6.516 1.755 7.717 1.658 1.17-.098 3.853-1.56 4.434-3.073.585-1.56.585-2.828.39-3.073-.195-.195-.683-.39-1.17-.488z" 
                  fill="white"
                />
              </svg>
              <span>WHATSAPP</span>
            </a>
            <button onClick={() => scrollToSection('depoimentos')} className="text-white hover:text-meumini-orange transition-colors">DEPOIMENTOS</button>
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-meumini-dark">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-meumini-orange">INÍCIO</button>
            <button onClick={() => scrollToSection('como-funciona')} className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-meumini-orange">COMO FUNCIONA</button>
            <button onClick={() => scrollToSection('galeria')} className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-meumini-orange">GALERIA</button>
            <a 
              href="https://wa.me/5511987918168?text=Eu%20quero%20MeuMini" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center w-full text-left px-3 py-2 text-base font-medium text-white hover:text-meumini-orange"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 175.216 175.552"
                className="h-5 w-5 mr-2"
                role="img"
                aria-label="Logo do WhatsApp"
              >
                <path 
                  d="M87.4 25.805c-32.916 0-59.704 26.788-59.704 59.704 0 13.02 4.182 25.092 11.284 34.897L26.441 149.59l30.322-9.816c9.344 6.126 20.439 9.735 32.442 9.735 32.916 0 59.704-26.788 59.704-59.704.195-32.916-26.788-59.899-61.509-60z" 
                  fill="currentColor"
                />
                <path 
                  d="M87.4 153.177c-11.479 0-22.566-3.073-32.178-8.905l-22.566 7.327 7.522-21.946c-6.711-10.027-10.611-21.946-10.611-34.772 0-37.486 30.517-67.615 67.615-67.615s67.615 30.517 67.615 67.615c.195 37.096-30.127 67.296-67.397 67.296z" 
                  fill="currentColor"
                />
                <path 
                  d="M126.853 105.682c-.585-.195-3.268-1.56-3.657-1.755s-.878-.293-1.17.293c-.39.585-1.365 1.755-1.755 2.145-.293.39-.683.488-1.17.195-3.073-1.56-6.516-2.78-9.199-6.321-1.365-1.365-2.34-3.073-2.145-3.95.195-.878 1.365-2.145 1.56-2.633.195-.39.098-.878-.098-1.17-.195-.39-1.755-4.146-2.34-5.636-.585-1.56-1.17-1.268-1.56-1.268h-1.365c-.488 0-1.17.195-1.755.878-.585.683-2.145 2.145-2.145 5.148s2.243 6.126 2.535 6.516c.293.39 4.434 7.327 10.954 9.979 6.516 2.633 6.516 1.755 7.717 1.658 1.17-.098 3.853-1.56 4.434-3.073.585-1.56.585-2.828.39-3.073-.195-.195-.683-.39-1.17-.488z" 
                  fill="white"
                />
              </svg>
              WHATSAPP
            </a>
            <button onClick={() => scrollToSection('depoimentos')} className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-meumini-orange">DEPOIMENTOS</button>
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
