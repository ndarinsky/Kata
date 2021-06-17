/**
 * https://leetcode.com/problems/valid-palindrome-ii/submissions/
 * @param {*} s 
 * @returns 
 */
function isValid(s) {
    if (s.length < 2) return true
    
    let left = 0
    let right = s.length-1
    while(left<=right) {
        if(s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

 var validPalindrome = function(s) {
    if (s.length < 3) return true
    
    let left = 0
    let right = s.length-1
    while(left<=right) {
        if(s[left] !== s[right]) {
            return isValid(s.slice(left+1, right+1)) || isValid(s.slice(left, right))
        }
        left++
        right--
        
    }
    return true
};


// console.log(validPalindrome("aguo kepa tgbnv fqmgml cupuu fxoohdf pgjdmy sgvhmv ffcnqxjjxqncff vmhvgs ymdjgp fdhooxf uupuc u lmgmqf vnbgt apek ouga"))
//console.log(validPalindrome("aguo kepa tgbnv fqmgml cupuu fxoohdf pgjdmy sgvhmv ffcnqxjjxqncff vmhvgs ymdjgp fdhooxf uupuc lmgmqf vnbgt apek ouga"))
console.log(validPalindrome("abc"))