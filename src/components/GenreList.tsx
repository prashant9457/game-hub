import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import useGameQueryStore from "@/store";
import { Button, Heading, HStack, Image, List, Spinner } from "@chakra-ui/react";


const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)
  if (error) return null;

  if (isLoading) return <Spinner />; //not needed if not calling api

  return (
    <>
      <Heading fontSize="3xl" marginBottom={6}>
        Genres
      </Heading>
      <List.Root listStyleType="none">
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                whiteSpace="normal"
                flex="1"
                justifyContent="left"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize="lg"
                variant="ghost"
                onClick={() => {
                  setSelectedGenreId(genre.id);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
