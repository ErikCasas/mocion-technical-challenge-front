/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_GRAPHQL_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
