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

export const SAVE_BOOK = gql `
    mutation saveBook($BookInput: BookInput!) {
        saveBook(BookInput: $BookInput) {
            _id
            username
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
export const ADD_FRIEND = gql `
mutation addFriend($friendId: ID!) {
    addFriend(friendId: $friendId) {
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

export const ADD_COMMENT = gql `
mutation addComment($comment_text: String!) {
    addComment(comment_text: $comment_text) {
      _id
      comment_text
      createdAt
      username
      
    }
  }
`;

export const UPDATE_USER = gql `
mutation updateUser($id: ID!, $email: String!) {
    updateUser(id: $id, email: $email) {
      _id
      username
      email
      
    }
  }
`;

export const DELETE_USER = gql `
mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
    }
`;



