import { Grid, GridItem } from "@chakra-ui/react";
import { Psi, Phi, Theta } from "../assets/greekIcons";
import { MathInputType } from "./MathInput";
import InputForm from "./InputForm";

const yawPitchRollInputs: MathInputType[] = [
  { placeholder: "Yaw", heading: "Yaw", unit: "°", icon: Psi },
  { placeholder: "Pitch", heading: "Pitch", unit: "°", icon: Theta },
  { placeholder: "Roll", heading: "Roll", unit: "°", icon: Phi },
];
const xyzInputs: MathInputType[] = [
  { placeholder: "x", heading: "X-Axis", unit: "m" },
  { placeholder: "y", heading: "Y-Axis", unit: "m" },
  { placeholder: "z", heading: "Z-Axis", unit: "m" },
];

const InputConsole = () => {
  return (
    <Grid>
      <GridItem>
        <InputForm inputs={yawPitchRollInputs} />
        <InputForm inputs={xyzInputs} />
      </GridItem>
    </Grid>
  );
};

export default InputConsole;
