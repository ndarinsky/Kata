//use 2 pointers
//read abbr until end
// if number = zero -> return false
// if number != zero -> read whole count -> move pointer in main word
// if pointers doesn't match - return false

//T.C = O(n) S.C = O(1)
/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
 const isNum = (s) => {
    return /^-?\d+$/.test(s);
}
    
var validWordAbbreviation = function(word, abbr) {
    let i = 0
    let j = 0
    
    while (j < abbr.length) {
        if (word[i] !== abbr[j]) return false
        
        if (isNum(abbr[j])) {
            if (abbr[i] === '0') return false
            let count = 1
            while (isNum(abbr[j+count])) {
                count++
            }
            let num = abbr.splice(j, count)
            i += parseInt(num)
            j = j+count
        } else {
            i++
            j++
        }    
    }
};

console.log(validWordAbbreviation('internationalization', 'i12iz4n'))