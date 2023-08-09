import React from 'react';
import OfferBoxItem from '../components/OfferBoxItem'

interface OfferSectionProps {
  data: HomepageOfferSectionRecord;
}

interface OfferBoxItemType {
  offerBoxItemTitle: string;
  offerBoxItemText: string;
  offerBoxItemImage: OfferBoxItemImageType;
}

interface OfferBoxItemImageType {
  alt: string | null;
  url: string;
  title: string | null;
}

interface HomepageOfferSectionRecord {
  id: string;
  offerEyebrow: string;
  offerText: string;
  offerTitle: string;
  offerBox: OfferBoxItemType[];
}

const OfferSection: React.FC<OfferSectionProps> = ({ data }) => {
  return (
    <section className='py-20'>
      {/* Render the offer section using the data */}
      <div className='flex flex-col md:flex-row columns-1 md:columns-2 mb-16'>
        <div className='w-full md:w-3/6'>
          <h3 className='text-blue-700 font-medium text-2xl lowercase'>{data.offerEyebrow}</h3>
          <h2 className='font-medium text-5xl capitalize'>{data.offerTitle}</h2>
        </div>
        <div className='w-full md:w-3/6'>
          <p className='text-xl leading-loose'>{data.offerText}</p>
        </div>
      </div>
      <div className='columns-3'>
        {data.offerBox.map((offerboxitem: OfferBoxItemType, index: number) => 
        (
          <OfferBoxItem item={offerboxitem} type={index % 2 === 1 ? 'distinguished' : 'normal'} key={index} />
        )
        )}
      </div>
      {/* ... other elements */}
    </section>
  );
};

export default OfferSection;
