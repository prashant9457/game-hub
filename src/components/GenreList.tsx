import useGenres from "@/hooks/useGenres";
import { HStack, List, Image, Heading } from "@chakra-ui/react";
import { Spinner, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";
import { Genres } from "@/hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenreId?: number;
}

const GenreList = ({
  onSelectGenre,
  selectedGenreId,
}: Props) => {
  const { data, isLoading, error } = useGenres();

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
                  onSelectGenre(genre as Genres);
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
