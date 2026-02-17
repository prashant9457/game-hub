import useGenres from "@/hooks/useGenres";
import { HStack, List, Image, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";
const GenreList = () => {
  const { data, isLoading, error} = useGenres();

  if(error) return null;
  
  if(isLoading) return <Spinner/>
  
  return (
    <List.Root listStyleType="none">
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
