import { it, expect, describe, beforeAll } from "vitest";
import { Plane } from "../src/components/diagram/plane";
import {
  buildTransformationMatrix,
  matrixTransformation,
  multiply,
} from "../src/math/matrices";

function compareMatrix(actual: number[][], expected: number[][]) {
  const numRows = actual.length;
  const numCols = actual[0].length;

  for (var i = 0; i < numRows; i++) {
    for (var j = 0; j < numCols; j++) {
      expect(actual[i][j]).toBeCloseTo(expected[i][j]);
    }
  }
}

describe("Matrix multiplication", () => {
  it.each([
    {
      A: [
        [5, 3, 1],
        [-2, 2, 4],
        [7, 0, -1],
      ],
      B: [[2], [9], [-3]],
      expected: [[34], [2], [17]],
    },
    {
      A: [
        [2, 7, 3],
        [1, 5, 8],
        [0, 4, 1],
      ],
      B: [
        [3, 0, 1],
        [2, 1, 0],
        [1, 2, 4],
      ],
      expected: [
        [23, 13, 14],
        [21, 21, 33],
        [9, 6, 4],
      ],
    },
    {
      A: [
        [2, 3],
        [4, 6],
        [1, 9],
        [5, 2],
      ],
      B: [
        [1, 6, 4, 2],
        [3, 7, 8, 1],
      ],
      expected: [
        [11, 33, 32, 7],
        [22, 66, 64, 14],
        [28, 69, 76, 11],
        [11, 44, 36, 12],
      ],
    },
  ])("should b", ({ A, B, expected }) => {
    const actual = multiply(A, B);

    const numRows = actual.length;
    const numCols = actual[0].length;

    expect(numRows).toBe(expected.length);
    expect(numCols).toBe(expected[0].length);

    for (var i = 0; i < numRows; i++) {
      for (var j = 0; j < numCols; j++) {
        expect(actual[i][j]).toBeCloseTo(expected[i][j]);
      }
    }
  });
});

describe("Plane", () => {
  let plane: Plane;

  beforeAll(() => {
    plane = new Plane();
  });

  it("should be transformed to center position", () => {
    // AAA Pattern.
    // Arrange - Set Up Environment

    // Act - Perfom Action
    const x = plane.coordinates.x;
    const y = plane.coordinates.y;
    const z = plane.coordinates.z;

    // Assert - Confirm
    expect(x).toEqual([-3.5, 3.5, -3.5, -3.5, -3.5, -3.5]);
    expect(y).toEqual([3, 0, 0.5, -3, -0.5, 0]);
    expect(z).toEqual([2.7, 2.7, 2.7, 2.7, 2.7, 1.3]);
  });

  it("should reset the plane", () => {
    plane.translatePlane(1, 2, 3);

    let x = plane.coordinates.x;
    let y = plane.coordinates.y;
    let z = plane.coordinates.z;

    expect(x).not.toEqual([-3.5, 3.5, -3.5, -3.5, -3.5, -3.5]);
    expect(y).not.toEqual([3, 0, 0.5, -3, -0.5, 0]);
    expect(z).not.toEqual([2.7, 2.7, 2.7, 2.7, 2.7, 1.3]);

    plane.resetPlane();

    x = plane.coordinates.x;
    y = plane.coordinates.y;
    z = plane.coordinates.z;

    expect(x).toEqual([-3.5, 3.5, -3.5, -3.5, -3.5, -3.5]);
    expect(y).toEqual([3, 0, 0.5, -3, -0.5, 0]);
    expect(z).toEqual([2.7, 2.7, 2.7, 2.7, 2.7, 1.3]);
  });

  it.each([
    { trans: { x: 0, y: 0, z: 0 }, expected: 3.3 },
    { trans: { x: 1, y: 1, z: 0 }, expected: 3.3 },
    { trans: { x: 0, y: 0, z: 1 }, expected: 4.3 },
  ])("should return $expected m from ground", ({ trans, expected }) => {
    plane.translatePlane(trans.x, trans.y, trans.z);

    expect(plane.getDistanceFromGround()).toBeCloseTo(expected);
  });
});

describe("Matrix Transform", () => {
  it.each([
    {
      rotationMatrix: [
        [1, 0, 0],
        [0, -1, 0],
        [0, 0, -1],
      ],
      translationVector: [1, 0, 0],
      matrix: [[1], [2], [3]],
      expected: [[2], [-2], [-3]],
      description: "Rotation around X axis and transform it x about 1.",
    },
    {
      rotationMatrix: [
        [1.0, 0, 0],
        [0, 0.866, -0.5],
        [0, 0.5, 0.866],
      ],
      translationVector: [1, 2, 3],
      matrix: [
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      expected: [
        [2, 2],
        [2.232, 2.232],
        [6.598, 6.598],
      ],
      description: "Rotation 30° around X axis and transform it afterwards.",
    },
  ])(
    "should rotate and transform $name",
    ({ rotationMatrix, translationVector, matrix, expected }) => {
      const transformationMatrix = buildTransformationMatrix(
        rotationMatrix,
        translationVector
      );
      const result = matrixTransformation(transformationMatrix, matrix);
      compareMatrix(result, expected);
    }
  );
});

describe("getDistance2Plane", () => {
  it("should return 2.586", () => {
    const p = new Plane();
    expect(p.getDistance2Plane({ x: 2, y: 1, z: 2 })).toBeCloseTo(2.586);
  });
  it("should return 3.448", () => {
    const p = new Plane();
    p.translatePlane(2, 2, 2);
    expect(p.getDistance2Plane({ x: 2, y: 1, z: 2 })).toBeCloseTo(3.448);
  });
});

describe("getVerticalDistance2Plane", () => {
  it("should return 1.3", () => {
    const p = new Plane();
    expect(p.getVerticalDistance2Plane({ x: 2, y: 1, z: 2 })).toBeCloseTo(1.3);
  });
  it("should return 3.3", () => {
    const p = new Plane();
    p.translatePlane(2, 2, 2);
    expect(p.getVerticalDistance2Plane({ x: 2, y: 1, z: 2 })).toBeCloseTo(3.3);
  });
});

describe("getHorizontalDistance2Plane", () => {
  it("should return 2", () => {
    const p = new Plane();
    p.translatePlane(1, 1, 0.7);
    expect(p.getHorizontalDistance2Plane({ x: -1, y: 1, z: 0 })).toBeCloseTo(2);
  });
});
