import InputForm from "../InputForm";
import { MathInputType } from "../MathInput";

const xyzInputs: MathInputType[] = [
  { placeholder: "x", heading: "X-Axis", unit: "m" },
  { placeholder: "y", heading: "Y-Axis", unit: "m" },
  { placeholder: "z", heading: "Z-Axis", unit: "m" },
];

const PlaneTranslationInput = () => {
  return (
    <InputForm
      inputs={xyzInputs}
      superheading="Plane Translation"
      description="Move plane along the worlds coordinate axes in space. These values are added to the current location of the plane."
    />
  );
};

export default PlaneTranslationInput;
