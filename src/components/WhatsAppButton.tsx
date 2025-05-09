
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5511987918168?text=Eu%20quero%20MeuMini"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 animate-pulse hover:animate-none"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 175.216 175.552"
        className="w-8 h-8 text-white fill-current"
        role="img"
        aria-label="Logo do WhatsApp"
      >
        <defs>
          <linearGradient id="a" x1="85.915" y1="32.567" x2="86.535" y2="137.092" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#57d163"/>
            <stop offset="1" stopColor="#23b33a"/>
          </linearGradient>
        </defs>
        <path 
          d="M87.4 25.805c-32.916 0-59.704 26.788-59.704 59.704 0 13.02 4.182 25.092 11.284 34.897L26.441 149.59l30.322-9.816c9.344 6.126 20.439 9.735 32.442 9.735 32.916 0 59.704-26.788 59.704-59.704.195-32.916-26.788-59.899-61.509-60z" 
          fill="#fff"
        />
        <path 
          d="M87.4 153.177c-11.479 0-22.566-3.073-32.178-8.905l-22.566 7.327 7.522-21.946c-6.711-10.027-10.611-21.946-10.611-34.772 0-37.486 30.517-67.615 67.615-67.615s67.615 30.517 67.615 67.615c.195 37.096-30.127 67.296-67.397 67.296z" 
          fill="url(#a)"
        />
        <path 
          d="M126.853 105.682c-.585-.195-3.268-1.56-3.657-1.755s-.878-.293-1.17.293c-.39.585-1.365 1.755-1.755 2.145-.293.39-.683.488-1.17.195-3.073-1.56-6.516-2.78-9.199-6.321-1.365-1.365-2.34-3.073-2.145-3.95.195-.878 1.365-2.145 1.56-2.633.195-.39.098-.878-.098-1.17-.195-.39-1.755-4.146-2.34-5.636-.585-1.56-1.17-1.268-1.56-1.268h-1.365c-.488 0-1.17.195-1.755.878-.585.683-2.145 2.145-2.145 5.148s2.243 6.126 2.535 6.516c.293.39 4.434 7.327 10.954 9.979 6.516 2.633 6.516 1.755 7.717 1.658 1.17-.098 3.853-1.56 4.434-3.073.585-1.56.585-2.828.39-3.073-.195-.195-.683-.39-1.17-.488z" 
          fill="#fff"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
