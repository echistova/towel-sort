module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  return matrix
    .map((row, i) => {
      if (i % 2 === 1) {
        return row.slice().reverse();
      }
      return row;
    })
    .flat();
};
