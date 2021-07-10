//https://leetcode.com/problems/buildings-with-an-ocean-view/
/**
 * @param {number[]} heights
 * @return {number[]}
 */
 var findBuildings = function(h) {
    const result = []
    let max = 0
    for (let i=h.length-1; i>=0; i--) {
        if (h[i] > max) {
            max = h[i]
            result.push(i)
        }
    }
    
    return result.reverse()
};