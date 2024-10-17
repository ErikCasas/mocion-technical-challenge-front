import { AppRoute } from "../AppRoute";
import { useUser } from "../context/useUser";
import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import homeImage from "../../public/img/homeImage.gif";
import { SignUser } from "../components/SignUser";
const HomePage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(AppRoute.Comics, { replace: true });
    }
  }, [navigate, user]);

  const handleSignUp = () => {
    navigate(AppRoute.Comics);
  };

  return (
    <Grid
      as="section"
      templateColumns={{ base: "1fr", md: "1fr 500px" }}
      alignItems="center"
      gap="4"
      backgroundColor={"transparent"}
      minH="100%"
      p={{ base: "1", md: "3" }}
    >
      <Flex
        justify="center"
        position="relative"
        display={{ base: "none", md: "flex" }}
      >
        <Image
          src={homeImage}
          objectFit="contain"
          width="1200px"
          height="100%"
        />
      </Flex>
      <Box h="100%">
        <SignUser onSignUp={handleSignUp} />
      </Box>
    </Grid>
  );
};
export default HomePage;
