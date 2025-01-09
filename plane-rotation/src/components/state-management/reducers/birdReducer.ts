import { ToastProps } from "@chakra-ui/react";
import birdData from "../../../data/birds";
import { Plane } from "../../diagram/plane";
import { Dispatch, SetStateAction } from "react";

export interface BirdsWithErrors {
  birds: Bird[];
  error: null | {
    title: string;
    description: string;
    status: "error" | "info" | "warning" | "success" | "loading" | undefined;
  };
}
export interface Bird {
  id: number;
  name: string;
  imageURL: string;
  thumbnailURL: string;
  color: string;
  isSelected: boolean;
  location: { x: number; y: number; z: number };
}

interface AddAction {
  type: "ADD";
  x: number;
  y: number;
  z: number;
  plane: Plane;
}

interface SelectAction {
  type: "SELECT";
  id: number;
}

interface MoveAction {
  type: "MOVE";
  id: number;
  x: number;
  y: number;
  z: number;
}

interface RemoveAction {
  type: "REMOVE";
  id: number;
}

export type BirdAction = AddAction | RemoveAction | SelectAction | MoveAction;

function getRandomBird(birds: Bird[]): Bird | null {
  let usedIndices = birds.map((b) => b.id);
  let tmp = birdData.filter((b) => !usedIndices.includes(b.id));

  if (tmp.length < 1) return null;

  return tmp[Math.floor(Math.random() * tmp.length)];
}

const birdReducer = (
  birdsWithErrors: BirdsWithErrors,
  action: BirdAction
): BirdsWithErrors => {
  const { birds } = birdsWithErrors;

  switch (action.type) {
    case "ADD":
      const location = { x: action.x, y: action.y, z: action.z };

      if (action.plane.getHorizontalDistance2Plane(location) > 100) {
        return {
          birds: birds,
          error: {
            title: "Bird is too far from the plane.",
            description:
              "The horizontal distance from the bloodthirsty, deceitful and vicious bird to the plane has to be less than 100m.",
            status: "warning",
          },
        };
      }

      const tmp = getRandomBird(birds);

      if (tmp === null)
        return {
          birds,
          error: {
            title: "There are no more birds :(",
            description:
              "Due to habitat loss, changes in food supply, or competition from newly introduced species, there are no more birds to add...",
            status: "warning",
          },
        };

      tmp.location = location;
      return { birds: [tmp, ...birds], error: null };
    case "REMOVE":
      return {
        birds: birds.filter((bird) => bird.id !== action.id),
        error: null,
      };
    case "SELECT":
      console.log("Selected Bird:  ", action.id);
      // TODO!!!! Update with Immer
      // Set isSelected to True
      return { birds, error: null };
    case "MOVE":
      // TODO!!!! Update with Immer
      // Update Location
      return { birds, error: null };
  }

  return { birds, error: null };
};

export default birdReducer;
