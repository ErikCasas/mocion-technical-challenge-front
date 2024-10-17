import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import ComicCard from "../../components/ComicCard";
import { Loading } from "../../components/Loading";
import React from "react";
import { FavoritesDocument } from "./graphql/GetFavoritesComics.generated";
import { useQuery } from "@apollo/client";
import errorImage from "../../../public/img/errorImage.jpg";
import { Link } from "react-router-dom";
import { AppRoute } from "../../AppRoute";

const Favorites: React.FC = () => {
  const { data: favoritesData, loading: isLoading } = useQuery(
    FavoritesDocument,
    {
      fetchPolicy: "network-only",
    }
  );

  return (
    <Box p={4} w="100%" h="100%">
      {isLoading && <Loading />}

      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={10}
      >
        {favoritesData?.user.favoriteComics?.length ? (
          <>
            {favoritesData?.user?.favoriteComics.map((comic) => (
              <ComicCard key={comic.id} comic={comic} />
            ))}
          </>
        ) : (
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex="10"
            borderRadius="md"
          >
            <Flex
              w="100%"
              h="100%"
              zIndex="1000"
              align="center"
              justify="center"
              direction="column"
            >
              <Text fontSize="3xl" fontWeight="extrabold">
                No favoerites 😢😢
              </Text>
              <Image src={errorImage} objectFit="contain" />
              <Link to={AppRoute.Comics}>
                <Text fontSize="3xl" fontWeight="extrabold" as="u" color="blue">
                  Go to Home!!
                </Text>
              </Link>
            </Flex>
          </Box>
        )}
      </Grid>
    </Box>
  );
};
export default Favorites;
