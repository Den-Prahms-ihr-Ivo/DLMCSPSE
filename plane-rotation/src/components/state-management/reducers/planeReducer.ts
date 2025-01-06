import { Plane } from "../../diagram/plane";

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

const planeReducer = (plane: Plane, action: PlaneAction): Plane => {
  // NE, das ist quatsch!! Hier useContext!!

  switch (action.type) {
    case "ROTATE":
      // ADDING:
      // return [bird, ...state]
      const { yaw, pitch, roll } = action;
      return plane.rotatePlane(yaw, pitch, roll);
    case "TRANSLATE":
      const { x, y, z } = action;
      return plane.translatePlane(x, y, z);
  }

  return plane;
};

export default planeReducer;
