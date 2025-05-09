
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Transforme suas memórias em <span className="text-meumini-orange neon-glow">miniaturas mágicas!</span>
          </h1>
          <p className="text-lg md:text-xl text-meumini-light-gray max-w-3xl mx-auto mb-8">
            Eternize momentos com um MeuMini personalizado que conta sua história.
            Cada peça é única como suas memórias.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="button-gradient text-lg px-8 py-6 font-semibold animate-glow">
              Criar Meu MeuMini <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 font-semibold border-2 border-meumini-orange text-meumini-orange hover:bg-meumini-orange hover:text-white">
              Ver Galeria
            </Button>
          </div>
        </div>
      </div>
      
      <div className="hidden md:block absolute -bottom-16 -right-16 w-64 h-64 bg-meumini-orange opacity-20 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute -top-16 -left-16 w-64 h-64 bg-meumini-orange opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
