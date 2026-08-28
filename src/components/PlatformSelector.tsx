import usePlatforms from "@/hooks/usePlatforms";
import { Button, Box } from "@chakra-ui/react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { Platform } from "@/hooks/useGames";
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectPlatform : (platform: Platform) => void;
  selectedPlatform : Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
  const { data, error } = usePlatforms();
  if(error) return null;

  return (
    <Listbox value={selectedPlatform ?? undefined} onChange={onSelectPlatform}>
      <ListboxButton as={Button} variant="surface">
        {selectedPlatform?.name || 'Platforms'}
        {/* @ts-ignore */}
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
        {data?.results.map((platform) => (
          <ListboxOption 
            key={platform.id} 
            value={platform} 
            as={Box}
            p={2}
            borderRadius="sm"
            cursor="pointer"
            _hover={{ bg: "bg.muted" }}
            css={{ 
              "&[data-selected]": { fontWeight: "bold" }
            }}
          >
            {platform.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default PlatformSelector;
