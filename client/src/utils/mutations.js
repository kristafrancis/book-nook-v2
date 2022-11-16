import { gql } from '@apollo/client';


// login user 
export const USER_LOGIN = gql `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const ADD_FRIEND = gql`
    mutation addFriend($id: ID!) {
        addFriend(friendId: $id) {
            _id
            username
            friendCount
            friends {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql `
    mutation saveBook($input: BookInput!) {
        saveBook(input: $input) {
            _id
            username
            email
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

export const REMOVE_BOOK = gql `
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            _id
            username
            savedBooks{
                bookId
                authors
                description
                title
                image
                
            }
        }
    }
`;

export const ADD_COMMENT = gql`
  mutation addComment($commentText: String!, $book_id: String!) {
    addComment(commentText: $commentText, book_id: $book_id) {
      _id
      commentText
      createdAt
      username
      book_id
    }
  }
`;


