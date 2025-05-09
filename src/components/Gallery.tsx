
import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';

// Original gallery images array
const originalGalleryImages = [
  "/lovable-uploads/a8d070f5-e2b4-4445-b045-7345b171e3d5.png",
  "/lovable-uploads/7374d7a3-2a34-4bbb-bbb3-1f632064f366.png",
  "/lovable-uploads/f92f01a3-ff72-454b-9d10-7ec136192d7b.png",
  "/lovable-uploads/dd89015f-bd58-4444-97a4-1c4f0b60df44.png",
  "/lovable-uploads/92c8b9d5-8caf-4f51-8499-0fcc68e9a23a.png",
  "/lovable-uploads/f96711ea-7c1a-4378-b0b7-66120086921f.png",
  "/lovable-uploads/184cf47a-21fd-4254-98cd-9d65e5e645b6.png",
  "/lovable-uploads/950fa47c-f6d3-4799-8de0-fe9f3d97ffac.png",
  "/lovable-uploads/273daef4-d40a-4d96-9c22-c5b509a40faa.png",
  "/lovable-uploads/8b23cc1a-7845-4162-ac18-111a7844ebdb.png",
  "/lovable-uploads/8fbad4d6-47f1-45a3-bff8-471fce401e03.png"
];

// Reverse the array to change the order
const galleryImages = [...originalGalleryImages].reverse();

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
        
        {/* Updated container with proper responsive width constraints */}
        <div className="relative w-full max-w-[900px] mx-auto px-4 sm:px-8 md:px-12">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-4 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="relative group overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt={`Cliente com sua miniatura personalizada ${index + 1}`} 
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                      <div className="p-4">
                        <h3 className="text-white font-medium">MeuMini Personalizado</h3>
                        <p className="text-sm text-gray-300">Cliente satisfeito</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Improved navigation buttons for better visibility on all screen sizes */}
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 hidden md:block">
              <CarouselPrevious className="bg-meumini-orange hover:bg-meumini-orange-glow text-white border-none h-10 w-10" />
            </div>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 hidden md:block">
              <CarouselNext className="bg-meumini-orange hover:bg-meumini-orange-glow text-white border-none h-10 w-10" />
            </div>

            <div className="flex justify-center mt-6 md:hidden">
              <CarouselPrevious className="mx-2 bg-meumini-orange hover:bg-meumini-orange-glow text-white border-none h-10 w-10" />
              <CarouselNext className="mx-2 bg-meumini-orange hover:bg-meumini-orange-glow text-white border-none h-10 w-10" />
            </div>
          </Carousel>
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
            href="https://linktr.ee/meu.mini"
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
