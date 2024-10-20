import { Avatar, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useUser } from "../context/useUser";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { config } from "../../config";
import { IoIosLogOut } from "react-icons/io";
import logo from "../../public/img/logo.png";
import { Link } from "react-router-dom";
import { AppRoute } from "../AppRoute";

const profilesPhotos = [
  "/img/profile/batman.jpg",
  "/img/profile/daredevil.jpg",
  "/img/profile/flash.jpg",
  "/img/profile/spiderman.jpg",
  "/img/profile/superman.jpg",
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * profilesPhotos.length);
  return profilesPhotos[randomIndex];
};

export const Header: React.FC = () => {
  const [photo, setPhoto] = useState<string>("");
  const [isLogged, setIsLogged] = useState(true);

  const { user, setUser } = useUser();

  const name = user?.nickname;

  useEffect(() => {
    if (user) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [user]);

  useEffect(() => {
    const randomPhotoProfile = getRandomImage();

    setPhoto(randomPhotoProfile);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_userStorage, setUserStorage] = useLocalStorage(config.USER_KEY, null);

  const handleLogout = () => {
    setUser(null);
    setUserStorage(null);
  };
  return (
    <Flex
      position="fixed"
      display="flex"
      justify="space-between"
      width="100%"
      p={{
        base: 3,
        md: 1,
        lg: 4,
      }}
      bgColor="#b71313"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      shadow="xs"
      align="center"
    >
      <Link to={AppRoute.Comics}>
        <Image
          src={logo}
          maxHeight={{ base: "40px", md: "50px", lg: "60px" }}
          maxWidth="auto"
          objectFit="contain"
          flexShrink={0}
          alt="Logo"
        />
      </Link>

      {isLogged && (
        <>
          <Flex align="center" gap="5">
            <Text
              fontSize={{
                base: "x-large",
                md: "x-large",
                lg: "3xl",
              }}
              fontWeight="extrabold"
            >
              {name}
            </Text>
            <Avatar size={["md", "lg"]} name={name} src={photo} />
            <IconButton
              aria-label="logout"
              onClick={handleLogout}
              icon={<IoIosLogOut />}
            />
          </Flex>
        </>
      )}
    </Flex>
  );
};
