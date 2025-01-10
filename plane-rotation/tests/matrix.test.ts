import { it, expect, describe, beforeAll } from "vitest";
import { Plane } from "../src/components/diagram/plane";
import {
  buildTransformationMatrix,
  matrixTransformation,
  multiply,
} from "../src/math/matrices";
import { yawPitchRoll2Matrix } from "../src/math/eulerToMatrix";

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
    expect(x).toEqual([-3, 0, -0.5, 3, 0.5, 0]);
    expect(y).toEqual([-3.5, 3.5, -3.5, -3.5, -3.5, -3.5]);
    expect(z).toEqual([0.7, 0.7, 0.7, 0.7, 0.7, -0.7]);
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

describe("Matrix Transform", () => {
  it("should add a 45° rotation to the initial rotation", () => {
    const M = yawPitchRoll2Matrix(45, 0, 0);
    const initialRotation = [
      [0, 1, 0],
      [1, 0, 0],
      [0, 0, -1],
    ];

    compareMatrix(multiply(initialRotation, M), [
      [0.71, 0.71, 0],
      [0.71, -0.71, 0],
      [0, 0, -1],
    ]);
  });
});
