
import React from 'react';
import Logo from './Logo';
import { Instagram, Link } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800" id="contato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-meumini-light-gray">
              Transformando memórias em miniaturas únicas e personalizadas.
              Mais de 5000 clientes satisfeitos em todo o Brasil.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://www.instagram.com/meumini.com.br/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-meumini-orange transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/5511987918168" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-meumini-orange transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 175.216 175.552"
                  className="h-6 w-6"
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
              </a>
              <a 
                href="https://linktr.ee/meumini" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-meumini-orange transition-colors"
              >
                <span className="sr-only">Linktree</span>
                <Link className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Links Úteis</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#como-funciona" className="text-meumini-light-gray hover:text-meumini-orange transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#galeria" className="text-meumini-light-gray hover:text-meumini-orange transition-colors">Galeria</a>
              </li>
              <li>
                <a href="#depoimentos" className="text-meumini-light-gray hover:text-meumini-orange transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contato</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-meumini-light-gray">
                Email: contato@meumini.com.br
              </li>
              <li className="text-meumini-light-gray">
                WhatsApp: (11) 98791-8168
              </li>
              <li className="text-meumini-light-gray">
                Horário: Segunda a domingo, 07h às 20h
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-meumini-light-gray text-sm">
            &copy; 2021 MeuMini. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
