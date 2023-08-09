import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import LinkComponent from '../components/LinkComponent';

interface HeroSectionProps {
  data: HeroSectionData;
}

interface HeroSectionData {
  id: string;
  heroEyebrow: string;
  heroImage: {
    url: string;
  };
  heroLinks: Array<ButtonRecord | LinkRecord>;
  heroTitle: string;
  heroText: string;
  heroParagraph: string;
}

interface ButtonRecord {
  buttonText: string;
  buttonDestination: string;
}

interface LinkRecord {
  linkText: string;
  linkDestination: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <section className='flex flex-col lg:flex-row columns-1 lg:columns-2 py-20 items-center'>
      <div className='w-full lg:w-3/6'>
        <h3 className='text-blue-700 font-medium text-2xl mb-3 lowercase'>{data.heroEyebrow}</h3>
        <h1 className='font-bold leading-snug text-6xl mb-3 capitalize'>{data.heroTitle}</h1>
        <p className='text-xl leading-loose mb-10'>{data.heroText}</p>
        <div className='flex'>
          <Button buttonText={'Learn more'} buttonDestination={'#'} />
          <LinkComponent linkText={'Popular Services'} linkDestination={'#'} />
        </div>
      </div>
      <div className='w-full lg:w-3/6'>
        <Image 
          src={data.heroImage.url}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;