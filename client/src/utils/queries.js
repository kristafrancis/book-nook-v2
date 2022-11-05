//queryMe gql 
import { gql } from '@apollo/client';

export const QUERY_ME = gql `
    {
        me {
            _id
            username
            email
            friendCount
            savedBooks {
                bookId
                authors
                description
                title
                image
            }
        }
    }
`;
