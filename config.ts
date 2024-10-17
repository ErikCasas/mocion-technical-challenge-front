export const config = {
  GRAPHQL_URL: import.meta.VITE_GRAPHQL_URL || "http://localhost:4000/graphql",
  AUTH_API_URL: import.meta.AUTH_API_URL || "http://localhost:4000/v1/auth",
  JWT_KEY: "jwt",
  USER_KEY: "user",
};
