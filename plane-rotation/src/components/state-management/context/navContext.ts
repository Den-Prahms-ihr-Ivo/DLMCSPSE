import React from "react";
import { RedrawAction } from "../reducers/triggerRedrawReducer";

interface NavContextType {
  active: string;
  dispatch: React.Dispatch<RedrawAction>;
}

const NavContext = React.createContext<NavContextType>(
  {} as NavContextType
);

export default NavContext;
