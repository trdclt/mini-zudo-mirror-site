
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-meumini-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/1e1e1e/333333?text=')] opacity-10"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-meumini-orange opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-meumini-orange opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para ter seu próprio <span className="text-meumini-orange animate-glow">MeuMini</span>?
        </h2>
        <p className="text-lg text-meumini-light-gray max-w-2xl mx-auto mb-10">
          Transforme suas memórias em arte. Crie uma miniatura personalizada única que conta sua história.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://wa.me/5511987918168?text=Eu%20quero%20MeuMini" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              className="button-gradient text-lg px-8 py-6 font-semibold animate-glow"
            >
              Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <Button 
            onClick={() => scrollToSection('galeria')} 
            variant="outline"
            className="border-2 border-meumini-orange text-meumini-orange hover:bg-meumini-orange hover:text-white text-lg px-8 py-6 font-semibold"
          >
            Ver Galeria
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
