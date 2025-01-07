import { useRef } from "react";
import InputForm from "../InputForm";
import { MathInputType } from "../MathInput";

interface Props {
  newThreatRefX: React.RefObject<HTMLInputElement | null>;
  newThreatRefY: React.RefObject<HTMLInputElement | null>;
  newThreatRefZ: React.RefObject<HTMLInputElement | null>;
}

const ThreatInput = ({
  newThreatRefX,
  newThreatRefY,
  newThreatRefZ,
}: Props) => {
  const threatInputs: MathInputType[] = [
    { placeholder: "x", heading: "X-Axis", unit: "m", inputRef: newThreatRefX },
    { placeholder: "y", heading: "Y-Axis", unit: "m", inputRef: newThreatRefY },
    { placeholder: "z", heading: "Z-Axis", unit: "m", inputRef: newThreatRefZ },
  ];

  return (
    <InputForm
      inputs={threatInputs}
      superheading="Add a New Slightly Offended Bird"
      description="Initial location of a new vicious bird of prey."
    />
  );
};

export default ThreatInput;
