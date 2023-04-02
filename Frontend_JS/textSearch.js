const textSearch = (input, pattern) => {
    //lowerCase to use indexOf
    const lowInput = input.toLowerCase()
    const token = pattern.toLowerCase()

    const n = input.length
    const m = token.length

    let i = 0
    let result = ''
    while (i<n) {
        const ind = lowInput.indexOf(token, i)
        if (ind<0) {
            result+=input.slice(i)
            return result
        }
        let j=ind+m
        while(lowInput.indexOf(token, j) === j) {
            j+=m
        }
        result += input.slice(i, ind)
        result += `<b>${input.slice(ind,j)}</b>`
        i=j
    }

    return result
}

console.log(textSearch('The Quick Brown Foxfox Jumps Over The Lazy Dog', 'fox'));
// 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'
console.log(textSearch('The hardworking Dog overtakes the lazy dog', 'dog'));
// 'The hardworking <b>Dog</b> overtakes the lazy <b>dog</b>'
