import InputForm from "../InputForm";
import { MathInputType } from "../MathInput";

interface Props {
  translatePlaneRefX: React.RefObject<HTMLInputElement | null>;
  translatePlaneRefY: React.RefObject<HTMLInputElement | null>;
  translatePlaneRefZ: React.RefObject<HTMLInputElement | null>;
}

const PlaneTranslationInput = ({
  translatePlaneRefX,
  translatePlaneRefY,
  translatePlaneRefZ,
}: Props) => {
  const xyzInputs: MathInputType[] = [
    {
      placeholder: "x",
      heading: "X-Axis",
      unit: "m",
      inputRef: translatePlaneRefX,
    },
    {
      placeholder: "y",
      heading: "Y-Axis",
      unit: "m",
      inputRef: translatePlaneRefY,
    },
    {
      placeholder: "z",
      heading: "Z-Axis",
      unit: "m",
      inputRef: translatePlaneRefZ,
    },
  ];

  return (
    <InputForm
      inputs={xyzInputs}
      superheading="Plane Translation"
      description="Move plane along the worlds coordinate axes in space. These values are added to the current location of the plane."
    />
  );
};

export default PlaneTranslationInput;
