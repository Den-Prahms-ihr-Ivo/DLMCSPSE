import { Phi, Psi, Theta } from "../../assets/greekIcons";
import InputForm from "../InputForm";
import { MathInputType } from "../MathInput";

interface Props {
  rotatePlaneRefRoll: React.RefObject<HTMLInputElement | null>;
  rotatePlaneRefPitch: React.RefObject<HTMLInputElement | null>;
  rotatePlaneRefYaw: React.RefObject<HTMLInputElement | null>;
}

const PlaneRotationInput = ({
  rotatePlaneRefRoll,
  rotatePlaneRefPitch,
  rotatePlaneRefYaw,
}: Props) => {
  const yawPitchRollInputs: MathInputType[] = [
    {
      placeholder: "Roll",
      heading: "Roll",
      unit: "°",
      icon: Phi,
      inputRef: rotatePlaneRefRoll,
    },
    {
      placeholder: "Pitch",
      heading: "Pitch",
      unit: "°",
      icon: Theta,
      inputRef: rotatePlaneRefPitch,
    },
    {
      placeholder: "Yaw",
      heading: "Yaw",
      unit: "°",
      icon: Psi,
      inputRef: rotatePlaneRefYaw,
    },
  ];

  return (
    <InputForm
      inputs={yawPitchRollInputs}
      superheading="Plane Rotation"
      description="Rotate the plane along its internal axes. New rotations are added to the current rotation."
    />
  );
};

export default PlaneRotationInput;
