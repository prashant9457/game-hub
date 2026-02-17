import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const getColorPallete = (score: number) => {
  if (score > 75) return 'green';
  if (score > 60) return 'yellow';
  return 'red';
};

const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      colorPalette={getColorPallete(score)}
      fontSize="18px"
      px={2.5}
      py={1}
      borderRadius="6px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
