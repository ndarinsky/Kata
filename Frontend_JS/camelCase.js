const toCamelCase = (key) => {
    const split = key.split('_').map((el,i) => i ? el[0].toUpperCase() + el.slice(1) : el)
    return split.join('')
}

const camelCaseKeys = (input) => {
    const result = {}

    for(const [key, value] of Object.entries(input)) {
        const newKey = toCamelCase(key)
        let newValue = value
        if (typeof value === 'object' && value !==null) {
            newValue = camelCaseKeys(value)
        }
        if (Array.isArray(value)) {
            newValue = value.map(v => camelCaseKeys(v))
        }
        result[newKey] = newValue
    }

    return result
}

console.log(camelCaseKeys({ foo_bar: true }))
// { fooBar: true }

const test2 = camelCaseKeys({ foo_bar: true, bar_baz: { baz_qux: '1' } })
console.log(test2)
// { fooBar: true, barBaz: { bazQux: '1' } }

const test3 = camelCaseKeys([{ baz_qux: true }, { foo: true, bar: [{ foo_bar: 'hello' }] }])
console.log(test3)
// [{ bazQux: true }, { foo: true, bar: [{ fooBar: 'hello' }] }]
