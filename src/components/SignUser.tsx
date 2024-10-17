import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Heading,
} from "@chakra-ui/react";
import { MdEmail, MdLock, MdPersonAdd } from "react-icons/md";
import { useEffect, useState } from "react";
import { signInWithCredentials } from "../services/authService";
import { useLazyQuery } from "@apollo/client";
import { GetUserDocument } from "../graphql/GetUser.generated";
import { useUser } from "../context/useUser";
import { Loading } from "./Loading";
interface SignUserProps {
  onSignUp: () => void;
}

export const SignUser: React.FC<SignUserProps> = ({ onSignUp }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();

  const [getUser, { data, loading: isLoadingUserData }] =
    useLazyQuery(GetUserDocument);

  useEffect(() => {
    if (data) {
      const { email, id, name, nickname } = data.user;
      setUser({ email, id, name, nickname });
    }
  }, [data, setUser]);

  const handleLogin = async () => {
    await signInWithCredentials(email, password);
    await getUser();
  };

  return (
    <Flex
      rounded="md"
      shadow="lg"
      h="90%"
      mx="auto"
      mt="100px"
      direction="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      bgColor="#dbb102"
      p={12}
    >
      {isLoadingUserData && <Loading />}
      <Heading fontWeight="extrabold">Sign In</Heading>

      <FormControl id="email" mt={4}>
        <FormLabel>Email</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <MdEmail color="gray.300" />
          </InputLeftElement>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
      </FormControl>

      <FormControl id="password" mt={4}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <MdLock color="gray.300" />
          </InputLeftElement>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
      </FormControl>

      <Button
        leftIcon={<MdLock />}
        colorScheme="teal"
        variant="solid"
        mt={6}
        width="100%"
        onClick={handleLogin}
      >
        Login
      </Button>

      <Button
        leftIcon={<MdPersonAdd />}
        variant="outline"
        mt={4}
        width="100%"
        onClick={onOpen}
      >
        Create a count
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a count</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Aquí irá el formulario de registro.</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={onSignUp}>
              Sign up
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
