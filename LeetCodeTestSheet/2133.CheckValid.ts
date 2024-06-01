// An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

// Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

function checkValid(matrix: number[][]): boolean {
  // 1. iterate through the matrix by row
  // outer loop goes through row indexes...
  for (let row: number = 0; row < matrix.length; row++) {
    // seen = new set
    let seen = new Set<number>();
    // inner loop goes through col indexes...\
    for (let col: number = 0; col < matrix[row].length; col++) {
      // if seen.has(element) => return false
      if (seen.has(matrix[row][col])) return false;
      // add element to seeen
      seen.add(matrix[row][col]);
    }
  }

  // 2. iterate through the matrix by column
  // outer loop goes through col indexes...
  for (let col: number = 0; col < matrix[0].length; col++) {
    // seen = new set
    let seen = new Set<number>();
    // inner loop goes through row indexes...
    for (let row: number = 0; row < matrix.length; row++) {
      // if seen.has(element) => return false
      if (seen.has(matrix[row][col])) return false;
      // add element to seen
      seen.add(matrix[row][col]);
    }
  }

  // 3. if we get this far, return true
  return true;
}

// Example 1:
console.log(
  checkValid([
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1],
  ])
);
// Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]
// Output: true
// Explanation: In this case, n = 3, and every row and column contains the numbers 1, 2, and 3.
// Hence, we return true.

// Example 2:
console.log(
  checkValid([
    [1, 1, 1],
    [1, 2, 3],
    [1, 2, 3],
  ])
);
// Input: matrix = [[1,1,1],[1,2,3],[1,2,3]]
// Output: false
// Explanation: In this case, n = 3, but the first row and the first column do not contain the numbers 2 or 3.
// Hence, we return false.
