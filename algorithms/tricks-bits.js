// n div 2 => n>>1 
// целочисленное деление
console.log(5>>1) //2 
console.log(5>>2) //1 
console.log(8>>2) //2 
console.log(16>>3) //16 div 8 

// n << 3 = n* 2*2*2 Умножить на степерь двойки
console.log(3 << 3) //24

//Swap 2 variables without using extra variable\space
let a = 1
let b = -3 // integers to be swapped
a = a^b;   // Now a contains a^b
b = a^b;   // Now b will have a
a = a^b;   // Now a will have b
console.log(a) //-3
console.log(b) //1

