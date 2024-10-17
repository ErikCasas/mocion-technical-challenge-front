/**
 * @license
 * Copyright 2023 Ada School
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import { Flex, Box } from "@chakra-ui/react";
import React from "react";

interface ErrorBoundaryProps {
  message?: string;
  onError?: (error: Error) => void;
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  error?: Error;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    this.props.onError?.(error);
  }

  render() {
    if (this.state.error) {
      return (
        <Flex
          w="100%"
          h="100%"
          alignItems="center"
          justifyContent="center"
          fontSize="md"
          textAlign="center"
        >
          <Box
            border="solid 1px"
            borderColor="red.400"
            px="5"
            py="3"
            bg="red.200"
            rounded="md"
            maxW={600}
          >
            {this.props.message ? this.props.message : null}
            {this.state.error.message ? (
              <Box
                p="1"
                bg="red.100"
                rounded="sm"
                fontFamily="monospace"
                mt="2"
                color="red.400"
                fontSize="xs"
              >
                {this.state.error.message}
              </Box>
            ) : null}
          </Box>
        </Flex>
      );
    }

    return this.props.children;
  }
}
