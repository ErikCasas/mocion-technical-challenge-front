import ComicCard from "../../components/ComicCard";
import { useLazyQuery } from "@apollo/client";
import { Box, Grid, Button, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  ComicsDocument,
  ComicsQuery,
  ComicsQueryVariables,
} from "./GetAllComics.generated";
import { Loading } from "../../components/Loading";
import { SortDirection } from "../../types/schemaTypes";
import { Paginated } from "../../components/Paginated";

const Comics = () => {
  const [filter, setFilter] = useState({
    limit: 12,
    offset: 0,
    orderBy: { direction: SortDirection.Asc, field: "name" },
  });

  const [getComics, { data, loading, error }] = useLazyQuery<
    ComicsQuery,
    ComicsQueryVariables
  >(ComicsDocument, {
    variables: { comicsInput: { filter } },
  });

  useEffect(() => {
    getComics();
  }, [filter, getComics]);

  const handleSortChange = (field: string) => {
    setFilter((prev) => ({
      ...prev,
      orderBy: { ...prev.orderBy, field },
      offset: 0,
    }));
  };

  const toggleSortDirection = () => {
    setFilter((prev) => ({
      ...prev,
      orderBy: {
        ...prev.orderBy,
        direction:
          prev.orderBy.direction === SortDirection.Asc
            ? SortDirection.Desc
            : SortDirection.Asc,
      },
      offset: 0,
    }));
  };

  const handleNextPage = () => {
    setFilter((prev) => ({
      ...prev,
      offset: prev.offset + prev.limit,
    }));
  };

  const handlePreviousPage = () => {
    setFilter((prev) => ({
      ...prev,
      offset: Math.max(prev.offset - prev.limit, 0),
    }));
  };

  const numberPage = Math.floor(filter.offset / filter.limit) + 1;
  const isDesabledNextButton = !!data && data.comics.length < filter.limit;
  const isDisabledPreviousButton = filter.offset === 0;

  if (error) return <Box>Error: {error.message}</Box>;

  return (
    <Box p={4}>
      {loading && <Loading />}

      <Stack direction={{ base: "column", md: "row" }} spacing={4} mb={4}>
        <Select
          value={filter.orderBy.field || "name"}
          onChange={(e) => handleSortChange(e.target.value)}
          border="2px"
          borderColor="#b71313"
          focusBorderColor="#5f2872"
          _hover={{ borderColor: "#5f2872" }}
        >
          <option
            value="name"
            style={{ backgroundColor: "#c9a523", color: "whitesmoke" }}
          >
            Name
          </option>
          <option
            value="cover_date"
            style={{ backgroundColor: "#830d0d", color: "whitesmoke" }}
          >
            Cover Date
          </option>
          <option
            value="issue_number"
            style={{ backgroundColor: "#638b12", color: "whitesmoke" }}
          >
            Issue Number
          </option>
          <option
            value="volume"
            style={{ backgroundColor: "#204d86", color: "whitesmoke" }}
          >
            Volume
          </option>
        </Select>
        <Button onClick={toggleSortDirection}>
          {filter.orderBy.direction === SortDirection.Asc ? "Asc" : "Desc"}
        </Button>
      </Stack>

      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={10}
      >
        {data?.comics.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </Grid>
      <Paginated
        numberPage={numberPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        isDisabledNextButton={isDesabledNextButton}
        isDisabledPreviousButton={isDisabledPreviousButton}
      />
    </Box>
  );
};

export default Comics;
