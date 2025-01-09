import { it, expect, describe, beforeAll } from "vitest";
import {
  cosineDegrees,
  sineDegrees,
  yawPitchRoll2Matrix,
} from "../src/math/eulerToMatrix";

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
        [0.4725979, -0.3009115, 0.8283136],
        [0.8283136, 0.4725979, -0.3009115],
        [-0.3009115, 0.8283136, 0.4725979],
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
