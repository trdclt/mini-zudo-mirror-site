
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const SpecialOffer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 6,
    minutes: 30,
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
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gray-800 rounded-xl p-8 sm:p-12 card-shadow">
          <div className="text-center">
            <div className="inline-block bg-meumini-orange/20 px-4 py-1 rounded-full text-meumini-orange mb-4">
              Oferta por tempo limitado
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              20% de desconto em qualquer <span className="text-meumini-orange">MeuMini</span>
            </h2>
            <p className="text-lg text-meumini-light-gray max-w-2xl mx-auto mb-8">
              É hora de transformar suas memórias em arte! Aproveite esta oferta especial antes que acabe.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-gray-900 px-6 py-4 rounded-lg">
                <span className="countdown-gradient text-4xl font-bold animate-glow">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="block text-sm text-meumini-light-gray mt-1">Dias</span>
              </div>
              <div className="bg-gray-900 px-6 py-4 rounded-lg">
                <span className="countdown-gradient text-4xl font-bold animate-glow">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="block text-sm text-meumini-light-gray mt-1">Horas</span>
              </div>
              <div className="bg-gray-900 px-6 py-4 rounded-lg">
                <span className="countdown-gradient text-4xl font-bold animate-glow">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="block text-sm text-meumini-light-gray mt-1">Minutos</span>
              </div>
              <div className="bg-gray-900 px-6 py-4 rounded-lg">
                <span className="countdown-gradient text-4xl font-bold animate-glow">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="block text-sm text-meumini-light-gray mt-1">Segundos</span>
              </div>
            </div>
            
            <Button className="button-gradient text-lg px-8 py-6 font-semibold animate-glow">
              Aproveitar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
