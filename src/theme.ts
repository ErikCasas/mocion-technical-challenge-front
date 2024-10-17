// src/theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    50: "#e3f9e5",
    100: "#c1eac8",
    200: "#a3dcb2",
    300: "#7ccf94",
    400: "#4fc076",
    500: "#3ba662",
    600: "#2a7d49",
    700: "#1d5636",
    800: "#0f3322",
    900: "#001a0f",
  },
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: "bold",
    },
    sizes: {
      xl: {
        h: "56px",
        fontSize: "lg",
        px: "32px",
      },
    },
    variants: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      solid: (props: any) => ({
        bg: props.colorMode === "dark" ? "brand.300" : "brand.500",
        color: "white",
        _hover: {
          bg: props.colorMode === "dark" ? "brand.400" : "brand.600",
        },
      }),
    },
  },
};

const theme = extendTheme({
  config,
  colors,
  fonts: {
    heading: `'Comic Neue', sans-serif`,
    body: `'Comic Neue', sans-serif`,
  },
  components,
});

export default theme;
