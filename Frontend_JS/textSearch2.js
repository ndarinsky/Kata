const textSearch1 = (input, pattern) => {
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
        if (ind>=3 && input.slice(ind-4, ind) === '</b>') {
            result += input.slice(i, ind-4)
            result += `${input.slice(ind,j)}</b>`
        } else {
            result += input.slice(i, ind)
            result += `<b>${input.slice(ind,j)}</b>`
        }
        i=j
    }

    return result
}

const textSearch = (input, tokens) => {
    let cur = input
    for (const token of tokens) {
        cur = textSearch1(cur, token)
    }

    console.log(cur)
    return cur
}


// textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', ['fox']);
// // 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'
// textSearch('The quick brown fox jumps over the lazy dog', ['fox', 'dog']);
// 'The quick brown <b>fox</b> jumps over the lazy <b>dog</b>'
textSearch('This is Uncopyrightable!', ['copy', 'right']);
// 'This is Un<b>copyright</b>able!'
textSearch('This is Uncopyrightable!', ['copy', 'right', 'table']);
// 'This is Un<b>copyrightable</b>!'
// textSearch('aaa', ['aa']);
// // '<b>aa</b>a'
// // This is because the second character cannot be used as a match again.
// textSearch('aaaa', ['aa']);
// // '<b>aaaa</b>'
