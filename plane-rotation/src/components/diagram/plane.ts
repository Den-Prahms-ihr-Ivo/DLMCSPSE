/**
 * Plane class
 */
import { PlotData } from "plotly.js";
import { yawPitchRoll2Matrix } from "../../math/eulerToMatrix";
import {
  buildTransformationMatrix,
  matrixTransformation,
  multiply,
} from "../../math/matrices";
import { Point } from "../../math/types";
import {
  azimuthAngle,
  subtract2Point,
  angleBetween2Points,
} from "../../math/helper";


export class Plane {
  coordinates: Partial<PlotData>;

  // Used these abbreviations to make the arrays easier to look at when they get autoformatted by vsCode.
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

  initialMarbleX = this.marbleX;
  initialMarbleY = this.marbleY;
  initialMarbleZ = this.marbleZ;

  marbleCS_Length = 3;
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

  initialMarbleCS_X = structuredClone(this.marbleCS_X);
  initialMarbleCS_Y = structuredClone(this.marbleCS_Y);
  initialMarbleCS_Z = structuredClone(this.marbleCS_Z);

  foldLinesX = [-this.pL / 2, this.pL / 2, -this.pL / 2];
  foldLinesY = [-this.pS, 0, this.pS];
  foldLinesZ = [-this.pD / 2, -this.pD / 2, -this.pD / 2];

  initialFoldLinesX = structuredClone(this.foldLinesX);
  initialFoldLinesY = structuredClone(this.foldLinesY);
  initialFoldLinesZ = structuredClone(this.foldLinesZ);

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

  // Verschiebungsvektor aller Punkte im Raum
  translationVector: [number, number, number] = [0, 0, 2];

  initialTranslationVector = structuredClone(this.translationVector);

  rotationMatrix: number[][] = [
    //[0, 1, 0],
    //[1, 0, 0],
    //[0, 0, -1],
    [1, 0, 0],
    [0, -1, 0],
    [0, 0, -1],
    //[1, 0, 0],
    //[0, 1, 0],
    //[0, 0, 1],
  ];

  initialRotationMatrix = structuredClone(this.rotationMatrix);

  constructor() {
    // this.coordinates are the coordinates expected by plotly.js
    this.coordinates = {
      type: "mesh3d",
      opacity: 1,
      x: this.initialCoordinates[0],
      y: this.initialCoordinates[1],
      z: this.initialCoordinates[2],
      i: new Float64Array([0, 3, 2, 4]),
      j: new Float64Array([1, 1, 1, 1]),
      k: new Float64Array([2, 4, 5, 5]),

      hovertemplate: "<extra></extra>",
    };

    this.matrixTransform();
  }

  matrixTransform() {
    /**
     * Applies all transformations to the initial Plane, Coordinate System and Marble
     */
    const transformationMatrix = buildTransformationMatrix(
      this.rotationMatrix,
      this.translationVector
    );

    const tmpPlane = matrixTransformation(
      transformationMatrix,
      structuredClone(this.initialCoordinates)
    );

    // Translate Plane
    this.coordinates.x = tmpPlane[0];
    this.coordinates.y = tmpPlane[1];
    this.coordinates.z = tmpPlane[2];

    // Translate Marble
    const tmpMarble = matrixTransformation(transformationMatrix, [
      [this.initialMarbleX],
      [this.initialMarbleY],
      [this.initialMarbleZ],
    ]);

    this.marbleX = tmpMarble[0][0];
    this.marbleY = tmpMarble[1][0];
    this.marbleZ = tmpMarble[2][0];

    // Translate CS
    this.marbleCS_X = matrixTransformation(
      transformationMatrix,
      structuredClone(this.initialMarbleCS_X)
    );
    this.marbleCS_Y = matrixTransformation(
      transformationMatrix,
      structuredClone(this.initialMarbleCS_Y)
    );
    this.marbleCS_Z = matrixTransformation(
      transformationMatrix,
      structuredClone(this.initialMarbleCS_Z)
    );

    // Translate Fold Lines
    let tmpFoldLines = matrixTransformation(transformationMatrix, [
      this.initialFoldLinesX,
      this.initialFoldLinesY,
      this.initialFoldLinesZ,
    ]);

    this.foldLinesX = tmpFoldLines[0];
    this.foldLinesY = tmpFoldLines[1];
    this.foldLinesZ = tmpFoldLines[2];
  }

  resetPlane(): Plane {
    /**
     * Resets plane to its original location and orientation
     */
    this.rotationMatrix = structuredClone(this.initialRotationMatrix);
    this.translationVector = structuredClone(this.initialTranslationVector);

    this.coordinates.x = structuredClone(this.initialCoordinates[0]);
    this.coordinates.y = structuredClone(this.initialCoordinates[1]);
    this.coordinates.z = structuredClone(this.initialCoordinates[2]);

    this.marbleCS_X = structuredClone(this.initialMarbleCS_X);
    this.marbleCS_Y = structuredClone(this.initialMarbleCS_Y);
    this.marbleCS_Z = structuredClone(this.initialMarbleCS_Z);

    this.foldLinesX = structuredClone(this.initialFoldLinesX);
    this.foldLinesY = structuredClone(this.initialFoldLinesY);
    this.foldLinesZ = structuredClone(this.initialFoldLinesZ);

    this.matrixTransform();
    return this;
  }

  rotatePlane(yaw: number, pitch: number, roll: number) {
    this.rotationMatrix = multiply(
      this.rotationMatrix,
      yawPitchRoll2Matrix(yaw, pitch, roll)
    );

    this.matrixTransform();
    return this;
  }

  translatePlane(x: number, y: number, z: number): Plane {
    this.translationVector[0] += x;
    this.translationVector[1] += y;
    this.translationVector[2] += z;

    this.matrixTransform();
    return this;
  }

  getAngle2North(): number {
    /**
     * Calculates the angle between the planes x-Axis and the x-Axis of the ground coordinate system.
     */
    const A = {
      x: this.marbleCS_X[0][1],
      y: this.marbleCS_X[1][1],
      z: this.marbleCS_X[2][1],
    };
    const B = { x: this.marbleX, y: this.marbleY, z: this.marbleZ };

    return azimuthAngle(A, B);
  }

  getHorizontalDistance2Plane(p: Point): number {
    /**
     * Horizontal distance between a point in space and the planes marble
     */
    return Math.sqrt(
      this.getDistance2Plane(p) ** 2 - this.getVerticalDistance2Plane(p) ** 2
    );
  }
  getVerticalDistance2Plane(p: Point): number {
    /**
     * Vertical distance between a point in space and the planes marble
     */
    return Math.abs(this.marbleZ - p.z);
  }

  getDistance2Plane(p: Point): number {
    /**
     * Direct distance between a point in space and the planes marble
     */
    return Math.sqrt(
      (p.x - this.marbleX) ** 2 +
        (p.y - this.marbleY) ** 2 +
        (p.z - this.marbleZ) ** 2
    );
  }

  getElevationAngle2Threat(p: Point): number {
    // #1 Move to Center
    const marble = { x: this.marbleX, y: this.marbleY, z: this.marbleZ };
    p = subtract2Point(p, marble);

    // #2 Calc Angle between x-Axis and threat
    const tmp = angleBetween2Points({ x: 1, y: 0, z: 0 }, p);

    return p.z > 0 ? tmp : -tmp;
  }

  getAngle2Plane(location: Point): number {
    /**
     * Angle between a point in space and the planes x-Axis
     */
    const center = { x: this.marbleX, y: this.marbleY, z: this.marbleZ };

    const point = subtract2Point(
      { x: location.x, y: location.y, z: location.z },
      center
    );

    const rotatedPoint = multiply(this.rotationMatrix, [
      [point.x],
      [point.y],
      [point.z],
    ]);

    const P = {
      x: rotatedPoint[0][0],
      y: rotatedPoint[1][0],
      z: rotatedPoint[2][0],
    };

    return azimuthAngle(P);
  }

  getDistanceFromGround(): number {
    return this.marbleZ;
  }
}
