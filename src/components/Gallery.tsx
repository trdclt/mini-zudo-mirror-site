
import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

const galleryImages = [
  "public/lovable-uploads/2920be35-a082-4f86-94c4-c946739997da.png",
  "public/lovable-uploads/6c09f2f1-c1fd-47e3-bdb0-998ef711b17b.png",
  "public/lovable-uploads/f710e737-98c3-4135-9baf-bf7cc2f33a1f.png",
  "public/lovable-uploads/17d309a4-c575-42ec-bb87-64d533841745.png",
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
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img 
                src={image.replace('public/', '/')} 
                alt={`Cliente com sua miniatura personalizada ${index + 1}`} 
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
