import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

interface LinkRecord {
  linkText: string;
  linkDestination: string;
}

const LinkComponent: React.FC<LinkRecord> = ({ linkText, linkDestination }) => {
  return (
    <Link className='text-xl font-medium flex items-center text-blue-700 leading-relaxed' href={linkDestination}>
      {linkText}
      <Image 
        src=''
        alt=""
        width={15}
        height={5}
        className="ml-3"
    />
    </Link>
  );
};

export default LinkComponent;
