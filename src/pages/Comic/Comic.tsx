import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
  Badge,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ComicDocument } from "./graphql/GetComic.generated";
import { Loading } from "../../components/Loading";
import { AddFavoriteComicDocument } from "./graphql/AddFavoriteComic.generated";

const ComicDetail: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const { comicId } = useParams<{ comicId: string }>();

  const {
    data: comicData,
    loading,
    error,
    refetch: refetchComic,
  } = useQuery(ComicDocument, {
    variables: { comicId: comicId ?? "" },
    fetchPolicy: "network-only",
  });

  //? poner en el return de un useEffect ?
  const [addToFavorites, { loading: isAddingToFavorites }] = useMutation(
    AddFavoriteComicDocument,
    {
      variables: {
        comicId: comicId ?? "",
      },
      errorPolicy: "all",
      update: (cache) => {
        cache.evict({ id: "ROOT_QUERY", fieldName: `Comic:${comicId}` });
      },
      onCompleted: () => refetchComic({ comicId }),
    }
  );
  console.log(comicData?.comic.isLiked);
  useEffect(() => {
    if (comicData?.comic) {
      setLiked(!!comicData.comic.isLiked);
    }
  }, [comicData]);

  const handleLike = () => {
    addToFavorites();
  };

  const imageSize = useBreakpointValue({ base: "100%", md: "400px" });

  if (error) {
    return (
      <Center>
        <Text color="red.500">Error: {error.message}</Text>
      </Center>
    );
  }

  const comic = comicData?.comic;

  if (!comic) {
    return (
      <Center>
        <Text>No comic data found.</Text>
      </Center>
    );
  }

  return (
    <Box p={5} maxWidth="1200px" mx="auto" w="100%" h="100%">
      {loading && <Loading />}
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={6}
        align="flex-start"
      >
        <Box boxSize={imageSize} flexShrink={0}>
          <Image
            src={comic.image}
            alt={comic.name || "Untitled Comic"}
            objectFit="cover"
            width="100%"
            height="auto"
            borderRadius="md"
            boxShadow="md"
          />
        </Box>

        <Stack spacing={4} flex="1">
          <Heading as="h1" size="xl">
            {comic.name || "Untitled Comic"}
          </Heading>

          <Flex gap={2} align="center" flexWrap="wrap">
            <Badge colorScheme="purple" fontSize="1em">
              Issue #{comic.issue_number || "N/A"}
            </Badge>
            <Badge colorScheme="blue" fontSize="1em">
              Volume {comic.volume || "N/A"}
            </Badge>
            <Badge colorScheme="green" fontSize="1em">
              {comic.publisher || "Unknown Publisher"}
            </Badge>
            <Badge colorScheme="orange" fontSize="1em">
              {comic.cover_date
                ? new Date(comic.cover_date).toLocaleDateString()
                : "Unknown Date"}
            </Badge>
          </Flex>

          <Box
            fontSize="2xl"
            fontWeight="extrabold"
            color="Black"
            lineHeight="tall"
            dangerouslySetInnerHTML={{
              __html:
                comic.description || "No description available for this comic.",
            }}
          />

          {comic.person_credits && comic.person_credits.length > 0 && (
            <Box>
              <Heading as="h3" size="md" mt={3}>
                Credits:
              </Heading>
              <Text>{comic.person_credits.join(", ")}</Text>
            </Box>
          )}

          <Button
            onClick={handleLike}
            isLoading={isAddingToFavorites || loading}
            leftIcon={liked ? <AiFillHeart /> : <AiOutlineHeart />}
            colorScheme={liked ? "red" : "gray"}
            variant="solid"
            size="md"
          >
            {liked ? "Liked" : "Like"}
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default ComicDetail;
