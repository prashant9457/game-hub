import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  //useColorMode is a custom hook made on top of nex-themes
  //where colorMode gives you current theme
  const { colorMode, setColorMode } = useColorMode();

  console.log("Render → colorMode:", colorMode);

  return (
    <HStack>
      <Switch.Root
        colorPalette="green"
        //checked is a param for switch
        checked={colorMode === "dark"}
        onCheckedChange={() =>
          //calling state hook for setting
          setColorMode(colorMode === "dark" ? "light" : "dark")
        }
      >
        <Switch.HiddenInput />
        <Switch.Control />
      </Switch.Root>
      <Text>{colorMode === "dark" ? "Dark" : "Light"} Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
