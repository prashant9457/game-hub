import { Game } from "@/hooks/useGames"
import { Card , Image, Text, HStack} from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"

interface Props {
    game : Game
}
const GameCard = ({game} : Props) => {
  return (
    <Card.Root borderRadius={20} overflow={"hidden"}>
        <Image src={game.background_image}></Image>
        <Card.Body backgroundColor='gray.800'>
            <Card.Header fontSize='3xl'>{game.name}</Card.Header>
            <HStack justifyContent={"space-between"}>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
            <CriticScore score ={game.metacritic}></CriticScore>
            </HStack>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCard