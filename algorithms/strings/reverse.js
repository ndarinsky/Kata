/**
 * KATA: Write function to revert string without using reverse method.
 * Constraints:
    Do not use the built-in #reverse() method or [::-1] if Python
    Ideal solution would run in O(n) time complexity and O(1) space complexity
 */

const input1 = 'qwerty'

function reverseViaBuiltin(input) {
    const arr = input.split('')
    return arr.reverse().join('')
}

function reverseViaLoop(input) {
    let result = ''
    for (let i=input.length-1; i>=0; i--) {
        result += input[i]
    }

    return result
}

//best solution
//o(n) but x2 faster than reverseViaLoop
function reverseString(str) {
    let strArr = str.split("");
    let start = 0;
    let end = str.length - 1;

    while (start <= end) {
        const temp = strArr[start];

        strArr[start] = strArr[end];
        strArr[end] = temp;

        start++;
        end--;
    }

    return strArr.join("");
}

console.log(reverseString(input1))