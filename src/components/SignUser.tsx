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
  Heading,
} from "@chakra-ui/react";
import { MdEmail, MdLock, MdPersonAdd } from "react-icons/md";
import { useEffect, useState } from "react";
import {
  signInWithCredentials,
  signUpWithCredentials,
} from "../services/authService";
import { useLazyQuery } from "@apollo/client";
import { GetUserDocument } from "../graphql/GetUser.generated";
import { useUser } from "../context/useUser";
import { Loading } from "./Loading";
import { SignUp } from "./SignUp";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../AppRoute";

export const SignUser: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [getUser, { data, loading: isLoadingUserData }] =
    useLazyQuery(GetUserDocument);

  useEffect(() => {
    if (data) {
      const { email, id, name, nickname } = data.user;
      setUser({ email, id, name, nickname });
      navigate(AppRoute.Comics);
    }
  }, [data, navigate, setUser]);

  const handleLogin = async () => {
    await signInWithCredentials(email, password);
    await getUser();
  };

  const handleSignUp = async ({
    email,
    name,
    password,
    nickname,
  }: {
    email: string;
    name: string;
    password: string;
    nickname: string;
  }) => {
    await signUpWithCredentials({ email, name, password, nickname });
    onClose();
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
        variant="solid"
        mt={6}
        width="100%"
        bgColor="#2d6bba"
        color="white"
        onClick={handleLogin}
      >
        Login
      </Button>

      <Button
        leftIcon={<MdPersonAdd />}
        variant="outline"
        mt={4}
        width="100%"
        bgColor="#fccf2d"
        color={"#2d6bba"}
        borderColor="#2d6bba"
        onClick={onOpen}
      >
        Create a count
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="#dbb102">
          <ModalHeader>Create a count</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SignUp onSignUpSuccess={handleSignUp} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
