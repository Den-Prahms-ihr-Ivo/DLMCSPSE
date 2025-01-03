import { Button, Flex, Grid, GridItem, VStack } from "@chakra-ui/react";
import { Psi, Phi, Theta } from "../assets/greekIcons";
import { MathInputType } from "./MathInput";
import InputForm from "./InputForm";
import { fontWeightSystem, typographySystem } from "../theme";

const yawPitchRollInputs: MathInputType[] = [
  { placeholder: "Roll", heading: "Roll", unit: "°", icon: Phi },
  { placeholder: "Pitch", heading: "Pitch", unit: "°", icon: Theta },
  { placeholder: "Yaw", heading: "Yaw", unit: "°", icon: Psi },
];
const xyzInputs: MathInputType[] = [
  { placeholder: "x", heading: "X-Axis", unit: "m" },
  { placeholder: "y", heading: "Y-Axis", unit: "m" },
  { placeholder: "z", heading: "Z-Axis", unit: "m" },
];

const InputConsole = () => {
  return (
    <VStack paddingBottom={4} height="100%" justifyContent="space-between">
      <Grid>
        <GridItem>
          <InputForm
            inputs={yawPitchRollInputs}
            superheading="Plane Rotation"
            description="Rotate the plane along its internal axes. New rotations are added to the current rotation."
          />
          <InputForm
            inputs={xyzInputs}
            superheading="Plane Translation"
            description="Move plane along ground axes. These values are added to the current location of the plane."
          />
        </GridItem>
      </Grid>
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
  );
};

export default InputConsole;
