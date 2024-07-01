import { gql } from '@apollo/client';

export const get_homepage = gql`
    query getHomepage {
      entry {
        ... on home_Entry {
          id
          title
          description
        }
      }
    }
`;

// export const get_aboutpage = gql`
//     query GetAboutpage {
//       aboutEntries {
//         ... on about_Entry {
//           description
//         }
//       }
//     }
// `;