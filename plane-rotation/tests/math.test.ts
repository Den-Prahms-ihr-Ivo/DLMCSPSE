import { it, expect, describe, beforeAll } from "vitest";
import {
  cosineDegrees,
  sineDegrees,
  yawPitchRoll2Matrix,
} from "../src/math/eulerToMatrix";
import { Plane } from "../src/components/diagram/plane";
import {
  azimuthAngle,
  calcAngleBetweenMarbleAndPoint,
  crossProduct,
  dotProduct,
  testAngle,
  vectorLength,
} from "../src/math/helper";
import { Point } from "../src/math/types";

function compare2Points(A: Point, B: Point) {
  expect(A.x).toBeCloseTo(B.x);
  expect(A.y).toBeCloseTo(B.y);
  expect(A.z).toBeCloseTo(B.z);
}

describe("Euler 2 Matrix", () => {
  it.each([
    { degrees: 90, expected: 0 },
    { degrees: -90, expected: 0 },
    { degrees: 0, expected: 1 },
    { degrees: 180, expected: -1 },
    { degrees: 270, expected: 0 },
  ])("cosine of $degrees should be $expected", ({ degrees, expected }) => {
    expect(cosineDegrees(degrees)).toBeCloseTo(expected);
  });

  it.each([
    { degrees: 90, expected: 1 },
    { degrees: -90, expected: -1 },
    { degrees: 0, expected: 0 },
    { degrees: 180, expected: 0 },
    { degrees: 270, expected: -1 },
  ])("sine of $degrees should be $expected", ({ degrees, expected }) => {
    expect(sineDegrees(degrees)).toBeCloseTo(expected);
  });

  it.each([
    {
      yaw: 0,
      pitch: 0,
      roll: 0,
      expected: [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
    },
    {
      yaw: 45,
      pitch: 90,
      roll: 0,
      expected: [
        [0, -0.7071, 0.7071],
        [0, 0.7071, 0.7071],
        [-1, 0, 0],
      ],
    },
    {
      yaw: 0,
      pitch: 0,
      roll: 90,
      expected: [
        [1, 0, 0],
        [0, 0, -1],
        [0, 1, 0],
      ],
    },
    {
      yaw: 0,
      pitch: 0,
      roll: -90,
      expected: [
        [1, 0, 0],
        [0, 0, 1],
        [0, -1, 0],
      ],
    },
    {
      yaw: 0,
      pitch: 90,
      roll: 0,
      expected: [
        [0, 0, 1],
        [0, 1, 0],
        [-1, 0, 0],
      ],
    },
    {
      yaw: 0,
      pitch: -90,
      roll: 0,
      expected: [
        [0, 0, -1],
        [0, 1, 0],
        [1, 0, 0],
      ],
    },
    {
      yaw: 90,
      pitch: 0,
      roll: 0,
      expected: [
        [0, -1, 0],
        [1, 0, 0],
        [0, 0, 1],
      ],
    },
    {
      yaw: -90,
      pitch: 0,
      roll: 0,
      expected: [
        [0, 1, 0],
        [-1, 0, 0],
        [0, 0, 1],
      ],
    },
    {
      yaw: 0,
      pitch: 0,
      roll: 45,
      expected: [
        [1.0, 0.0, 0.0],
        [0.0, 0.7071068, -0.7071068],
        [0.0, 0.7071068, 0.7071068],
      ],
    },
    {
      yaw: 45,
      pitch: 45,
      roll: 45,
      expected: [
        [0.5, -0.1464, 0.8536],
        [0.5, 0.8536, -0.1464],
        [-0.7071, 0.5, 0.5],
      ],
    },
  ])(
    "should calculate $yaw, $pitch, $roll correctly",
    ({ yaw, pitch, roll, expected }) => {
      const actual = yawPitchRoll2Matrix(yaw, pitch, roll);

      const numRows = actual.length;
      const numCols = actual[0].length;

      expect(numRows).toBe(expected.length);
      expect(numCols).toBe(expected[0].length);

      for (var i = 0; i < numRows; i++) {
        for (var j = 0; j < numCols; j++) {
          expect(expected[i][j]).toBeCloseTo(actual[i][j]);
        }
      }
    }
  );
});

describe("DotProduct", () => {
  it.each([
    {
      pointA: { x: 1, y: 2, z: 3 },
      pointB: { x: 4, y: -5, z: 6 },
      expected: 12,
    },
    {
      pointA: { x: 8, y: -2, z: 16 },
      pointB: { x: -9, y: 8, z: 12 },
      expected: 104,
    },
  ])("should return $expected", ({ pointA, pointB, expected }) => {
    expect(dotProduct(pointA, pointB)).toBe(expected);
  });
});

describe("VectorLength", () => {
  it.each([
    {
      p: { x: 2, y: 4, z: 4 },
      expected: 6,
    },
    {
      p: { x: -1, y: 0, z: -3 },
      expected: Math.sqrt(10),
    },
    {
      p: { x: -1, y: -3, z: 4 },
      expected: Math.sqrt(26),
    },
  ])("should return $expected", ({ p, expected }) => {
    expect(vectorLength(p)).toBeCloseTo(expected);
  });
});

describe("CrossProduct", () => {
  it.each([
    {
      pointA: { x: 2, y: 4, z: -1 },
      pointB: { x: 10, y: 25, z: 20 },
      expected: { x: 105, y: -50, z: 10 },
    },
    {
      pointA: { x: 2, y: 3, z: 4 },
      pointB: { x: 5, y: 6, z: 7 },
      expected: { x: -3, y: 6, z: -3 },
    },
  ])("should return $expected", ({ pointA, pointB, expected }) => {
    const result = crossProduct(pointA, pointB);
    compare2Points(result, expected);
  });
});

describe("AzimuthAngle", () => {
  const center = { x: 7, y: 7, z: 0 };
  it.each([
    {
      point: { x: 7, y: 3, z: 0 },
      expected: -90,
    },
    {
      point: { x: 20, y: 7, z: 0 },
      expected: 0,
    },
    {
      point: { x: 7, y: 10, z: 0 },
      expected: 90,
    },
    {
      point: { x: 3, y: 7, z: 0 },
      expected: 180,
    },
    {
      point: { x: 6.9, y: 3, z: 0 },
      expected: -91.4321,
    },
    {
      point: { x: 7.1, y: 3, z: 0 },
      expected: -88.5679,
    },
  ])("should return $expected", ({ point, expected }) => {
    expect(azimuthAngle(point, center)).toBeCloseTo(expected);
  });
});

describe("Relative Angle 2 Plane", () => {
  it.each([
    {
      plane_X: 1,
      plane_Y: 1,
      threat_X: -1,
      threat_Y: 1,
      expected: 180,
    },
    {
      plane_X: 1,
      plane_Y: 0,
      threat_X: -1,
      threat_Y: 1,
      expected: -153.4349,
    },
    {
      plane_X: 0,
      plane_Y: 0,
      threat_X: -1,
      threat_Y: 1,
      expected: -135,
    },
    {
      plane_X: -1,
      plane_Y: 1,
      threat_X: 0,
      threat_Y: 0,
      expected: 45,
    },
    {
      plane_X: -1,
      plane_Y: 1,
      threat_X: 0,
      threat_Y: 1,
      expected: 0,
    },
    {
      plane_X: -1,
      plane_Y: 1,
      threat_X: -4,
      threat_Y: 1,
      expected: 180,
    },
  ])(
    "should return $expected°. For Threat at ($threat_X,$threat_Y) and plane af($plane_X,$plane_Y)",
    ({ plane_X, plane_Y, threat_X, threat_Y, expected }) => {
      const p = new Plane();
      p.translatePlane(plane_X, plane_Y, 0);

      expect(
        p.getAngle2Plane({ x: threat_X, y: threat_Y, z: 9999 })
      ).toBeCloseTo(expected);
    }
  );
});

describe("Plane Angle 2 North", () => {
  it("should return 0", () => {
    const p = new Plane();
    expect(p.getAngle2North()).toBeCloseTo(0);
  });

  it("should return 0", () => {
    const p = new Plane();
    p.rotatePlane(45, 0, 0);
    expect(p.getAngle2North()).toBeCloseTo(-45);
  });
});

/*
describe("Dihedral Angle", () => {
  it.each([
    {
      marbleVector: { A: { x: 0, y: 0, z: 1 }, B: { x: 1, y: 0, z: 1 } },
      threat: { x: 0, y: 1, z: 1 },
      expected: 90,
    },
    {
      marbleVector: { A: { x: 0, y: 0, z: 1 }, B: { x: 1, y: 1, z: 1 } },
      threat: { x: 0, y: 1, z: 1 },
      expected: 45,
    },
    {
      marbleVector: { A: { x: 0, y: 0, z: 1 }, B: { x: -1, y: 1, z: 1 } },
      threat: { x: 0, y: 1, z: 1 },
      expected: 45,
    },
    {
      marbleVector: { A: { x: 0, y: 0, z: 1 }, B: { x: 1, y: 0, z: 1 } },
      threat: { x: -1, y: 0, z: 1 },
      expected: 0,
    },
  ])("should return $expected", ({ marbleVector, threat, expected }) => {
    expect(calcAngleBetweenMarbleAndPoint(marbleVector, threat)).toBeCloseTo(
      expected
    );
  });
});*/
