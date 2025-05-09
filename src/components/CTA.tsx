
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-minizudo-dark text-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-minizudo-green opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-minizudo-green opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para a diversão? <span className="text-minizudo-green">Comece agora!</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Junte-se a milhares de jogadores e comece a ganhar prêmios incríveis.
            Seu próximo grande prêmio está a apenas um clique de distância.
          </p>
          <Button className="button-gradient text-lg px-8 py-6 font-semibold">
            Jogar agora <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
