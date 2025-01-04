import { MathInputType } from "../MathInput";
import InputForm from "../InputForm";

const moveInputs: MathInputType[] = [
  { placeholder: "x", heading: "X-Axis", unit: "m" },
  { placeholder: "y", heading: "Y-Axis", unit: "m" },
  { placeholder: "z", heading: "Z-Axis", unit: "m" },
];

const MoveThreatInput = () => {
  return (
    <InputForm
      inputs={moveInputs}
      superheading="Move Selected Threat"
      description="Move the selected bird in space."
    />
  );
};

export default MoveThreatInput;
