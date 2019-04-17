const zeroMatrix = (matrix) => {
  if (!matrix || !matrix.length) throw Error('invalid matrix');

  if (matrix.length === 1 && matrix[0].length === 1) return matrix;

  const colCoords = new Set();

  matrix.forEach(row => {
    if (row.includes(0)) {
      row.forEach((columnCell, index) => {
        if (columnCell === 0) colCoords.add(index);
        row[index] = 0;
      });
    }
  });

  // Only goes through columns that have not already changed to zero
  matrix.forEach(row => {
    if (row[0] !== 0) {
      colCoords.forEach(col => row[col] = 0);
    }
  });

  return matrix;
}