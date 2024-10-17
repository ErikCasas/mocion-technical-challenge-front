import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Router } from "./Router";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Layout>
        <Router />
      </Layout>
    </ChakraProvider>
  );
};
