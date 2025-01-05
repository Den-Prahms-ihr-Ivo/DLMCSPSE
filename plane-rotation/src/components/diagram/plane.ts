import { Datum, PlotData } from "plotly.js";

function multiply(a: number[][], b: number[][]) {
  var aNumRows = a.length,
    aNumCols = a[0].length,
    bNumCols = b[0].length,
    m = new Array(aNumRows); // initialize array of rows
  for (let r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0; // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}

function deepCopy(array: number[][]) {
  return JSON.parse(JSON.stringify(array));
}

function translateMap(
  value: Datum | Datum[] | Datum[][],
  offset: number
): number {
  /**
   *  Since I din't find a good way to tell the typescript compiler that I will get a number and it will always be defined,
   * I had to add these assertions and encapsulate them into a function to shut him up.
   */
  if (value !== undefined && typeof value === "number") return value + offset;
  return 0;
}

export class Plane {
  coordinates: Partial<PlotData>;

  // Used these abbreviations to make the arrays easier to look at when they get autoformatted.
  // Plane Width
  pW = 3.0;
  // Plane Length
  pL = 7.0;
  // Plane Space
  pS = 0.5;
  // plane Depth
  pD = 1.4;

  marbleX = 0;
  marbleY = 0;
  marbleZ = -1.3;
  marbleCS_Length = 2;
  marbleCS_ArrowLength = 0.5;

  // Coordinate System of the Marble
  // X-Axis
  marbleCS_X = [
    [
      0,
      this.marbleCS_Length,
      this.marbleCS_Length - this.marbleCS_ArrowLength,
      this.marbleCS_Length,
      this.marbleCS_Length - this.marbleCS_ArrowLength,
    ],
    [0, 0, this.marbleCS_ArrowLength, 0, -this.marbleCS_ArrowLength],
    [this.marbleZ, this.marbleZ, this.marbleZ, this.marbleZ, this.marbleZ],
  ];
  // Y-Axis
  marbleCS_Y = [
    [0, 0, this.marbleCS_ArrowLength, 0, -this.marbleCS_ArrowLength],
    [
      0,
      this.marbleCS_Length,
      this.marbleCS_Length - this.marbleCS_ArrowLength,
      this.marbleCS_Length,
      this.marbleCS_Length - this.marbleCS_ArrowLength,
    ],
    [this.marbleZ, this.marbleZ, this.marbleZ, this.marbleZ, this.marbleZ],
  ];
  // Z-Axis
  marbleCS_Z = [
    [0, 0, 0, 0, 0],
    [0, 0, this.marbleCS_ArrowLength, 0, -this.marbleCS_ArrowLength],
    [
      this.marbleZ,
      this.marbleCS_Length + this.marbleZ,
      this.marbleCS_Length + this.marbleZ - this.marbleCS_ArrowLength,
      this.marbleCS_Length + this.marbleZ,
      this.marbleCS_Length + this.marbleZ - this.marbleCS_ArrowLength,
    ],
  ];

  /*
    expect(x).toEqual([-3.5, 3.5, -3.5, -3.5, -3.5, -3.5]);
    expect(y).toEqual([-3, 0, -0.5, 3, 0.5, 0]);
    expect(z).toEqual([-0.7, -0.7, -0.7, -0.7, -0.7, 0.7]);
   */
  initialCoordinates = [
    [
      -this.pL / 2,
      this.pL / 2,
      -this.pL / 2,
      -this.pL / 2,
      -this.pL / 2,
      -this.pL / 2,
    ],
    [-this.pW, 0.0, -this.pS, this.pW, this.pS, 0.0],
    [
      -this.pD / 2,
      -this.pD / 2,
      -this.pD / 2,
      -this.pD / 2,
      -this.pD / 2,
      this.pD / 2,
    ],
  ];

  // Verschiebungs Vektor aller Punkte im Raum
  translationVector: [number, number, number] = [0, 0, 0];

  rotationMatrix: number[][] = [
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, -1],
    //[1, 0, 0],
    //[0, 1, 0],
    //[0, 0, 1],
  ];

  constructor() {
    this.coordinates = {
      type: "mesh3d",
      opacity: 0.8,
      x: this.initialCoordinates[0],
      y: this.initialCoordinates[1],
      z: this.initialCoordinates[2],
      i: new Float64Array([0, 3, 2, 4]),
      j: new Float64Array([1, 1, 1, 1]),
      k: new Float64Array([2, 4, 5, 5]),
    };

    // TODO: Marbel und Coordinate System sollen Teil des Fulgzeuges sein.
    this.matrixTransform();
  }

  matrixTransform() {
    let M = structuredClone(this.rotationMatrix);
    M[0].push(this.translationVector[0]);
    M[1].push(this.translationVector[1]);
    M[2].push(this.translationVector[2]);

    M = M.concat([[0, 0, 0, 1]]);

    let tmpPlane = structuredClone(this.initialCoordinates);
    tmpPlane = multiply(M, tmpPlane.concat([[1, 1, 1, 1, 1, 1]]));

    // Translate Plane
    this.coordinates.x = tmpPlane[0];
    this.coordinates.y = tmpPlane[1];
    this.coordinates.z = tmpPlane[2];

    // Translate Marble
    let tmpMarble = multiply(M, [
      [this.marbleX],
      [this.marbleY],
      [this.marbleZ],
      [1],
    ]);

    this.marbleX = tmpMarble[0][0];
    this.marbleY = tmpMarble[1][0];
    this.marbleZ = tmpMarble[2][0];

    // Translate CS
    let tmpCS_X = structuredClone(this.marbleCS_X);
    tmpCS_X = multiply(M, tmpCS_X.concat([[1, 1, 1, 1, 1]]));
    this.marbleCS_X = tmpCS_X.slice(0, 3);

    let tmpCS_Y = structuredClone(this.marbleCS_Y);
    tmpCS_Y = multiply(M, tmpCS_Y.concat([[1, 1, 1, 1, 1]]));
    this.marbleCS_Y = tmpCS_Y.slice(0, 3);

    let tmpCS_Z = structuredClone(this.marbleCS_Z);
    tmpCS_Z = multiply(M, tmpCS_Z.concat([[1, 1, 1, 1, 1]]));
    this.marbleCS_Z = tmpCS_Z.slice(0, 3);
  }

  translatePlane(x: number, y: number, z: number) {
    this.translationVector[0] += x;
    this.translationVector[1] += y;
    this.translationVector[2] += z;

    this.matrixTransform();
  }
}
