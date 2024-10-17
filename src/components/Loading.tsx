import { Box, Flex, Image } from "@chakra-ui/react";
import loadingImage from "../../public/img/loadingImage.gif";

export const Loading = () => {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      bg="rgba(255, 255, 255, 0.8)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex="10"
      borderRadius="md"
    >
      <Flex w="100%" h="100%" zIndex="1000" align="center" justify="center">
        <Image src={loadingImage} objectFit="contain" />
      </Flex>
    </Box>
  );
};
