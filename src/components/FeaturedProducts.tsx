
import React from 'react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: "Miniatura Pessoal",
    image: "/lovable-uploads/b4b1e544-8973-4a46-a87f-4caeb4d94dce.png",
    description: "Sua imagem transformada em uma miniatura detalhada."
  },
  {
    id: 2,
    name: "Miniatura Familiar",
    image: "/lovable-uploads/002c0e0b-8391-4896-bf7f-ddd48a6b0226.png",
    description: "Eternize momentos em família com uma miniatura personalizada."
  },
  {
    id: 3,
    name: "Miniatura Profissional",
    image: "/lovable-uploads/e3e0b068-64e8-4392-b37d-a7359ca11b58.png",
    description: "Represente sua carreira ou hobby em uma miniatura exclusiva."
  },
  {
    id: 4,
    name: "Miniatura Comemorativa",
    image: "/lovable-uploads/e2500cfa-5f3f-4c7c-8fdc-5763e1b4e8a1.png",
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
              className="bg-gray-900 rounded-lg overflow-hidden card-shadow"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <a 
                    href="https://checkout.meumini.shop/VCCL1O8SBTNJ" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="m-4"
                  >
                    <Button className="button-gradient">Aproveitar Agora</Button>
                  </a>
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
