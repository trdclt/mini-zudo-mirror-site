
import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const galleryImages = [
  "https://placehold.co/600x600/1e1e1e/ff6f00?text=MeuMini+1",
  "https://placehold.co/600x600/1e1e1e/ff6f00?text=MeuMini+2",
  "https://placehold.co/600x600/1e1e1e/ff6f00?text=MeuMini+3",
  "https://placehold.co/600x600/1e1e1e/ff6f00?text=MeuMini+4",
  "https://placehold.co/600x600/1e1e1e/ff6f00?text=MeuMini+5",
  "https://placehold.co/600x600/1e1e1e/ff6f00?text=MeuMini+6",
  "https://placehold.co/600x600/1e1e1e/ff6f00?text=MeuMini+7",
  "https://placehold.co/600x600/1e1e1e/ff6f00?text=MeuMini+8"
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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.slice(0, 4).map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={`Miniatura ${index + 1}`} 
                className="w-full h-64 object-cover transform transition-transform group-hover:scale-110 duration-300"
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
        
        <div className="mt-12">
          <Carousel className="max-w-md mx-auto">
            <CarouselContent>
              {galleryImages.slice(4).map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <img
                      src={image}
                      alt={`Miniatura ${index + 5}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none mx-0" />
              <CarouselNext className="static transform-none mx-0" />
            </div>
          </Carousel>
        </div>
        
        <div className="flex flex-col items-center mt-12">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-lg mb-4 text-white hover:text-meumini-orange transition-colors"
          >
            <Instagram className="mr-2" /> Siga-nos no Instagram
          </a>
          <p className="text-meumini-light-gray text-sm mb-6">
            Veja mais trabalhos e acompanhe as novidades
          </p>
          <Button className="button-gradient">
            Ver Todos os Trabalhos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
