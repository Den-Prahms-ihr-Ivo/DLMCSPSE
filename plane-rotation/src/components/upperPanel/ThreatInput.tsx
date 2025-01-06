import InputForm from "../InputForm";
import { MathInputType } from "../MathInput";

const threatInputs: MathInputType[] = [
  { placeholder: "x", heading: "X-Axis", unit: "m" },
  { placeholder: "y", heading: "Y-Axis", unit: "m" },
  { placeholder: "z", heading: "Z-Axis", unit: "m" },
];

const ThreatInput = () => {
  return (
    <InputForm
      inputs={threatInputs}
      superheading="Add a New Slightly Offended Bird"
      description="Initial location of a new vicious bird of prey."
    />
  );
};

export default ThreatInput;
