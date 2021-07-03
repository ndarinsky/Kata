//https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

removeBrackets = function(s, i) {
    return s.slice(0,i) + s.slice(i+1)
}

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let open = 0;
    let close = 0;
    let openedIndex = 0
    for(let i=0; i<s.length; i++) {
        if (s[i] === '(') {
            open++
            openedIndex = i
        }
        if (s[i] === ')') {
            close++
        }
        if (open-close < 0) {
            const str = removeBrackets(s, i)
            return minRemoveToMakeValid(str)
        }
    }
    if (open-close>0) {
        const str = removeBrackets(s, openedIndex)
        return minRemoveToMakeValid(str)
    }
    return s
};