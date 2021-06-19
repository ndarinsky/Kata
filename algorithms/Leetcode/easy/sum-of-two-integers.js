/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

//https://leetcode.com/problems/sum-of-two-integers/
 function getDigit(arr, index) {
    if (arr.length - 1 - index < 0)
        return 0
    return Number(arr[arr.length-1-index])
}

var addStrings = function(num1, num2) {
    const a = num1.split("")
    const b = num2.split("")
    
    let index = 0
    let i = Number(a[a.length-1])
    let j = Number(b[b.length-1])
    
    let length = Math.max(a.length, b.length)
    
    const result = []
    let temp = 0 
    while(index<length || temp!==0) {
        const sum = i + j + temp
        if (sum > 9) {
            result.push(sum%10)
            temp = 1
        } else {
            result.push(sum)
            temp = 0
        }
        index++
        i = getDigit(a, index)
        j = getDigit(b, index)
    }
    
    return result.reverse().join("")
};

// console.log(addStrings("1","9"))
console.log(addStrings("0","1720"))