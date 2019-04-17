const rotateMatrix = (matrix) => {
  const edge = matrix.length - 1;

  let movePixels = (row, col) => {
    let fromRow;
    let fromCol;
    let fromPixel;

    let toRow = row;
    let toCol = col;
    let toPixel = matrix[row][col];

    for(let i = 0; i < 4; i++){
      fromRow = toRow;
      fromCol = toCol;
      toRow = fromCol;
      toCol = edge - fromRow;

      fromPixel = toPixel;
      toPixel = matrix[toRow][toCol];
      matrix[toRow][toCol] = fromPixel;
    }
  }

  for(let i = 0; i < matrix.length / 2; i++){
    for(let j = i; j < edge - 1; j++){
      movePixels(i, j);
    }
  }
};