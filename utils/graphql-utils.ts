import { GraphQLClient } from 'graphql-request';

// export const graphqlClient = new GraphQLClient(process.env.STRAPI_API_URL as string, {
//   headers: {
//     'x-api-key': process.env.
//   }
// });
// export const performStrapiRequest = async (query: string, variables: Record<string, any> = {}) => {
//   const graphQLClient = new GraphQLClient(API_URL, {
//     headers: {}, // You can add any necessary headers here
//   });

//   try {
//     const data = await graphQLClient.request(query, variables);
//     return data;
//   } catch (error) {
//     console.error('Error performing Strapi request:', error);
//     throw new Error('An error occurred while performing the Strapi request.');
//   }
// };
