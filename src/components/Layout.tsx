import { Flex, useTheme } from "@chakra-ui/react";
import React from "react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    colors: { gray },
  } = useTheme();
  return (
    <>
      <Flex direction="column" as="main" bg={gray[500]} minHeight="100%">
        {children}
      </Flex>
    </>
  );
};
