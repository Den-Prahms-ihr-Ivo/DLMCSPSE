import { Bird } from "../components/state-management/reducers/birdReducer";
import tanne from "../assets/birds/tanne.webp";
import tanne_thumbnail from "../assets/birds/tanne_thumbnail.webp";
import torpedo from "../assets/birds/torpedo.webp";
import torpedo_thumbnail from "../assets/birds/torpedo_thumbnail.webp";
import traurig from "../assets/birds/traurig.webp";
import traurig_thumbnail from "../assets/birds/traurig_thumbnail.webp";
import turmfalke from "../assets/birds/turmfalke.webp";
import turmfalke_thumbnail from "../assets/birds/turmfalke_thumbnail.webp";
import ahhhh from "../assets/birds/ahhhh.webp";
import ahhhh_thumbnail from "../assets/birds/ahhhh_thumbnail.webp";
import ast from "../assets/birds/ast.webp";
import ast_thumbnail from "../assets/birds/ast_thumbnail.webp";
import demokratiefogel from "../assets/birds/demokratiefogel.webp";
import demokratiefogel_thumbnail from "../assets/birds/demokratiefogel_thumbnail.webp";
import upskirt from "../assets/birds/upskirt.webp";
import upskirt_thumbnail from "../assets/birds/upskirt_thumbnail.webp";
import crow from "../assets/birds/crow-2.webp";
import crow_thumbnail from "../assets/birds/crow_thumbnail.webp";
import ente from "../assets/birds/ente.webp";
import ente_thumbnail from "../assets/birds/ente_thumbnail.webp";
import eule_1 from "../assets/birds/eule_1.webp";
import eule_1_thumbnail from "../assets/birds/eule_1_thumbnail.webp";

const defaultLocation = { x: 0, y: 0, z: 0 };

const birds: Bird[] = [
  {
    id: 1,
    name: "Thomas",
    imageURL: tanne,
    thumbnailURL: tanne_thumbnail,
    color: "#ffc857",
    location: defaultLocation,
    isSelected: false,
  },
  {
    id: 2,
    name: "Paula",
    imageURL: torpedo,
    thumbnailURL: torpedo_thumbnail,
    color: "#db3a34",
    location: defaultLocation,
    isSelected: false,
  },
  {
    id: 3,
    name: "Liv",
    imageURL: traurig,
    thumbnailURL: traurig_thumbnail,
    color: "#177e89",
    location: defaultLocation,
    isSelected: false,
  },
  {
    id: 4,
    name: "Anja",
    imageURL: turmfalke,
    thumbnailURL: turmfalke_thumbnail,
    color: "#dd2804",
    location: defaultLocation,
    isSelected: false,
  },
  {
    id: 5,
    name: "Nora",
    imageURL: ahhhh,
    thumbnailURL: ahhhh_thumbnail,
    color: "#321951",
    location: defaultLocation,
    isSelected: false,
  },
  {
    id: 6,
    name: "Emil",
    imageURL: ast,
    thumbnailURL: ast_thumbnail,
    color: "#B22E37",
    location: defaultLocation,
    isSelected: false,
  },
  {
    id: 7,
    name: "Sophie & Wiliam",
    imageURL: demokratiefogel,
    thumbnailURL: demokratiefogel_thumbnail,
    color: "#f68318",
    location: defaultLocation,
    isSelected: false,
  },
  {
    id: 8,
    name: "Maja",
    imageURL: upskirt,
    thumbnailURL: upskirt_thumbnail,
    color: "#08652C",
    location: defaultLocation,
    isSelected: false,
  },
  {
    id: 9,
    name: "Odin",
    imageURL: crow,
    thumbnailURL: crow_thumbnail,
    color: "#030C09",
    location: defaultLocation,
    isSelected: false,
  },
  {
    id: 10,
    name: "Officer Cuddles",
    imageURL: ente,
    thumbnailURL: ente_thumbnail,
    color: "#055ccc",
    location: defaultLocation,
    isSelected: false,
  },
  {
    id: 11,
    name: "Stan",
    imageURL: eule_1,
    thumbnailURL: eule_1_thumbnail,
    color: "#633090",
    location: defaultLocation,
    isSelected: false,
  },
];
/**
 * #80A416
 * #08652C
 * #fd1d75
 * #055ccc
 * #09d8c7
 * #313575
 *  #633090
 *  #f68318
 *  #FDC005
 */

export default birds;
