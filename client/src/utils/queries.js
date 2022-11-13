//queryMe gql 
import { gql } from '@apollo/client';

export const QUERY_ME = gql `
    {
        me {
            _id
            username
            email
            userImage
            friendCount
            friends {
                _id
                username
            }
            comments {
                _id
                comment_text
                createdAt

            }
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
export const QUERY_USER = gql `
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            friendCount
            friends{
                _id
                username
            }
            comments {
                _id
                comment_text
                createdAt
            }
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

// do we need a query saved book? 