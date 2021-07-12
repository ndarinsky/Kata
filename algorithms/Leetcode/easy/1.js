// const input = '123456789'//.split('')

// console.log(input.slice(1))
// // console.log(input.splice(3,3))
// console.log(input)
// console.log(7>>1)


// const m = new Map()
// m.set(1, {id:"a"})
// m.set(2, {id:"b"})
// m.set(3, {id:"c"})
// m.set(4, {id:"d"})
// console.log(Array.from(m.values()).map(x=>x.id))

// const inp = `function(AST,ALT,bilirubin,ALP`
// console.log(inp.toUpperCase().replace(/[&/\\#,+()$~%.'":*?<>{}]/g, ' '))

const getRandInput = () => {
    const ALK = ['ALK F1174L', 'ALK F1245C', 'ALK G1202R', 'ALK R1275Q']
    const ABCG2 = ['ABCG2 C421A', 'ABCG2 G34A', 'ABCG2 Q141K', 'ABCG2 C421A', 'ABCG2 TEST']
    const salt = Math.floor(Math.random() * 7)+1
    if (salt>4) return ''

    return `${ALK[salt]} ${ABCG2[salt]} `
}

console.log(getRandInput())

const test = 'ALK F1174L'
const index = test.indexOf(' ')
console.log(index)
console.log(test.replace(' ', ' ::: '))
console.log(test.slice(test.indexOf(' ')).trim())