import React from "react";
import { PlaneAction } from "../reducers/planeReducer";
import { Plane } from "../../diagram/plane";

interface PlaneContextType {
  plane: Plane;
  dispatch: React.Dispatch<PlaneAction>;
}

const PlaneContext = React.createContext<PlaneContextType>(
  {} as PlaneContextType
);

export default PlaneContext;
