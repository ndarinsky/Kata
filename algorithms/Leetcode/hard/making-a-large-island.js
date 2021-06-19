//https://leetcode.com/problems/making-a-large-island/
//Solution O(n^4) 
function isIsland(i,j,grid) {
    return i>=0 && j>=0 &&
        i<grid.length && j<grid.length &&
        grid[i][j] === 1
}


function getIslandSize(i,j, grid) {
    const tempGrid = []
    grid.forEach(row => tempGrid.push([...row])) //clone grid
    
    const queue = []
    let size = 0
    queue.push({i,j})
    tempGrid[i][j] = 2
    let item = queue.shift()
    while (item) {
        size++
        const i = item.i
        const j = item.j
        if (isIsland(i-1, j, tempGrid)) {
            tempGrid[i-1][j] = 2
            queue.push({i:i-1,j})
        }
        if (isIsland(i+1, j, tempGrid)) {
            tempGrid[i+1][j] = 2
            queue.push({i:i+1,j})
        }
        if (isIsland(i, j-1, tempGrid)) {
            tempGrid[i][j-1] = 2
            queue.push({i,j:j-1})
        }
        if (isIsland(i, j+1, tempGrid)) {
            tempGrid[i][j+1] = 2
            queue.push({i,j:j+1})
        }
        item = queue.shift()
    }
    return size
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    
    let maxSize = 0
    let size = 0
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid.length; j++) {
            if (grid[i][j] === 0) {
                size = getIslandSize(i,j, grid)
                if (size > maxSize) {
                    maxSize = size
                }
            }
        }
    }
    
    if (maxSize === 0) return grid.length*grid.length
    
    return maxSize
};