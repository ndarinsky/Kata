/**
 * https://leetcode.com/problems/integer-to-english-words/
 * Convert a non-negative integer num to its English words representation.
 * 
Input: num = 123
Output: "One Hundred Twenty Three"

Input: num = 12 345
Output: "Twelve Thousand | Three Hundred Forty Five"

Input: num = 1 234 567
Output: "One + Million | Two Hundred Thirty Four + Thousand | Five Hundred Sixty Seven"

Input: num = 1 234 567 891
Output: "One + Billion | Two Hundred Thirty Four + Million | Five Hundred Sixty Seven + Thousand | Eight Hundred Ninety One"

Constraints:

    0 <= num <= 2^31 - 1
 */

/*
Result: 1h 10m to solve.
Runtime: 88 ms, faster than 86.45% of JavaScript online submissions for Integer to English Words.
Memory Usage: 40.1 MB, less than 68.55% of JavaScript online submissions for Integer to English Words.
 */

    const numbersText = {
        "1": "One", 
        "2": "Two", 
        "3": "Three",
        "4": "Four",
        "5": "Five",
        "6": "Six",
        "7": "Seven",
        "8": "Eight",
        "9": "Nine",
        
        "10": "Ten", //
        "11": "Eleven", //
        "12": "Twelve", //
        "13": "Thirteen",
        "14": "Fourteen",
        "15": "Fifteen",
        "16": "Sixteen",
        "17": "Seventeen",
        "18": "Eighteen", //
        "19": "Nineteen",
   
        "20": "Twenty",
        "30": "Thirty",
        "40": "Forty",
        "50": "Fifty",
        "60": "Sixty",
        "70": "Seventy",
        "80": "Eighty",
        "90": "Ninety",
   
        "100": "Hundred"
    }
   
    function getDoubleDigit(input) {
       if (input < 20) {
           return numbersText[input+'']
       }
   
       const simple = input % 10
       const decemal = Math.floor(input / 10)
   
       if (simple === 0) {
           return numbersText[decemal+'0']
       }
       return `${numbersText[decemal+'0']} ${numbersText[simple+'']}` 
    }
   
    // 0 <= input < 1000 
    function getSmallNumber(input) {
       if (input === 0) return "Zero"
   
       if (input < 100) {
           return getDoubleDigit(input)
       }
   
       const hundreds = Math.floor(input / 100)
       const hundredsText = `${numbersText[hundreds+'']} Hundred`
   
       const rest = input - hundreds*100
       const restText = getDoubleDigit(rest)
   
       if (rest === 0) {
           return hundredsText
       }
       if (hundreds === 0) return restText
       return `${hundredsText} ${restText}`
       
    }
    
    //1000 - 999999
    function getThousands(input) {
        const thousands = Math.floor(input/1000)
        const rest = input % 1000
       
        let res1000 = ''
        if (thousands === 0 && rest === 0) return ''
        
        if (thousands > 0) {
            res1000 = `${getSmallNumber(thousands)} Thousand`
        } 
        
        if (rest === 0) {
            return res1000
        }
        
        return `${res1000} ${getSmallNumber(rest)}`
    }
   
   //1 000 000 - 999 999 999
   function getMillions(input) {
       const millions = Math.floor(input/1000000)
       const rest = input % 1000000
   
       if (rest === 0) {
           return `${getSmallNumber(millions)} Million`
       }
       let restText
       if (rest > 999) {
           restText = getThousands(rest)
       } else {
           restText = getSmallNumber(rest)
       }
       
       return `${getSmallNumber(millions)} Million ${restText}`
   }
   
   //1 000 000 - 999 999 999
   function getBillions(input) {
       const billions = Math.floor(input/1000000000)
       const rest = input % 1000000000
   
       if (rest === 0) {
           return `${getSmallNumber(billions)} Billion`
       }
       let restText = ''
       if (rest > 999999) {
           restText = getMillions(rest)
       } else if (rest > 999) {
           restText = getThousands(rest)
       } else {
           restText = getSmallNumber(rest)
       }
       return `${getSmallNumber(billions)} Billion ${restText}`
   }
   /**
    * @param {number} num
    * @return {string}
    */
   var numberToWords = function(input) {
       if (input < 1000) {
           return getSmallNumber(input)
       }
   
       if (input < 1000000) {
           return getThousands(input)
       }
   
       if (input < 1000000000) {
           return getMillions(input)
       }
   
       return getBillions(input)
   };
 