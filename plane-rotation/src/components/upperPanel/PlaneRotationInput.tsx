import { Phi, Psi, Theta } from "../../assets/greekIcons";
import InputForm from "../InputForm";
import { MathInputType } from "../MathInput";

const yawPitchRollInputs: MathInputType[] = [
  { placeholder: "Roll", heading: "Roll", unit: "°", icon: Phi },
  { placeholder: "Pitch", heading: "Pitch", unit: "°", icon: Theta },
  { placeholder: "Yaw", heading: "Yaw", unit: "°", icon: Psi },
];

const PlaneRotationInput = () => {
  return (
    <InputForm
      inputs={yawPitchRollInputs}
      superheading="Plane Rotation"
      description="Rotate the plane along its internal axes. New rotations are added to the current rotation."
    />
  );
};

export default PlaneRotationInput;
