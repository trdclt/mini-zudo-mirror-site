
import React from 'react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: "Miniatura Pessoal",
    image: "https://placehold.co/600x400/1e1e1e/ff6f00?text=Miniatura+Pessoal",
    description: "Sua imagem transformada em uma miniatura detalhada."
  },
  {
    id: 2,
    name: "Miniatura Familiar",
    image: "https://placehold.co/600x400/1e1e1e/ff6f00?text=Miniatura+Familiar",
    description: "Eternize momentos em família com uma miniatura personalizada."
  },
  {
    id: 3,
    name: "Miniatura Profissional",
    image: "https://placehold.co/600x400/1e1e1e/ff6f00?text=Miniatura+Profissional",
    description: "Represente sua carreira ou hobby em uma miniatura exclusiva."
  },
  {
    id: 4,
    name: "Miniatura Comemorativa",
    image: "https://placehold.co/600x400/1e1e1e/ff6f00?text=Miniatura+Comemorativa",
    description: "Celebre marcos especiais com uma miniatura personalizada."
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-meumini-dark" id="produtos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          MeuMini <span className="text-meumini-orange">Personalizado</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-gray-900 rounded-lg overflow-hidden card-shadow hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                  <Button className="button-gradient m-4">Ver Detalhes</Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-sm text-meumini-light-gray">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
