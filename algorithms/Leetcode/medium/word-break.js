//https://leetcode.com/problems/word-break/
const getWord = (s, dict, cache) => {
    if (cache.has(s)) return cache.get(s)
    if (!s || s.length === 0) return true
    
    let res = false
    dict.forEach(word => {
        if (word[0] === s[0] && s.slice(0, word.length) === word) {
            res = getWord(s.slice(word.length), dict, cache) || res
        } 
    })
    
    cache.set(s, res)
    return res
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const cache = new Map() 
    return getWord(s, wordDict, cache)
};