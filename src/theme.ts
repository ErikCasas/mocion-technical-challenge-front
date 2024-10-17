// src/theme.ts
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Comic Neue",
    body: "Comic Neue",
  },
  styles: {
    global: {
      body: {
        color: "black",
      },
    },
  },
});
