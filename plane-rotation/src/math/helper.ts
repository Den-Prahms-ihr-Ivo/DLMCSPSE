import { Point } from "./types";

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

  return rad2Degrees(Math.acos(tmp)) % 360;
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
