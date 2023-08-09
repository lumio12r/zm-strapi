// queries.js

import { gql } from '@apollo/client';

// Define your GraphQL query
export const GET_HOME_PAGE_DATA = gql`
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
