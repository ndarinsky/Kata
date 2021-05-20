/**
 * We're given a number in the form of an integer n.
   Write a function that returns the string representation of all numbers from 1 to n based on the following rules:
   If it's a multiple of 3, represent it as "fizz".
   If it's a multiple of 5, represent it as "buzz".
   If it's a multiple of both 3 and 5, represent it as "fizzbuzz".
   If it's neither, just return the number itself. 

*  Constraints:
    Maximum value of Integer n <= 1000
    n will always be a non zero integer (possibly 0)
    Expected time complexity : O(n)
    Expected space complexity : O(1)
 */

//Not optimal - Solution
function fizzbuzz1(n) {
    let result = ''
    for(let i=1; i<=n; i++) {
        if( i % 3 === 0) {
            if (i % 5 === 0) {
                result = result.concat('fizzbuzz')  
            } else {
                result = result.concat('fizz')
            }
        } else if( i % 5 === 0) {
            result = result.concat('buzz')
        } else {
            result = result.concat(i)
        }
    }
    return result
}

//Optimal solution
function fizzbuzz(n) {
    const result = []
    for(let i=1; i<=n; i++) {
        if (i%3 === 0 && i%5 === 0) {
            result.push('fizzbuzz')
        } else if (i%3 === 0) {
            result.push('fizz')
        } else if (i%5 === 0) {
            result.push('buzz')
        } else {
            result.push(i)
        }
    }
    return result.join('')
}

console.log(fizzbuzz(0))
console.log(fizzbuzz(1))
console.log(fizzbuzz(2))
console.log(fizzbuzz(3))
console.log(fizzbuzz(15))

