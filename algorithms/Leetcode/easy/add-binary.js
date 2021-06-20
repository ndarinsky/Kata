//https://leetcode.com/problems/add-binary/submissions/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {

    const result = []
    
    let itemA = Number(a[a.length-1])
    let itemB = Number(b[b.length-1])
    let carry = 0
    const length = Math.max(a.length, b.length)
    
    let index = 0
    while (index<length || carry !== 0) {
        const sum = itemA + itemB + carry
        result.push(sum%2)
        carry = Math.floor(sum / 2)
        
        index++
        
        itemA = (a.length-1-index >= 0) ? Number(a[a.length-1-index]) : 0;
        itemB = (b.length-1-index >= 0) ? Number(b[b.length-1-index]) : 0;
    }
    
    return result.reverse().join("")
};