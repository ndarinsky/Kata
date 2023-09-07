class Node {
    constructor(letter) {
        this.letter = letter ? letter : 'root'
        this.words = []
    }
}

const addWord = (word, root, limit) => {
    let current = root
    for (let i=0; i<word.length; i++) {
        const letter = word[i]
        if (!current[letter]) {
            const node = new Node(letter)
            current[letter] = node
        } 
        current = current[letter]
        if (current.words.length<limit) {
            current.words.push(word)
        }
    }
}

const getWords = (word, root, limit) => {
    let current = root
    let result = []
    for (let i=0; result.length<limit; i++) {
        const letter = word[i]
        if (!current[letter]) return result 
        current = current[letter]
        if (i===word.length-1 && current.words.length) {
            result = [...result, ...current.words]
        }
    }

    return result.length>limit ? result.slice(0, limit) : result
}

export {
    Node,
    addWord,
    getWords
}