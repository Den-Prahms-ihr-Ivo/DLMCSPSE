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

export type PlaneAction = PlaneRotateAction | PlaneTranslateAction;

const planeReducer = (
  planeWithErrors: PlaneWithErrors,
  action: PlaneAction
): PlaneWithErrors => {
  const { plane } = planeWithErrors;

  switch (action.type) {
    case "ROTATE":
      const { yaw, pitch, roll } = action;
      console.log(yaw, pitch, roll);
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
