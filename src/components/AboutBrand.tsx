
import React from 'react';
import { Hammer, Palette, Star } from 'lucide-react';

const features = [
  {
    title: "Artesanal",
    icon: Hammer,
    description: "Cada miniatura é produzida por impressão 3D com resina premium, garantindo máxima qualidade e riqueza de detalhes."
  },
  {
    title: "Personalizado",
    icon: Palette,
    description: "Nossa equipe de designers cria a melhor versão do seu MeuMini baseada na sua foto, com fidelidade e capricho."
  },
  {
    title: "Exclusivo",
    icon: Star,
    description: "Sua miniatura será única, assim como as memórias que ela representa."
  }
];

const AboutBrand: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Histórias reais em miniaturas únicas</h2>
          <p className="text-lg text-meumini-light-gray max-w-3xl mx-auto">
            Na MeuMini, transformamos suas fotos e memórias em miniaturas artesanais detalhadas que contam sua história. 
            Nosso processo combina arte tradicional com personalização digital para criar peças únicas que durarão para sempre.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-6 card-shadow hover:transform hover:translate-y-[-10px] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-meumini-orange rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{feature.title} {
                feature.title === "Artesanal" ? "🛠️" :
                feature.title === "Personalizado" ? "🖌️" : "🌟"
              }</h3>
              <p className="text-center text-meumini-light-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
