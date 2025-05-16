
import React from 'react';
import Logo from './Logo';
import { Instagram, MessageSquare, Link } from 'lucide-react';

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
                href="https://linktr.ee/meu.mini" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-meumini-orange transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
                <MessageSquare className="h-6 w-6" />
              </a>
              <a 
                href="https://linktr.ee/meu.mini" 
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
          
          {/* Informações para verificação do Meta Ads */}
          <div className="text-meumini-light-gray text-xs mt-2 md:mt-0 opacity-70">
            <p>CNPJ: 55784784000188</p>
            <p>MEU MINI MERCADO LTDA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
