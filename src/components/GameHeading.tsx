import { Heading } from "@chakra-ui/react";
import { GameQuery } from "@/App";

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: Props) => {
    return (
        <Heading as='h1' fontSize='6xl' marginBottom={10}>
            {gameQuery.genre?.name} {gameQuery.platform?.name} Games
        </Heading>
    )
}

export default GameHeading;