
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-meumini-orange flex items-center justify-center mr-2 neon-glow">
        <span className="text-lg font-bold text-white">M</span>
      </div>
      <span className="text-xl font-bold text-white">MeuMini</span>
    </div>
  );
};

export default Logo;
