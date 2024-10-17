// src/components/PageLayout.tsx
import { Grid, Box } from "@chakra-ui/react";

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Grid
      overflow="auto"
      templateColumns={{ base: "1fr", md: "1fr 2fr 1fr" }}
      height="100vh"
      width="100%"
      p={{ base: 4, md: 8 }}
      mt={["19%", "13%", "4%"]}
    >
      <Box
        gridColumn={{ md: "2 / 3" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Box>
    </Grid>
  );
};
