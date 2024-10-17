// src/apolloClient.ts
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { config } from "../config";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

// Manejo de errores con Chakra UI Toast
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      toast({
        title: "Error de GraphQL",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    });
  }

  if (networkError) {
    toast({
      title: "Error de Red",
      description: networkError.message,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(config.JWT_KEY);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = new HttpLink({
  uri: config.GRAPHQL_URL,
});

// Crear el cliente Apollo
export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
