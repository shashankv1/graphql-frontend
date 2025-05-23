import { gql } from "@apollo/client";

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $title: String, $completed: Boolean) {
    updateTodo(id: $id, title: $title, completed: $completed) {
      id
      title
      completed
    }
  }
`;
