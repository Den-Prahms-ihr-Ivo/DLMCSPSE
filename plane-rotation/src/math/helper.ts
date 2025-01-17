import { Point, Vector } from "./types";

export function subtract2Point(pointA: Point, pointB: Point): Point {
  const X: Point = {
    x: pointA.x - pointB.x,
    y: pointA.y - pointB.y,
    z: pointA.z - pointB.z,
  };
  return X;
}

export function angleBetween2Points(A: Point, B: Point): number {
  const tmp = dotProduct(A, B) / (vectorLength(A) * vectorLength(B));

  return Math.acos(tmp);
}

export function dotProduct(pointA: Point, pointB: Point): number {
  return pointA.x * pointB.x + pointA.y * pointB.y + pointA.z * pointB.z;
}

export function vectorLength(p: Point): number {
  return Math.sqrt(p.x ** 2 + p.y ** 2 + p.z ** 2);
}

export function crossProduct(pointA: Point, pointB: Point): Point {
  const X: Point = {
    x: pointA.y * pointB.z - pointA.z * pointB.y,
    y: pointA.z * pointB.x - pointA.x * pointB.z,
    z: pointA.x * pointB.y - pointA.y * pointB.x,
  };
  return X;
}

export function rad2Degrees(rad: number): number {
  return (rad * 180) / Math.PI;
}

export function azimuthAngle(A: Point, center?: Point): number {
  if (center) A = subtract2Point(A, center);

  return rad2Degrees(Math.atan2(A.y, A.x)) % 360;
}

export function testAngle(A: Point, B: Point): number {
  const rad = Math.atan2(A.y, A.x);

  return (360 + rad2Degrees(rad)) % 360;
}

export function calcAngleBetweenMarbleAndPoint(
  marbleVector: Vector, // Marble, Point on Marbles X Axis
  threat: Point
): number {
  /**
   * Calculate the azimuth angle from the planes marble to "true north" (World X-Axis)
   * Calculated by building the cross product of MX and MZ.
   * With M being the position of the marble, T the position of the threat, X a point on the planes' X-Axis and
   * Z the position of the marble on ground (z set to 0).
   *
   * Vector n_A = (X - M) x (Z - M)
   * Vector n_B = (T - M) x (Z - M)
   *
   * The final angle between is calculated according to the dihedral angle: The dot product of the two normal vectors devided by the product of their lengths.
   * cos(phi) = Norm(n_A * n_B) / (Norm(n_A) * Norm(n_B))
   */
  const Z = structuredClone(marbleVector.A);
  Z.z = 0;

  console.log(Z);
  console.log(marbleVector.A);
  console.log(marbleVector.B);
  const n_A = crossProduct(
    subtract2Point(marbleVector.B, marbleVector.A),
    subtract2Point(Z, marbleVector.A)
  );
  const n_B = crossProduct({ x: 1, y: 0, z: 0 }, { x: 0, y: 0, z: 1 });

  const Numerator = Math.abs(dotProduct(n_A, n_B));
  const Denominator = vectorLength(n_A) * vectorLength(n_B);
  let dihedralAngle = Numerator / Denominator;

  dihedralAngle = Math.acos(dihedralAngle);

  return (dihedralAngle * 180) / Math.PI;
}
