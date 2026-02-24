import usePlatforms from "@/hooks/usePlatforms";
import { Button, Box } from "@chakra-ui/react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  const { data, error } = usePlatforms();
  if(error) return null;

  return (
    <Listbox>
      <ListboxButton as={Button} variant="surface">
        Order by: Relevance
        <BsChevronDown/>
      </ListboxButton>
      
      <ListboxOptions 
        as={Box}
        anchor="bottom start"
        bg="bg.panel"
        boxShadow="md"
        borderRadius="md"
        p={2}
        mt={1}
        zIndex={1000}
      >
        <ListboxOption value="relevance" >Relevance</ListboxOption>
        <ListboxOption value="Date added">Date added</ListboxOption>
        <ListboxOption value="released">Release date</ListboxOption>
        <ListboxOption value="Popularity">Popularity</ListboxOption>
        <ListboxOption value="rating">Average Rating</ListboxOption>
      </ListboxOptions>
    </Listbox>
  );
};

export default SortSelector;
