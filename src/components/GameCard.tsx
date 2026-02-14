import { Game } from "@/hooks/useGames"
import { Card , Image} from "@chakra-ui/react"

interface Props {
    game : Game
}
const GameCard = ({game} : Props) => {
  return (
    <Card.Root borderRadius={20} overflow={"hidden"}>
        <Image src={game.background_image}></Image>
        <Card.Body>
            <Card.Header fontSize='5xl'>{game.name}</Card.Header>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCard