//https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s>>1 > 0) return false
    const brackets = {
        ')':'(',
        ']':'[',
        '}':'{',
    }
    
    const stack = []
    stack.push(s[0])
    for (let i=1; i<s.length; i++) {
        if (stack.length>0 && Object.keys(brackets).includes(s[i]) && brackets[s[i]] === stack[stack.length-1]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.length===0
};