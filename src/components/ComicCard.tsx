import { Box, Image, Text } from "@chakra-ui/react";

interface Comic {
  id: string;
  name?: string;
  image: string;
}

const ComicCard: React.FC<{ comic: Comic }> = ({ comic }) => {
  return (
    <Box overflow="hidden" bg="#fccf2d">
      <Image
        src={comic.image}
        alt={comic.name || "No Name"}
        width="100%"
        height="auto"
        objectFit="cover"
      />
      <Box p="2">
        <Text fontWeight="extrabold" fontSize="xl" align="center">
          {comic.name || "No Name Available"}
        </Text>
      </Box>
    </Box>
  );
};

export default ComicCard;
