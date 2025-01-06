import React from "react";
import { RedrawAction } from "../reducers/triggerRedrawReducer";

interface RedrawContextType {
  trigger: number;
  dispatch: React.Dispatch<RedrawAction>;
}

const RedrawContext = React.createContext<RedrawContextType>(
  {} as RedrawContextType
);

export default RedrawContext;
