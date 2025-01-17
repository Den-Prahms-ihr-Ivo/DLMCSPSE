import React from "react";
import { showCSAction } from "../reducers/showCSReducer";

interface ShowCsActionType {
  toggle: boolean;
  dispatch: React.Dispatch<showCSAction>;
}

const ShowCsContext = React.createContext<ShowCsActionType>(
  {} as ShowCsActionType
);

export default ShowCsContext;
