import React from "react";
import { PlaneAction, PlaneWithErrors } from "../reducers/planeReducer";
import { Plane } from "../../diagram/plane";

interface PlaneContextType {
  planeWithErrors: PlaneWithErrors;
  dispatch: React.Dispatch<PlaneAction>;
}

const PlaneContext = React.createContext<PlaneContextType>(
  {} as PlaneContextType
);

export default PlaneContext;
