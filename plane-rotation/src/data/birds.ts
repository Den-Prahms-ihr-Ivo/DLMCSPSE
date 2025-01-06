import { Bird } from "../components/state-management/reducers/birdReducer";
import tanne from "../assets/birds/tanne.webp";
import tanne_thumbnail from "../assets/birds/tanne_thumbnail.webp";
import torpedo from "../assets/birds/torpedo.webp";
import torpedo_thumbnail from "../assets/birds/torpedo_thumbnail.webp";
import traurig from "../assets/birds/traurig.webp";
import traurig_thumbnail from "../assets/birds/traurig_thumbnail.webp";
import turmfalke from "../assets/birds/turmfalke.webp";
import turmfalke_thumbnail from "../assets/birds/turmfalke_thumbnail.webp";

const defaultLocation = { x: 0, y: 0, z: 0 };

const birds: Bird[] = [
  {
    id: 1,
    name: "Thomas",
    imageURL: tanne,
    thumbnailURL: tanne_thumbnail,
    color: "#ffc857",
    location: defaultLocation,
  },
  {
    id: 2,
    name: "Paula",
    imageURL: torpedo,
    thumbnailURL: torpedo_thumbnail,
    color: "#db3a34",
    location: defaultLocation,
  },
  {
    id: 3,
    name: "Liv",
    imageURL: traurig,
    thumbnailURL: traurig_thumbnail,
    color: "#177e89",
    location: defaultLocation,
  },
  {
    id: 4,
    name: "Anja",
    imageURL: turmfalke,
    thumbnailURL: turmfalke_thumbnail,
    color: "#dd2804",
    location: defaultLocation,
  },
];

export default birds;
