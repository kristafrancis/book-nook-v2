//queryMe gql 
import { gql } from '@apollo/client';

export const QUERY_ME = gql `
    {
        me {
            _id
            username
            email
            friendCount
            friends {
                _id
                username
            }
            comments {
                _id
                commentText
                createdAt
                username
                book_id
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
                commentText
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

export const QUERY_ME_BASIC = gql `
{
    me {
        _id
        username
        email
        friendCount
        friends {
            _id
            username
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
`

export const QUERY_COMMENTS = gql`
  query comments($username: String) {
    comments(username: $username) {
      _id
      commentText
      createdAt
      username
      book_id
    }
  }
`;

export const QUERY_COMMENT = gql`
  query comment($id: ID!) {
    comment(_id: $id) {
      _id
      commentText
      createdAt
      username
      book_id
    }
  }
`;