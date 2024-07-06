// You are given four integers row, cols, rCenter, and cCenter. There is a rows x cols matrix and you are on the cell with the coordinates (rCenter, cCenter).

// Return the coordinates of all cells in the matrix, sorted by their distance from (rCenter, cCenter) from the smallest distance to the largest distance. You may return the answer in any order that satisfies this condition.

// The distance between two cells (r1, c1) and (r2, c2) is |r1 - r2| + |c1 - c2|.

package main

import (
	"math"
)
	
func allCellsDistOrder(rows int, cols int, rCenter int, cCenter int) [][]int {
    maxDistance := rows + cols
    result := make([][][]int, maxDistance)

    for i := 0; i < rows; i++ {
        for j := 0; j < cols; j++ {
        distance := int(math.Abs(float64(rCenter - i)) + math.Abs(float64(cCenter - j)))
        result[distance] = append(result[distance], []int{i, j})
        }
    }
    
   	 flatResult := make([][]int, 0)
	for _, cells := range result {
		flatResult = append(flatResult, cells...)
	}


    return flatResult
} 