
import React from 'react';

const features = [
  {
    title: "Jogos Emocionantes",
    description: "Desfrute de jogos cheios de emoção e estratégia que mantêm você entretido por horas.",
  },
  {
    title: "Prêmios Incríveis",
    description: "Ganhe prêmios reais e virtuais ao vencer partidas e torneios especiais.",
  },
  {
    title: "Comunidade Ativa",
    description: "Junte-se a uma comunidade de jogadores ativos e faça novas amizades.",
  },
  {
    title: "Suporte Dedicado",
    description: "Nossa equipe de suporte está sempre pronta para ajudar com qualquer problema.",
  },
];

const Features: React.FC = () => {
  return (
    <section id="sobre-nos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Por que jogar Mini Zudo?</h2>
          <p className="mt-4 text-lg text-gray-600">Descubra as vantagens que fazem nosso jogo único</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg card-shadow hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="w-10 h-10 bg-minizudo-green rounded-full flex items-center justify-center mb-4">
                <span className="text-minizudo-dark font-bold">{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
