import birdData from "../../../data/birds";
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

const birdReducer = (birds: Bird[], action: BirdAction): Bird[] => {
  switch (action.type) {
    case "ADD":
      console.log("Adding Bird!! :)");
      const tmp = getRandomBird(birds);
      if (tmp === null) return birds;

      tmp.location = { x: action.x, y: action.y, z: action.z };
      return [tmp, ...birds];
    case "REMOVE":
      return birds.filter((bird) => bird.id !== action.id);
    case "SELECT":
      console.log("Selected Bird:  ", action.id);
      // TODO!!!! Update with Immer
      // Set isSelected to True
      return birds;
    case "MOVE":
      // TODO!!!! Update with Immer
      // Update Location
      return birds;
  }

  return birds;
};

export default birdReducer;
