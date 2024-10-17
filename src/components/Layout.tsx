import { Flex } from "@chakra-ui/react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      direction="column"
      as="main"
      backgroundImage="url('/img/CBPbackground.png')"
      backgroundRepeat="repeat"
      backgroundSize="auto"
    >
      {children}
    </Flex>
  );
};
