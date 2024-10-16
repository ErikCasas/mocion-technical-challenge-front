import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient.tsx";

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <StrictMode>
    <Suspense>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Suspense>
  </StrictMode>
);
