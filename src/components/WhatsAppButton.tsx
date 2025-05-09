
import React from 'react';
import { WhatsApp } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5511987918168?text=Eu%20quero%20MeuMini"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 animate-pulse hover:animate-none"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <WhatsApp className="text-white w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
