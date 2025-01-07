import birdData from "../../../data/birds";
export interface Bird {
  id: number;
  name: string;
  imageURL: string;
  thumbnailURL: string;
  color: string;
  location: { x: number; y: number; z: number };
}

interface AddAction {
  type: "ADD";
  x: number;
  y: number;
  z: number;
}

interface RemoveAction {
  type: "REMOVE";
  id: number;
}

export type BirdAction = AddAction | RemoveAction;

function getRandomBird(birds: Bird[]): Bird | null {
  const usedIndices = birds.map((b) => b.id);
  const tmp = birdData.filter((b) => !(b.id in usedIndices));

  if (tmp.length < 1) return null;

  return tmp[Math.floor(Math.random() * tmp.length)];
}

const birdReducer = (birds: Bird[], action: BirdAction): Bird[] => {
  switch (action.type) {
    case "ADD":
      const tmp = getRandomBird(birds);
      if (tmp === null) return birds;

      tmp.location = { x: action.x, y: action.y, z: action.z };
      return [tmp, ...birds];
    case "REMOVE":
      return birds.filter((bird) => bird.id !== action.id);
  }

  return birds;
};

export default birdReducer;
