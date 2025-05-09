
import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

const galleryImages = [
  "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
  "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
  "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
  "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
  "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80",
];

const Gallery: React.FC = () => {
  return (
    <section className="py-16 bg-meumini-dark" id="galeria">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Galeria de Miniaturas</h2>
          <p className="text-lg text-meumini-light-gray max-w-3xl mx-auto">
            Veja as criações que já fizemos para nossos clientes. 
            Cada miniatura conta uma história única e especial.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={`Miniatura ${index + 1}`} 
                className="w-full aspect-square object-cover transform transition-transform group-hover:scale-110 duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-medium">MeuMini Personalizado</h3>
                  <p className="text-sm text-gray-300">Cliente satisfeito</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center mt-12">
          <a 
            href="https://www.instagram.com/meumini.com.br/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-lg mb-4 text-white hover:text-meumini-orange transition-colors"
          >
            <Instagram className="mr-2" /> Siga-nos no Instagram
          </a>
          <p className="text-meumini-light-gray text-sm mb-6">
            Veja mais trabalhos e acompanhe as novidades
          </p>
          <a 
            href="https://www.instagram.com/meumini.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="button-gradient">
              Ver Todos os Trabalhos
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
