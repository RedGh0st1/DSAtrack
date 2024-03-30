// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

// Example
// For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be 96.

// Here is what the theater looks like:

function seatsInTheater(nCols, nRows, col, row) {
  //coding and coding..
  // nCols =  16, nRows = 11, col = 5, row = 3  = 96
  // 16 * 11 = 176 total number of seats.  | |
  let total = nCols * nRows;
  // (5 - 1) * 11 = 44
  let calCol = (col - 1) * nRows;
  //  3 * 16 = 48
  let calRow = row * nCols;
  // 4 * 3
  let colXrow = row * (col - 1);
  return total - (calCol + calRow) + colXrow;
}
