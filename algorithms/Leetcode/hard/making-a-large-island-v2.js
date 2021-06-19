//https://leetcode.com/problems/making-a-large-island/
//Solution O(n^2) (!!!) 
function isIsland(i,j, grid) {
    if (i>=0 && j>=0 &&
        i<grid.length && j<grid.length &&
        grid[i][j] === 1) {
            return grid[i][j] 
        }
    return -1
}

function isMarked(i,j, grid) {
    if (i>=0 && j>=0 &&
        i<grid.length && j<grid.length &&
        grid[i][j] !== 0) {
            return grid[i][j] 
        }
    return -1
}

function getIslandSize(a,b, grid, islandId) {
    const queue = []
    let size = 0
    queue.push({i:a, j:b})
    grid[a][b] = islandId
    let item = queue.shift()
    while (item) {
        size++
        const i = item.i
        const j = item.j
        if (isIsland(i-1, j, grid) !== -1) {
            grid[i-1][j] = islandId
            queue.push({i:i-1,j})
        }
        if (isIsland(i+1, j, grid) !== -1) {
            grid[i+1][j] = islandId
            queue.push({i:i+1,j})
        }
        if (isIsland(i, j-1, grid) !== -1) {
            grid[i][j-1] = islandId
            queue.push({i,j:j-1})
        }
        if (isIsland(i, j+1, grid) !== -1) {
            grid[i][j+1] = islandId
            queue.push({i,j:j+1})
        }
        item = queue.shift()
    }
    return size
}

function getNeighborIslandsID(i,j, grid, map) {
    const result = new Set()
    const top = isMarked(i-1,j,grid)
    if ( top !== -1) {
        result.add(top)
    }
    const down = isMarked(i+1,j,grid)
    if ( down !== -1) {
        result.add(down)
    }
    const left = isMarked(i,j-1,grid)
    if ( left !== -1) {
        result.add(left)
    }
    const right = isMarked(i,j+1,grid)
    if ( right !== -1) {
        result.add(right)
    }
    return result
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    let islandId = 2
    const map = new Map()

    //mark All Islands
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid.length; j++) {
            if (grid[i][j] === 1) {
                const size = getIslandSize(i,j,grid, islandId)
                map.set(islandId, size)
                islandId++
            }
        }
    }

    let maxSize = 0
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid.length; j++) {
            let size = 0
            if (grid[i][j] === 0) {
                size++
                const islands = getNeighborIslandsID(i,j, grid, map)
                islands.forEach(isl => {
                    size = size + map.get(isl)
                })
            }
            maxSize = Math.max(maxSize, size)
        }
    }
    
    if (maxSize === 0) return grid.length*grid.length
    
    return maxSize
};



 console.log(largestIsland([[1,1],[1,0]]))
console.log(largestIsland([[1,0],[1,0]]))