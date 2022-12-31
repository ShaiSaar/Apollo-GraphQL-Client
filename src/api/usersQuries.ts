import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
  query GetUsers {
    getUsers {
      workStatus
      name
      img
      createdAt
      _id
    }
  }
`;

export const ADD_USER = gql`
  mutation CreateUser($userInput: UserInput) {
    createUser(userInput: $userInput) {
        _id
        name
        workStatus
        createdAt
        img
  }
}
`;

export const UPDATE_USER = gql`
  mutation Mutation($id: ID!, $userInput: UserInput) {
  updateUser(ID: $id, userInput: $userInput) {
    workStatus
    img
    name
    createdAt
    _id
  }
}
`;

export const DELETE_USER = gql`
  mutation UpdateUser($id: ID!) {
    deleteUser(ID: $id)
  }
`;
