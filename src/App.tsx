import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Router } from "./Router";
import { useUser } from "./context/useUser";
import { useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { config } from "../config";

export const App = () => {
  const { setUser } = useUser();
  const [user] = useLocalStorage(config.USER_KEY, null);

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user, setUser]);

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Layout>
        <Router />
      </Layout>
    </ChakraProvider>
  );
};
