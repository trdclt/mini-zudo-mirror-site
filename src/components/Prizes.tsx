
import React from 'react';
import { Button } from '@/components/ui/button';

const prizes = [
  {
    title: "iPhone 15 Pro",
    value: "R$ 9.899",
    image: "https://placehold.co/200x200/93fc3c/1d1d1d?text=iPhone+15",
  },
  {
    title: "PlayStation 5",
    value: "R$ 3.899",
    image: "https://placehold.co/200x200/93fc3c/1d1d1d?text=PS5",
  },
  {
    title: "Airpods Pro",
    value: "R$ 1.899",
    image: "https://placehold.co/200x200/93fc3c/1d1d1d?text=Airpods",
  },
];

const Prizes: React.FC = () => {
  return (
    <section id="premios" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Prêmios Incríveis</h2>
          <p className="mt-4 text-lg text-gray-600">Ganhe pontos e troque por estes produtos</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prizes.map((prize, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-gray-100 card-shadow flex flex-col items-center"
            >
              <img 
                src={prize.image} 
                alt={prize.title} 
                className="w-40 h-40 object-contain mb-4"
              />
              <h3 className="text-xl font-bold mb-1">{prize.title}</h3>
              <p className="text-minizudo-green font-semibold text-lg mb-4">{prize.value}</p>
              <Button className="button-gradient w-full">Resgatar agora</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
