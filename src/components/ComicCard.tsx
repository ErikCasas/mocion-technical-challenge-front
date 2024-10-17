import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AppRoute } from "../AppRoute";

interface Comic {
  id: string;
  name?: string;
  image: string;
}

const ComicCard: React.FC<{ comic: Comic }> = ({ comic }) => {
  return (
    <Link to={`${AppRoute.Comic}/${comic.id}`}>
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
    </Link>
  );
};

export default ComicCard;
