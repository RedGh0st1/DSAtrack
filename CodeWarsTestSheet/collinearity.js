// Write the function collinearity(x1, y1, x2, y2), which returns a Boolean type depending on whether the vectors are collinear or not.

function collinearity(x1, y1, x2, y2) {
  return x2 * y1 == y2 * x1; //
}

console.log(collinearity(1, 1, 1, 1) === true);
console.log(collinearity(1, 2, 2, 4) === true);
console.log(collinearity(1, 1, 6, 1) === false);
console.log(collinearity(1, 2, -1, -2) === true);
console.log(collinearity(1, 2, 1, -2) === false);
console.log(collinearity(4, 0, 11, 0) === true);
console.log(collinearity(0, 1, 6, 0) === false);
console.log(collinearity(4, 4, 0, 4) === false);
console.log(collinearity(0, 0, 0, 0) === true);
console.log(collinearity(0, 0, 1, 0) === true);
console.log(collinearity(5, 7, 0, 0) === true);
