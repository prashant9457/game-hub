import { Card, Skeleton, Stack } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width='300px' borderRadius={20} overflow={"hidden"}>
      <Skeleton height="300px" />
      <Card.Body>
        <Stack mt="3" gap="3">
          <Skeleton height="25px" />
          <Skeleton height="25px" width="60%" />
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
