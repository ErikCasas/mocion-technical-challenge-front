// src/components/SignUp.tsx
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Heading,
  FormErrorMessage,
} from "@chakra-ui/react";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useState } from "react";

interface SignUpProps {
  onSignUpSuccess: ({
    email,
    name,
    password,
    nickname,
  }: {
    email: string;
    name: string;
    password: string;
    nickname: string;
  }) => void;
}

interface FormValues {
  name: string;
  email: string;
  password: string;
  nickname: string;
}

export const SignUp: React.FC<SignUpProps> = ({ onSignUpSuccess }) => {
  const [form, setForm] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
    nickname: "",
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormValues> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!form.nickname.trim()) newErrors.nickname = "Nickname is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSignUpSuccess({ ...form });
  };

  return (
    <Flex direction="column" align="center" p={6} bgColor="#dbb102">
      <Heading mb={6}>Create Account</Heading>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <FormControl isInvalid={!!errors.name} mb={4}>
          <FormLabel>Name</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <MdPerson color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
          </InputGroup>
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email} mb={4}>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <MdEmail color="gray.300" />
            </InputLeftElement>
            <Input
              type="email"
              name="email"
              placeholder="youremail@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </InputGroup>
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password} mb={4}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <MdLock color="gray.300" />
            </InputLeftElement>
            <Input
              type="password"
              name="password"
              placeholder="********"
              value={form.password}
              onChange={handleChange}
            />
          </InputGroup>
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.nickname} mb={4}>
          <FormLabel>Your superhero name</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <MdPerson color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              name="nickname"
              placeholder="Batman"
              value={form.nickname}
              onChange={handleChange}
            />
          </InputGroup>
          <FormErrorMessage>{errors.nickname}</FormErrorMessage>
        </FormControl>
        <Button type="submit" color="white" bgColor="#2d6bba" width="full">
          Sign Up
        </Button>
      </form>
    </Flex>
  );
};
