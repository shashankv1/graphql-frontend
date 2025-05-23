"use client";

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://graphql-backend-qpb4.onrender.com/graphql", // Your backend server
  cache: new InMemoryCache(),
});
