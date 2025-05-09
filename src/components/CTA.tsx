
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-meumini-dark text-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-meumini-orange opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-meumini-orange opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para criar o seu <span className="text-meumini-orange">MeuMini?</span>
          </h2>
          <p className="text-lg md:text-xl text-meumini-light-gray max-w-3xl mx-auto mb-8">
            Eternize suas histórias mais especiais com uma miniatura única e personalizada.
            É fácil, rápido e o resultado vai te surpreender!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="button-gradient text-lg px-8 py-6 font-semibold animate-glow">
              COMEÇAR AGORA <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 font-semibold border-2 border-meumini-orange text-meumini-orange hover:bg-meumini-orange hover:text-white">
              Ver Galeria
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
