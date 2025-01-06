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
  bird: Bird;
}

interface RemoveAction {
  type: "REMOVE";
  id: number;
}

export type BirdAction = AddAction | RemoveAction;

const birdReducer = (birds: Bird[], action: BirdAction): Bird[] => {
  switch (action.type) {
    case "ADD":
      // ADDING:
      return [action.bird, ...birds];
    case "REMOVE":
      return birds.filter((bird) => bird.id !== action.id);
  }

  return birds;
};

export default birdReducer;
