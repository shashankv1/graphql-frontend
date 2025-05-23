"use client";

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // Your backend server
  cache: new InMemoryCache(),
});
