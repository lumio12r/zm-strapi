import Link from 'next/link';
import React from 'react';

interface ButtonRecord {
  buttonText: string;
  buttonDestination: string;
}

const Button: React.FC<ButtonRecord> = ({ buttonText, buttonDestination }) => {
  return (
    <Link className='text-xl bg-red-400 text-white py-4 px-10 flex mr-8' href={buttonDestination}>
      {buttonText}
    </Link>
  );
};

export default Button;
