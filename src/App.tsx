import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/usePlatforms";
import "./index.css";
import useGameQueryStore from "./store";

function App() {
  
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main" `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px",
      }}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>
      <GridItem
        area="aside"
        paddingX={5}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList/>
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft={10} marginBottom={5}>
          <GameHeading/>
          <Flex>
            <Box marginRight={5}>
              <PlatformSelector/>
            </Box>
            <SortSelector/>
          </Flex>
        </Box>
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
