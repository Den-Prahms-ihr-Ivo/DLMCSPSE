export function multiply(a: number[][], b: number[][]): number[][] {
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

export function buildTransformationMatrix(
  rotationMatrix: number[][],
  translationVector: number[]
): number[][] {
  rotationMatrix = structuredClone(rotationMatrix);
  rotationMatrix[0].push(translationVector[0]);
  rotationMatrix[1].push(translationVector[1]);
  rotationMatrix[2].push(translationVector[2]);
  return rotationMatrix.concat([[0, 0, 0, 1]]);
}

export function matrixTransformation(
  transformationMatrix: number[][],
  R: number[][]
): number[][] {
  R = R.concat([new Array(R[0].length).fill(1)]);

  return multiply(transformationMatrix, R).slice(0, 3);
}
