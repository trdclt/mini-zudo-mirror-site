
import React from 'react';

const testimonials = [
  {
    name: "Carlos Silva",
    avatar: "https://placehold.co/100/93fc3c/1d1d1d?text=CS",
    text: "Mini Zudo é simplesmente incrível! Já ganhei diversos prêmios e a experiência de jogo é fantástica.",
    location: "São Paulo, SP",
  },
  {
    name: "Ana Oliveira",
    avatar: "https://placehold.co/100/93fc3c/1d1d1d?text=AO",
    text: "Jogo todos os dias e já fiz muitos amigos. A plataforma é segura e os prêmios são entregues rapidamente.",
    location: "Rio de Janeiro, RJ",
  },
  {
    name: "Marcos Pereira",
    avatar: "https://placehold.co/100/93fc3c/1d1d1d?text=MP",
    text: "Já ganhei um iPhone jogando Mini Zudo! A melhor plataforma de jogos que já utilizei.",
    location: "Belo Horizonte, MG",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">O que dizem nossos jogadores</h2>
          <p className="mt-4 text-lg text-gray-600">Veja depoimentos de quem já viveu a experiência Mini Zudo</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg card-shadow flex flex-col"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-600 flex-grow">{testimonial.text}</p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-minizudo-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
