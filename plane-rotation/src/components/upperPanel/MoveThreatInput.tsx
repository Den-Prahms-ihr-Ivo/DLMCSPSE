import { MathInputType } from "../MathInput";
import InputForm from "../InputForm";

interface Props {
  translateBirdsRefX: React.RefObject<HTMLInputElement | null>;
  translateBirdsRefY: React.RefObject<HTMLInputElement | null>;
  translateBirdsRefZ: React.RefObject<HTMLInputElement | null>;
}

const MoveThreatInput = ({
  translateBirdsRefX,
  translateBirdsRefY,
  translateBirdsRefZ,
}: Props) => {
  const moveInputs: MathInputType[] = [
    {
      placeholder: "x",
      heading: "X-Axis",
      unit: "m",
      inputRef: translateBirdsRefX,
    },
    {
      placeholder: "y",
      heading: "Y-Axis",
      unit: "m",
      inputRef: translateBirdsRefY,
    },
    {
      placeholder: "z",
      heading: "Z-Axis",
      unit: "m",
      inputRef: translateBirdsRefZ,
    },
  ];

  return (
    <InputForm
      inputs={moveInputs}
      superheading="Move Selected Bird"
      description="Move the selected bird in space."
    />
  );
};

export default MoveThreatInput;
