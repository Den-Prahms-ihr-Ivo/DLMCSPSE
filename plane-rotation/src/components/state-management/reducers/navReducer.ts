/**
 * Which is the active nav item?
 */
export interface NavAction {
  type: "ACTIVATE";
}

const NavReducer = (tmp: string, action: NavAction): string => {
  switch (action.type) {
    case "ACTIVATE":
      return tmp;
  }

  return "";
};

export default NavReducer;
