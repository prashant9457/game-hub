import { Game } from "@/hooks/useGames"
import { Card , Image, Text} from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"

interface Props {
    game : Game
}
const GameCard = ({game} : Props) => {
  return (
    <Card.Root borderRadius={20} overflow={"hidden"}>
        <Image src={game.background_image}></Image>
        <Card.Body>
            <Card.Header fontSize='5xl'>{game.name}</Card.Header>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCard