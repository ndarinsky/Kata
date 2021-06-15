/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

 function isSorted(word1, word2, order) {
    for (let i=0; i<word1.length; i++) {
        const index1 = order.indexOf(word1[i])
        if (!word2[i]) return false
        
        const index2 = order.indexOf(word2[i])
        if (index1 > index2) {
            return false
        }
        if (index1 < index2) {
            return true
        }
    }
    return true
}

var isAlienSorted = function(words, order) {
    for (let i=0; i<words.length-1; i++) {
        if (!isSorted(words[i], words[i+1], order)) { 
            return false
        }
    }
    return true
};

console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz"))