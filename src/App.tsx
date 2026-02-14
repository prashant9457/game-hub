import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
const App = () => {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main" `
    }}>
      <GridItem area = 'nav'>
        <NavBar></NavBar>
      </GridItem>
      <GridItem area = 'aside' bg='gold' display={{ base: "none", lg: "block" }}>aside</GridItem>
      <GridItem area = 'main' bg='dodgerblue'>Main</GridItem>
    </Grid>
  )
}

export default App