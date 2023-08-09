"use client"

import React, { useState, useEffect } from 'react';
import { request, gql } from 'graphql-request';
import HeroSection from '../ui/sections/HomepageHeroSection';
import OfferSection from '../ui/sections/HomepageOfferSection';

// interface HomepageHeroSectionRecord {
//   id: string;
//   heroEyebrow: string;
//   heroImage: {
//     url: string;
//   };
//   heroLinks: Array<ButtonRecord | LinkRecord>;
//   heroTitle: string;
//   heroText: string;
//   heroParagraph: string;
// }

// interface ButtonRecord {
//   buttonText: string;
//   buttonDestination: string;
// }

// interface LinkRecord {
//   linkText: string;
//   linkDestination: string;
// }
// interface OfferBoxItemType {
//   offerBoxItemTitle: string;
//   offerBoxItemText: string;
//   offerBoxItemImage: OfferBoxItemImageType;
// }

// interface OfferBoxItemImageType {
//   alt: string | null;
//   url: string;
//   title: string | null;
// }

// interface HomepageOfferSectionRecord {
//   id: string;
//   offerEyebrow: string;
//   offerText: string;
//   offerTitle: string;
//   offerBox: OfferBoxItemType[];
// }

// interface HomePageData {
//   homepage: {
//     content: (HomepageHeroSectionRecord | HomepageOfferSectionRecord)[];
//   };
// }

// interface HomePageResponse {
//   data: HomePageData;
// }

const homepageQuery = gql`
{
  pages {
    data {
      id
      attributes {
        title
        slug
        __typename
        createdAt
        blocks {
          __typename
          ... on ComponentSharedHomepageHero {
            id
            eyebrow
            title
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
            buttons {
              theme
              link {
                label
                href
                target
                isExternal
              }
            }
          }
          ... on ComponentBlocksOfferSection {
            id
            theme
            title
            text
            offerBox {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              title
              text
            }
          }
        }
      }
    }
  }
}
`;


// const getHomepageData = async (): Promise<HomePageData> => {
//   try {
//     const response = await performStrapiRequest(homepageQuery);
//     const responseData: HomePageResponse = response as HomePageResponse;
//     return responseData.data;
//   } catch (error) {
//     console.error('Error fetching homepage data:', error);
//     throw new Error('An error occurred while fetching the homepage data.');
//   }
// }

const HomePage: React.FC = () => {
  // const [homepageData, setHomepageData] = useState<HomePageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await request('https://test.perfo.click/graphql/', homepageQuery);
        console.log(data);
      } catch (error) {
        console.error('Error fetching homepage data:', error);
      }
    };

    fetchData();
  }, []);

  // if (!homepageData) {
  //   return null; // Render loading state or fallback component
  // }

  // const [heroSectionData, offerSectionData] = homepageData.homepage.content;

  return (
    <main className='container max-w-7xl mx-auto'>
      {/* <HeroSection data={heroSectionData as HomepageHeroSectionRecord} />
      <OfferSection data={offerSectionData as HomepageOfferSectionRecord} /> */}
    </main>
  );
};

export default HomePage;