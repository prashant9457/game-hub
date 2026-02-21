import { Grid, GridItem } from "@chakra-ui/react"
import { useState } from "react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { Genres } from "./hooks/useGenres"
const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main" `
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px'
    }}
    >
      <GridItem area = 'nav'>
        <NavBar></NavBar>
      </GridItem>
      <GridItem area = 'aside' paddingX={5} display={{ base: "none", lg: "block" }}>
        <GenreList onSelectGenre={(genre)=>setSelectedGenre(genre)}></GenreList>
      </GridItem>
      <GridItem area = 'main'>
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
    </Grid>
  )
}
 
export default App