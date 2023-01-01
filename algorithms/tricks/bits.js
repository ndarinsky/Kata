// n div 2 => n>>1 
// целочисленное деление
console.log(5>>1) //2  equal to n>>1 = Math.floor(n/2)
console.log(5>>2) //1  n>>2 = Math.floor(n/4)
console.log(8>>2) //2  n>>3 = Math.floor(n/8)
console.log(16>>3) //16 div 8 


console.log(Math.pow(7, 3)) //7^3 

console.log(Number.MAX_VALUE)

//check if n is number
console.log(!isNaN('a'))  
console.log(!isNaN(null))
console.log(!isNaN('1'))
console.log(!isNaN(1))

// n << 3 = n* 2*2*2 Умножить на степерь двойки
console.log(3 << 3) //24 
//n<<10 = n * 2^10 = n * 1024

//Swap 2 variables without using extra variable\space
let a = 1
let b = -3 // integers to be swapped
a = a^b;   // Now a contains a^b
b = a^b;   // Now b will have a
a = a^b;   // Now a will have b
console.log(a) //-3
console.log(b) //1

