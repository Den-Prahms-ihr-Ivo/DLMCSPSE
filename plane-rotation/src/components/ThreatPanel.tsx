import {
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { MathInputType } from "./MathInput";
import InputForm from "./InputForm";
import { fontWeightSystem, typographySystem } from "../theme";
import Bird from "./Bird";

import crow from "../assets/birds/crow.webp";
import penguin from "../assets/birds/penguin.webp";
import pigeon from "../assets/birds/pigeon.webp";

const yawPitchRollInputs: MathInputType[] = [
  { placeholder: "x", heading: "X-Axis", unit: "m" },
  { placeholder: "y", heading: "Y-Axis", unit: "m" },
  { placeholder: "z", heading: "Z-Axis", unit: "m" },
];
const xyzInputs: MathInputType[] = [
  { placeholder: "x", heading: "X-Axis", unit: "m" },
  { placeholder: "y", heading: "Y-Axis", unit: "m" },
  { placeholder: "z", heading: "Z-Axis", unit: "m" },
];

const birds = [
  { name: "Crow", link: crow },
  { name: "Penguin", link: penguin },
  { name: "Pigeon", link: pigeon },
];

const ThreatPanel = () => {
  return (
    <VStack paddingBottom={4} height="100%" justifyContent="space-between">
      <Grid>
        <GridItem>
          <InputForm
            inputs={yawPitchRollInputs}
            superheading="Threat Location"
            description="Initial location of a new vicious bird of prey."
          />
        </GridItem>
        <GridItem>
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
        </GridItem>
        <GridItem>
          <InputForm
            inputs={xyzInputs}
            superheading="Move Selected Threat"
            description="Move the selected bird in space."
          />
        </GridItem>
      </Grid>
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
  );
};

export default ThreatPanel;
