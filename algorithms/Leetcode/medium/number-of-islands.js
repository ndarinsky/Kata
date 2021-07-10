//https://leetcode.com/problems/number-of-islands/
//0 - water
//1 - new land
//2 - known land 
var markIsland = function(grid, r, c, rows, cols) {
    grid[r][c] = 2
    if (r-1 >= 0 && grid[r-1][c] === '1') {
        markIsland(grid, r-1, c, rows, cols)
    }
    if (r+1 < rows && grid[r+1][c] === '1') {
        markIsland(grid, r+1, c, rows, cols)
    }
    if (c-1 >= 0 && grid[r][c-1] === '1') {
        markIsland(grid, r, c-1, rows, cols)
    }
    if (c+1 < cols && grid[r][c+1] === '1') {
        markIsland(grid, r, c+1, rows, cols)
    }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let result = 0
    
    let rows = grid.length
    let cols = grid[0].length
    
    for (let r=0; r<rows; r++){
        for(let c=0; c<cols; c++) {
            if(grid[r][c] === '1') {
                result++
                markIsland(grid, r, c, rows, cols)
            }    
        }
    }
    
    return result
};