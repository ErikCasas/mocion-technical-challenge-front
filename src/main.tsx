import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import "./index.css";
import { ErrorBoundary } from "./ErrorBoundary";
const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense>
        <BrowserRouter>
          <ApolloProvider client={client}>
            <UserProvider>
              <App />
            </UserProvider>
          </ApolloProvider>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);
