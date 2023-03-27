// // n div 2 => n>>1 
// // целочисленное деление
// console.log(5>>1) //2  equal to n>>1 = Math.floor(n/2)
// console.log(5>>2) //1  n>>2 = Math.floor(n/4)
// console.log(8>>2) //2  n>>3 = Math.floor(n/8)
// console.log(16>>3) //16 div 8 


// console.log(Math.pow(7, 3)) //7^3 


// //Swap 2 variables without using extra variable\space
// let a = 1
// let b = -3 // integers to be swapped
// a = a^b;   // Now a contains a^b
// b = a^b;   // Now b will have a
// a = a^b;   // Now a will have b
// console.log(a) //-3
// console.log(b) //1

/*
bitmask - mask will look like 000010000000, where 1 is on i'th bit.
using mask we can apply bit operations on 1 specific bit in the number


1) how to check i-th bit in n?
mask = 1 << i
const bit = n & mask

*/

// const n = 1245
// const binary = n.toString(2)
// const base10 = parseInt(binary, 2)

// let res = 0
// let cur = n & 1
// console.log(cur.toString(2))
// for (let i=0; i<32; i++){
//     res += n & 1<<32-i
// }
// console.log(n)
// console.log(n & 1 << 0) //1
// console.log(n & 1 << 1) //0
// console.log(n & 1 << 2) //4 = 100
// console.log(n & 1 << 3) //8 = 1000
// console.log(res.toString(2))
// console.log(binary)
// console.log(base10)
var reverseBits = function(n) {
    let res = 0, pow = 31;
    while (n > 0) {
        let rightMost = n & 1;
        console.log((rightMost  << pow ).toString(2))
        res = res + (rightMost << pow);
        console.log(res.toString(2))
        pow--;
        n = n >>> 1;
        console.log(n.toString(2))
    }
    // take negative into positive
    return res >>> 0;
    // T.C: O(1)
    // S.C: O(1)
};

const n = 1245
console.log(n.toString(2))
console.log(reverseBits(n).toString(2))