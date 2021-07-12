//https://leetcode.com/problems/merge-intervals
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    const sorted = intervals.sort((a,b) => a[0]-b[0])//O(logN)
    
    const result = []
    let i = 1
    let end = 0
    let max = sorted[0][1]
    let min = sorted[0][0]
    let flag = false
    while (i<sorted.length) {
        if (sorted[i][0] <= max) {
            max = Math.max(max, sorted[i][1])
        } else {
            result.push([min, max])
            if (i<sorted.length) {
                min = sorted[i][0]
                max = sorted[i][1]
            }
        }
        i++        
    }
    result.push([min, max])
    return result
};