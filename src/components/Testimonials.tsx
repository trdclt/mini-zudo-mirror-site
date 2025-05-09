
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
  {
    name: "Carlos Silva",
    avatar: "https://placehold.co/100/ff6f00/ffffff?text=CS",
    text: "O MeuMini do meu pai ficou incrível! Cada detalhe foi reproduzido com perfeição. É o presente mais especial que já dei.",
    location: "São Paulo, SP",
  },
  {
    name: "Ana Oliveira",
    avatar: "https://placehold.co/100/ff6f00/ffffff?text=AO",
    text: "Fiz um MeuMini para presentear meu marido no nosso aniversário. Ele se emocionou ao ver todos os detalhes da nossa história juntos.",
    location: "Rio de Janeiro, RJ",
  },
  {
    name: "Marcos Pereira",
    avatar: "https://placehold.co/100/ff6f00/ffffff?text=MP",
    text: "Cada detalhe ficou idêntico! A qualidade do trabalho é impressionante e o resultado final superou todas as minhas expectativas.",
    location: "Belo Horizonte, MG",
  },
  {
    name: "Patricia Santos",
    avatar: "https://placehold.co/100/ff6f00/ffffff?text=PS",
    text: "A miniatura chegou em perfeito estado e antes do prazo previsto. O acabamento é impecável e todos os amigos perguntam onde consegui.",
    location: "Curitiba, PR",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">O que dizem nossos clientes</h2>
          <p className="mt-4 text-lg text-meumini-light-gray">Histórias reais de pessoas que transformaram suas memórias em arte</p>
        </div>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                <div className="bg-gray-800 p-6 rounded-lg card-shadow h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-meumini-light-gray">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-meumini-light-gray flex-grow">"{testimonial.text}"</p>
                  <div className="mt-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-meumini-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="static transform-none mx-4" />
            <CarouselNext className="static transform-none mx-4" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
