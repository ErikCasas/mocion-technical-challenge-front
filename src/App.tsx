import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { Layout } from "./components/Layout";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <h1>Holaa</h1>
      </Layout>
    </ChakraProvider>
  );
};
