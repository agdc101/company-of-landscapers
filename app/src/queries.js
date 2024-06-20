import { gql } from '@apollo/client';

export const get_homepage = gql`
    query GetHomepage {
      entry {
        ... on home_Entry {
          id
          title
          description
          heroImage {
            title
            url
          }
        }
      }
    }
`;