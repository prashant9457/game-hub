import { Platform } from "@/hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
//LETS IMPORT TONS OF ICONS FROM REACT ICONS...
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  //index signature
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation4: FaPlaystation,
    playstation5: FaPlaystation,
    xbox: FaXbox,
    "xbox-one": FaXbox,
    "xbox-series-x": FaXbox,
    mac: FaApple,
    macos: FaApple,
    ios: MdPhoneIphone,
    android: FaAndroid,
    linux: FaLinux,
    "nintendo-switch": SiNintendo,
    web: BsGlobe,
  };

  return (
    <HStack marginY={5} marginX={7} >
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];

        if (!IconComponent) return null;

        return (
          <Icon
            key={platform.id}
            as={IconComponent as any}
            color="gray.500"
            fontSize="2xl"
          />
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
