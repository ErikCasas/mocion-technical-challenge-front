import { Box, Button, Stack, Text } from "@chakra-ui/react";

type PaginatedProps = {
  isDisabledNextButton: boolean;
  isDisabledPreviousButton: boolean;
  numberPage: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
};
export const Paginated: React.FC<PaginatedProps> = ({
  handleNextPage,
  handlePreviousPage,
  numberPage,
  isDisabledNextButton,
  isDisabledPreviousButton,
}) => {
  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      p={2}
      boxShadow="0 -2px 4px rgba(0, 0, 0, 0.1)"
      zIndex="1000"
      bgColor="#f6e7d0"
    >
      <Stack direction="row" spacing={4} justify="center" align="center">
        <Button
          bgColor="#b71313"
          size={{
            base: "xs",
            md: "sm",
            lg: "md",
          }}
          onClick={handlePreviousPage}
          isDisabled={isDisabledPreviousButton}
          colorScheme="teal"
        >
          Previous
        </Button>
        <Text
          size={{
            base: "xs",
            md: "sm",
            lg: "md",
          }}
          fontWeight="extrabold"
          color="black"
        >
          Page {numberPage}
        </Text>
        <Button
          bgColor="#b71313"
          size={{
            base: "xs",
            md: "sm",
            lg: "md",
          }}
          onClick={handleNextPage}
          isDisabled={isDisabledNextButton}
          colorScheme="teal"
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
};
