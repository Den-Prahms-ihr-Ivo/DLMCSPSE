export function cosineDegrees(degrees: number): number {
  return Math.cos((degrees * Math.PI) / 180.0);
}

export function sineDegrees(degrees: number): number {
  return Math.sin((degrees * Math.PI) / 180.0);
}

export function yawPitchRoll2Matrix(
  yaw: number,
  pitch: number,
  roll: number
): number[][] {
  let A = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  // PHI
  const sin_phi = sineDegrees(roll);
  const cos_phi = cosineDegrees(roll);
  // THETA
  const sin_theta = sineDegrees(pitch);
  const cos_theta = cosineDegrees(pitch);
  // PSI
  const sin_psi = sineDegrees(yaw);
  const cos_psi = cosineDegrees(yaw);

  A[0][0] = cos_theta * cos_psi;
  A[0][1] = sin_phi * sin_theta * cos_psi - cos_phi * sin_psi;
  A[0][2] = sin_phi * sin_psi + cos_phi * sin_theta * cos_psi;

  A[1][0] = cos_theta * sin_psi;
  A[1][1] = cos_phi * cos_psi + sin_phi * sin_theta * sin_psi;
  A[1][2] = cos_phi * sin_theta * sin_psi - sin_phi * cos_psi;

  A[2][0] = -sin_theta;
  A[2][1] = sin_phi * cos_theta;
  A[2][2] = cos_phi * cos_theta;

  return A;
}
