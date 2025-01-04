import {
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Stack,
  VStack,
} from "@chakra-ui/react";
import PlaneRotationInput from "./upperPanel/PlaneRotationInput";
import PlaneTranslationInput from "./upperPanel/PlaneTranslationInput";
import ThreatInput from "./upperPanel/ThreatInput";
import MoveThreatInput from "./upperPanel/MoveThreatInput";
import { fontWeightSystem, typographySystem } from "../theme";
import Bird from "./Bird";

import crow from "../assets/birds/crow.webp";
import penguin from "../assets/birds/penguin.webp";
import pigeon from "../assets/birds/pigeon.webp";

const birds = [
  { name: "Crow", link: crow },
  { name: "Penguin", link: penguin },
  { name: "Pigeon", link: pigeon },
];

const UpperPanel = () => {
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
      </GridItem>
      <GridItem area="planeTranslation" width="100%">
        <VStack paddingBottom={4} height="100%" justifyContent="space-between">
          <PlaneTranslationInput />
          <Flex width="100%" justifyContent="flex-end">
            <Button
              className="btn-secondary"
              fontWeight={fontWeightSystem.SemiBold}
              fontSize={typographySystem.size_2}
              size="sm"
            >
              Reset Plane
            </Button>
          </Flex>
        </VStack>
      </GridItem>
      <GridItem area="addThreat" width="100%">
        <VStack paddingBottom={0} height="100%" justifyContent="space-between">
          <ThreatInput />
          <Flex width="100%" justifyContent="flex-end">
            <Button
              className="btn-primary"
              fontWeight={fontWeightSystem.SemiBold}
              fontSize={typographySystem.size_2}
              size="sm"
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
            <Stack spacing={4} direction="row" align="center">
              {birds.map((bird) => (
                <Bird
                  key={bird.name}
                  avatar={bird.link}
                  isSelected={bird.name === "Crow"}
                />
              ))}
            </Stack>
          </HStack>
        </VStack>
      </GridItem>
    </Grid>
  );
  // InputConsole
  // ThreatPanel
};

export default UpperPanel;
