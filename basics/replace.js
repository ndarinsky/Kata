// let str = 'AAABBBCCC'
// console.log(str.replace('AA', ''))
const inValidValue = '$#@!# €☉☹'
const validValue = [
    '00-645',
    '!!SZINF2',
    '#1012: Autism 179',
    '#52ibd_04.33',
    '(+)-12-oxocal.',
    '# !1% nitrofurazone',
    '2"-F-ara',
    '{bar-2f#-area__oxocal}--18ß-glycyrrhetinic acid'
]

const pattern = /[a-zA-Z0-9]/g
// const pattern = /[\W]/g
console.log(`${pattern.test(inValidValue)} - ${inValidValue}`)

    validValue.forEach(v => {
        console.log(`${pattern.test(v)} - ${v}`)
    }
)
