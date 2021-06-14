/**
 * Write a method missingNumbers that takes an array of continuous numbers and returns the missing integers
 * 
 * Constraints

    Length of the array <= 100000
    The array will always contain non negative integers (including 0)
    Expected time complexity : O(n)
    Expected space complexity : O(1)
 */
function missingNumbers(input) {
    const result = []
    if (input.length<2) return []

    for (let i=1; i<input.length; i++) {
        const difference = input[i] - input[i-1]
        if (difference>1) {
            for (let j=1; j<difference; j++) {
                result.push(input[i-1]+j)
            }
        }
    }
    return result
}

// console.log(missingNumbers([1,2,4,5,7]))
// console.log(missingNumbers([1,2,5,7]))
console.log(missingNumbers([10, 11, 14, 17]))