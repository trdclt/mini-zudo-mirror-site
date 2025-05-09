
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Timer } from 'lucide-react';

const SpecialOffer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 38,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-meumini-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/1e1e1e/333333?text=')] opacity-10"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-meumini-orange opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-meumini-orange opacity-20 rounded-full pulse blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gray-800 rounded-xl p-8 sm:p-12 card-shadow border-2 border-meumini-orange/30 animate-pulse">
          <div className="text-center">
            <div className="inline-block bg-meumini-orange px-4 py-2 rounded-full text-white font-bold mb-4">
              🎉 Oferta por Tempo Limitado: 20% de desconto em qualquer MeuMini! 🎉
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Aproveite agora esta <span className="text-meumini-orange animate-glow">oferta exclusiva</span>
            </h2>
            <p className="text-lg text-meumini-light-gray max-w-2xl mx-auto mb-8">
              É hora de transformar suas memórias em arte! Aproveite esta oferta especial antes que acabe.
            </p>
            
            <div className="flex justify-center mb-8">
              <div className="bg-gray-900 p-4 rounded-xl border border-meumini-orange shadow-lg">
                <div className="flex items-center justify-center gap-1 md:gap-2">
                  <Timer className="text-meumini-orange animate-pulse mr-2 hidden sm:block" size={24} />
                  <div className="bg-gray-800 px-3 py-2 rounded-lg">
                    <span className="countdown-gradient text-2xl md:text-4xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                  </div>
                  <span className="text-2xl md:text-4xl font-bold text-meumini-orange">:</span>
                  <div className="bg-gray-800 px-3 py-2 rounded-lg">
                    <span className="countdown-gradient text-2xl md:text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  </div>
                  <span className="text-2xl md:text-4xl font-bold text-meumini-orange">:</span>
                  <div className="bg-gray-800 px-3 py-2 rounded-lg">
                    <span className="countdown-gradient text-2xl md:text-4xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  </div>
                </div>
                <div className="flex justify-center mt-2 text-xs text-gray-400">
                  <span className="px-3">HORAS</span>
                  <span className="px-3">MIN</span>
                  <span className="px-3">SEG</span>
                </div>
              </div>
            </div>
            
            <a 
              href="https://linktr.ee/meu.mini"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="button-gradient text-lg px-8 py-6 font-semibold animate-glow">
                Aproveitar Agora
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
