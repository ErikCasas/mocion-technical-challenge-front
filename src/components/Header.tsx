// src/components/Header.tsx
import { Avatar, Flex, IconButton, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";

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

  const username = "Erik asdakkda";
  const isLogged = true;

  useEffect(() => {
    const randomPhotoProfile = getRandomImage();
    setPhoto(randomPhotoProfile);
  }, []);

  return (
    <Flex
      position="fixed"
      display="flex"
      justify="space-between"
      width="100%"
      p={[3, 4, 4]}
      bgColor="#ff0000"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      shadow="xs"
      align="center"
    >
      {isLogged && (
        <>
          <IconButton
            aria-label="logout"
            icon={<RiLogoutBoxRLine color="black" />}
          />
          <Flex align="center" gap="5">
            <Text fontSize={["xl", "2xl"]} fontWeight="extrabold">
              {username}
            </Text>
            <Avatar size={["md", "lg"]} name={username} src={photo} />
          </Flex>
        </>
      )}
    </Flex>
  );
};
