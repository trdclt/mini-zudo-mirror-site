
import React from 'react';
import { Upload, Package, Image } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: "Envie suas fotos",
    description: "Carregue suas fotos favoritas através do nosso sistema seguro e fácil de usar."
  },
  {
    icon: Package,
    title: "Produção personalizada",
    description: "Nossa equipe de artesãos transforma suas fotos em miniaturas detalhadas feitas à mão."
  },
  {
    icon: Image,
    title: "Entrega especial",
    description: "Receba seu MeuMini em uma embalagem especial, pronto para decorar ou presentear."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-500 to-orange-600" id="como-funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Como Funciona</h2>
          <p className="text-lg text-amber-100 max-w-3xl mx-auto">
            Transformar suas memórias em uma miniatura personalizada é fácil e rápido.
            Siga estes simples passos para criar seu MeuMini exclusivo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-1/2 w-full h-1 bg-gradient-to-r from-amber-300 to-transparent" />
              )}
              <div className="bg-amber-600/80 rounded-lg p-6 card-shadow relative z-10">
                <div className="w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
                  <step.icon className="h-8 w-8 text-orange-800" />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-meumini-orange rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-white">{step.title}</h3>
                <p className="text-center text-amber-100">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
