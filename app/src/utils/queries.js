import { gql } from '@apollo/client';

export const get_homepage = gql`
    query getHomepage {
      homeEntries {
        ... on home_Entry {
          heroTitle
          heroText
          heroImage {
            alt
            url
          }
          introTitle
          introDescription
          introImage {
            alt
            url
          }
          experienceTitle
          experienceDescription
          experienceImage {
            alt
            url
          }
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