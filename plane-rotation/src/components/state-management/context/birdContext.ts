import React from "react";
import { Bird, BirdAction } from "../reducers/birdReducer";

interface BirdContextType {
  birds: Bird[];
  dispatch: React.Dispatch<BirdAction>;
}

const BirdContext = React.createContext<BirdContextType>({} as BirdContextType);

export default BirdContext;
