import { useContext } from "react";
import { Plane } from "../../diagram/plane";
import RedrawContext from "../context/redrawContext";

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

type PlaneAction = PlaneRotateAction | PlaneTranslateAction;

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
/**
 * Gude Carsten,
 * ich wollte mich einfach mal für mein Verhalten während der WG Zeit entschuldigen!
 * Das war kindisch und nicht ok. Das ist mir neulich klar geworden. Höchstwahrscheinlich war ich einfach eifersüchtig,
 * dass Maria plötzlich so viel Aufmerksamkeit bekam.
 *
 * All
 */
