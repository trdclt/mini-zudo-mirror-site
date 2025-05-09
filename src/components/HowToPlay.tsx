
import React from 'react';

const steps = [
  {
    title: "Crie sua conta",
    description: "Faça seu registro gratuito e configure seu perfil de jogador.",
  },
  {
    title: "Deposite créditos",
    description: "Adicione créditos à sua conta para participar dos jogos.",
  },
  {
    title: "Escolha seu jogo",
    description: "Selecione entre diversos modos de jogo disponíveis.",
  },
  {
    title: "Ganhe prêmios",
    description: "Vença partidas e troque seus pontos por prêmios incríveis.",
  },
];

const HowToPlay: React.FC = () => {
  return (
    <section id="como-jogar" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Como Jogar</h2>
          <p className="mt-4 text-lg text-gray-600">Siga estes simples passos e comece a se divertir</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg flex-1 card-shadow relative"
            >
              <div className="absolute -top-4 left-6 w-8 h-8 bg-minizudo-green rounded-full flex items-center justify-center">
                <span className="text-minizudo-dark font-bold">{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold mt-4 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
