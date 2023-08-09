import React from 'react';
import Image from 'next/image'

interface OfferBoxItemImageType {
  alt: string | null;
  title: string | null;
  url: string;
}

interface OfferBoxItemType  {
  offerBoxItemImage: OfferBoxItemImageType;
  offerBoxItemText: string;
  offerBoxItemTitle: string;
}

interface OfferBoxItemProps {
  item: OfferBoxItemType;
  type: 'normal' | 'distinguished';
}

const OfferBoxItem: React.FC<OfferBoxItemProps> = ({ item, type }) => {
  return (
    <div className={`relative ${type === 'distinguished' ? 'bg-red-400' : 'shadow-xl'} pt-32 pr-8 pb-20 pl-12`}>
        <Image 
          src={item.offerBoxItemImage.url}
          alt=""
          width={150}
          height={150}
          className="absolute top-24 left-12 z-0"
        />
        <h3 className={`text-5xl relative z-10 font-medium mb-4 ${type === 'distinguished' ? 'text-white' : ''}`}>{item.offerBoxItemTitle}</h3>
        <p className={`text-xl relative z-10 ${type === 'distinguished' ? 'text-white' : ''}`}>{item.offerBoxItemText}</p>
    </div>
  );
};

export default OfferBoxItem;