import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <StrictMode>
    <Suspense>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
