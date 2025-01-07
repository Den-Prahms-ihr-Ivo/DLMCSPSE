import {
  Text,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Stack,
  Switch,
  VStack,
  Center,
} from "@chakra-ui/react";
import PlaneRotationInput from "./upperPanel/PlaneRotationInput";
import PlaneTranslationInput from "./upperPanel/PlaneTranslationInput";
import ThreatInput from "./upperPanel/ThreatInput";
import MoveThreatInput from "./upperPanel/MoveThreatInput";
import { colourSystem, fontWeightSystem, typographySystem } from "../theme";
import Bird from "./Bird";

import crow from "../assets/birds/crow.webp";
import penguin from "../assets/birds/penguin.webp";
import pigeon from "../assets/birds/pigeon.webp";
import { useContext, useRef } from "react";
import BirdContext from "./state-management/context/birdContext";

const birds = [
  { name: "Crow", link: crow },
  { name: "Penguin", link: penguin },
  { name: "Pigeon", link: pigeon },
];

const UpperPanel = () => {
  const { birds, dispatch: dispatchBird } = useContext(BirdContext);

  const newThreatRefX = useRef<HTMLInputElement>(null);
  const newThreatRefY = useRef<HTMLInputElement>(null);
  const newThreatRefZ = useRef<HTMLInputElement>(null);

  const showOnlyNBirds = 7;

  return (
    <Grid
      height="100%"
      templateAreas={`"planeRotation addThreat" "planeTranslation moveThreat"`}
      templateColumns={`"1fr 1fr" "1fr 1fr"`}
      columnGap={10}
      gap={0}
    >
      <GridItem area="planeRotation" width="100%">
        <PlaneRotationInput />
        <Flex width="100%" justifyContent="flex-end">
          <Button
            className="btn-secondary"
            fontWeight={fontWeightSystem.SemiBold}
            fontSize={typographySystem.size_2}
            size="sm"
          >
            Rotate Plane
          </Button>
        </Flex>
      </GridItem>
      <GridItem area="planeTranslation" width="100%">
        <VStack paddingBottom={4} height="100%" justifyContent="space-between">
          <PlaneTranslationInput />
          <Flex paddingBottom={3} width="100%" justifyContent="flex-start">
            <Center>
              <Text
                paddingRight={3}
                fontSize={typographySystem.size_2}
                color={colourSystem.Text.secondary}
              >
                Show Coordinate System?
              </Text>
            </Center>
            <Switch colorScheme="teal" />
          </Flex>
          <Flex width="100%" justifyContent="space-between">
            <Button
              className="btn-tertiary"
              fontWeight={fontWeightSystem.SemiBold}
              fontSize={typographySystem.size_2}
              size="sm"
            >
              Reset Plane
            </Button>
            <Button
              className="btn-secondary"
              fontWeight={fontWeightSystem.SemiBold}
              fontSize={typographySystem.size_2}
              size="sm"
            >
              Move Plane
            </Button>
          </Flex>
        </VStack>
      </GridItem>
      <GridItem area="addThreat" width="100%">
        <VStack paddingBottom={0} height="100%" justifyContent="space-between">
          <ThreatInput
            newThreatRefX={newThreatRefX}
            newThreatRefY={newThreatRefY}
            newThreatRefZ={newThreatRefZ}
          />
          <Flex width="100%" justifyContent="flex-end">
            <Button
              className="btn-secondary"
              fontWeight={fontWeightSystem.SemiBold}
              fontSize={typographySystem.size_2}
              size="sm"
              onClick={() => {
                if (newThreatRefX.current !== null) {
                  console.log(Number(newThreatRefX.current?.value));
                  newThreatRefX.current.value = "";

                  dispatchBird({ type: "ADD", x: 0, y: 0, z: 0 });
                }
              }}
            >
              Add Threat
            </Button>
          </Flex>
        </VStack>
      </GridItem>
      <GridItem area="moveThreat" width="100%">
        <VStack paddingBottom={4} height="100%" justifyContent="space-between">
          <MoveThreatInput />
          <HStack width="100%" justifyContent="space-between">
            <Stack spacing={4} maxWidth="200px" direction="row" align="center">
              {birds.slice(0, showOnlyNBirds).map((bird) => (
                // Du darfst maximal 7 Vögel anzeigen
                <Bird
                  key={bird.id}
                  avatar={bird.thumbnailURL}
                  onSelect={() => {
                    dispatchBird({ type: "SELECT", id: bird.id });
                  }}
                  onDelete={() => {
                    dispatchBird({ type: "REMOVE", id: bird.id });
                  }}
                  isSelected={bird.isSelected}
                />
              ))}
            </Stack>

            <Button
              className="btn-secondary"
              fontWeight={fontWeightSystem.SemiBold}
              fontSize={typographySystem.size_2}
              size="sm"
            >
              Move Threat
            </Button>
          </HStack>
        </VStack>
      </GridItem>
    </Grid>
  );
  // InputConsole
  // ThreatPanel
};

export default UpperPanel;
