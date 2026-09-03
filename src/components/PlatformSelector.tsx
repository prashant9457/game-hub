import usePlatforms from "@/hooks/usePlatforms";
import { Button, Box } from "@chakra-ui/react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Platform } from "@/entities/Platform";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;

  return (
    <Listbox
      value={selectedPlatform ?? undefined}
      onChange={(platform) => setSelectedPlatformId(platform?.id ?? undefined)}
    >
      <ListboxButton as={Button} variant="surface">
        {selectedPlatform?.name || "Platforms"}
        {/* @ts-ignore */}
        <BsChevronDown />
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
              "&[data-selected]": { fontWeight: "bold" },
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
