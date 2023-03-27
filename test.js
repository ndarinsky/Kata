
function deepClone(val) {
  const simple = ['boolean', 'number', 'string', 'function']

  const clone = (value) => {
    if (!val || simple.includes(typeof val)) return val
    const res = {}

    for (let key of Object.keys(value)) {
      if(value[key] === null || value[key] === undefined || (simple.includes(typeof value))) {
        res[key] = value[key] 
      } else { //it's object
        if (Array.isArray(value[key])) {
          res[key] = value[key].map(el => clone(el))
        } else { //object
          res[key] = clone(value[key])
        }
      }
    }

    return res
  }

  return clone(val)
}

console.log(deepClone('foo'))
console.log(deepClone(123))
console.log(deepClone(true))
console.log(deepClone(false))
console.log(deepClone(null))