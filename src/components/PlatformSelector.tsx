import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { Platform } from "@/hooks/useGames";
interface Props {
  onSelectPlatform : (platform: Platform) => void;
  selectedPlatform : Platform | null;
}
const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
  const { data, error } = usePlatforms();
  if(error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger as={Button} >
        {selectedPlatform?.name || 'Platforms'}
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item
                onClick={() => onSelectPlatform(platform) }
                key={platform.id}
                // value={platform.slug ?? platform.name}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
