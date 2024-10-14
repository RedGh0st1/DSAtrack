/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
  let max = - Infinity
  let winner 
  let numRows = grid.length, numCols = grid[0].length;
   for(let row = 0; row < numRows; row++ ){
     let count = 0
     for(let col = 0; col < numCols; col++){
       if(grid[row][col] === 1){
         count++
       }
       if(count > max){
         max = count // []
        winner = row
       }
     }
   }
   return winner
};