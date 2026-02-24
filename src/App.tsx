import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genres } from "./hooks/useGenres";
import { Game, Platform } from "./hooks/useGames";
import PlatformSelector from "./components/PlatformSelector";
export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
}

function App () {
  const [gameQuery, setGameQuery] =  useState<GameQuery>({} as GameQuery);
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
        <NavBar></NavBar>
      </GridItem>
      <GridItem
        area="aside"
        paddingX={5}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
        ></GenreList>
      </GridItem>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform: Platform) =>
            setGameQuery({...gameQuery, platform})
          }
        />
        <GameGrid
          gameQuery={gameQuery}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default App;
