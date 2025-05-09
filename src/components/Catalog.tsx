
import React from 'react';
import { Button } from '@/components/ui/button';

const catalogTypes = [
  {
    title: "MeuMini Pronto",
    description: "Miniaturas já prontas com designs exclusivos para entrega rápida.",
    image: "https://placehold.co/600x400/1e1e1e/ff6f00?text=MeuMini+Pronto"
  },
  {
    title: "MeuMini Personalizado",
    description: "Miniaturas criadas especialmente para você, baseadas nas suas fotos e histórias.",
    image: "https://placehold.co/600x400/1e1e1e/ff6f00?text=MeuMini+Personalizado"
  }
];

const Catalog: React.FC = () => {
  return (
    <section className="py-16 bg-meumini-dark" id="catalogo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Escolha o MeuMini perfeito para você
          </h2>
          <p className="text-lg text-meumini-light-gray max-w-3xl mx-auto">
            Oferecemos opções para todos os gostos e necessidades. Explore nossos modelos prontos
            ou crie uma miniatura totalmente personalizada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {catalogTypes.map((type, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg overflow-hidden card-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={type.image} 
                  alt={type.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                <p className="text-meumini-light-gray mb-6">{type.description}</p>
                <a 
                  href="https://checkout.meumini.shop/VCCL1O8SBTNJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className={index === 1 ? "button-gradient" : "bg-gray-700 hover:bg-gray-600"}>
                    Ver {type.title}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://checkout.meumini.shop/VCCL1O8SBTNJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="button-gradient text-lg px-8 py-6 font-semibold animate-glow">
              Fazer Meu MeuMini Agora
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
