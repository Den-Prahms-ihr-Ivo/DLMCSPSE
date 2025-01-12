import birdData from "../../../data/birds";
import { Plane } from "../../diagram/plane";
import produce from "immer";

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
  x: number;
  y: number;
  z: number;
  birds: Bird[];
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
      const selectedBirds = birds.map((bo) => {
        const b = structuredClone(bo);

        if (b.id === action.id) {
          b.isSelected = !b.isSelected;
        } else {
          b.isSelected = false;
        }
        return b;
      });

      return { birds: selectedBirds, error: null };

    case "MOVE":
      const selectedBird = action.birds.find((bird) => bird.isSelected);
      if (selectedBird) {
        const { x, y, z } = selectedBird.location;
        const newX = action.x + x;
        const newY = action.y + y;
        const newZ = action.z + z;

        if (newZ < 0)
          return {
            birds,
            error: {
              title: "A Bird can't go below ground level.",
              description: "A bird is not a Hamster :)",
              status: "warning",
            },
          };

        selectedBird.location = { x: newX, y: newY, z: newZ };
        const updatedBirds = birds.map((bird) =>
          bird.isSelected ? selectedBird : bird
        );
        return { birds: updatedBirds, error: null };
      } else
        return {
          birds,
          error: {
            title: "No Bird was selected.",
            description:
              "You have to select a Bird first to be able to move it.",
            status: "warning",
          },
        };
  }

  return { birds, error: null };
};

export default birdReducer;
