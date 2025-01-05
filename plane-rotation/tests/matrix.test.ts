import { it, expect, describe, beforeAll } from "vitest";
import { Plane } from "../src/components/diagram/plane";

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
