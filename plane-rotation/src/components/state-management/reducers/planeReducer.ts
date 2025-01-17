import { Plane } from "../../diagram/plane";

export interface PlaneWithErrors {
  plane: Plane;
  error: null | {
    title: string;
    description: string;
    status: "error" | "info" | "warning" | "success" | "loading" | undefined;
  };
}

interface PlaneRotateAction {
  type: "ROTATE";
  yaw: number;
  pitch: number;
  roll: number;
}

interface PlaneTranslateAction {
  type: "TRANSLATE";
  x: number;
  y: number;
  z: number;
}
interface PlaneResetAction {
  type: "RESET";
}

export type PlaneAction =
  | PlaneRotateAction
  | PlaneTranslateAction
  | PlaneResetAction;

const planeReducer = (
  planeWithErrors: PlaneWithErrors,
  action: PlaneAction
): PlaneWithErrors => {
  const { plane } = planeWithErrors;

  switch (action.type) {
    case "RESET":
      console.log(plane.initialTranslationVector);
      return {
        plane: plane.resetPlane(),
        error: null,
      };
    case "ROTATE":
      const { yaw, pitch, roll } = action;
      return {
        plane: plane.rotatePlane(yaw, pitch, roll),
        error: null,
      };
    case "TRANSLATE":
      const { x, y, z } = action;
      if (plane.translationVector[2] + z < 0) {
        return {
          plane,
          error: {
            title: "Plane can't go below ground :)",
            description: "",
            status: "warning",
          },
        };
      }
      return { plane: plane.translatePlane(x, y, z), error: null };
  }

  return { plane, error: null };
};

export default planeReducer;
