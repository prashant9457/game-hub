import { Game } from "@/hooks/useGames"
import { Card , Image, Text, HStack} from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "@/services/image-url"
interface Props {
    game : Game
}
const GameCard = ({game} : Props) => {
  return (
    <Card.Root width='300px' borderRadius={20} overflow={"hidden"}>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <Card.Body>
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