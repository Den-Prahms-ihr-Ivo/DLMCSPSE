export interface RedrawAction {
  type: "TRIGGER";
}

const triggerRedrawReducer = (tmp: number, action: RedrawAction): number => {
  switch (action.type) {
    case "TRIGGER":
      return tmp + 1;
  }

  return 0;
};

export default triggerRedrawReducer;
