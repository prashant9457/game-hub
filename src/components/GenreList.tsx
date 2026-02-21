import useGenres from "@/hooks/useGenres";
import { HStack, List, Image, Text } from "@chakra-ui/react";
import { Spinner, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";
import { Genres } from "@/hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenreList = ({onSelectGenre, selectedGenre} : Props) => {
  const { data, isLoading, error} = useGenres();

  if(error) return null;
  
  if(isLoading) return <Spinner/>
  
  return (
    <List.Root listStyleType="none">
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize='lg' variant="ghost" onClick={()=>{onSelectGenre(genre)}}>{genre.name}</Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
