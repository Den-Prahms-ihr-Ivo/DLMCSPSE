import React from "react";
import { BirdAction, BirdsWithErrors } from "../reducers/birdReducer";

interface BirdContextType {
  birdsWithErrors: BirdsWithErrors;
  dispatch: React.Dispatch<BirdAction>;
}

const BirdContext = React.createContext<BirdContextType>({} as BirdContextType);

export default BirdContext;
