/**
 * Shall the coordinat System been shown?
 */
export interface showCSAction {
  type: "TOGGLE";
}

const showCSReducer = (toggle: boolean, action: showCSAction): boolean => {
  switch (action.type) {
    case "TOGGLE":
      return !toggle;
  }

  return true;
};

export default showCSReducer;
