
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#93FC3C"/>
        <path d="M13.3333 13.3333H26.6667M13.3333 20H26.6667M13.3333 26.6667H26.6667" stroke="#1D1D1D" strokeWidth="3" strokeLinecap="round"/>
      </svg>
      <span className="ml-2 text-xl font-bold">Mini Zudo</span>
    </div>
  );
};

export default Logo;
