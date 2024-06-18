import { gql } from '@apollo/client';

export const get_homepage = gql`
    query GetHomepage {
      entries {
      ... on home_Entry {
        id
        title
        description
        }
      }
    }
`;