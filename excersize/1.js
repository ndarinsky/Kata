/**
 * KATA: wrap setTimeout() function with promise, and use it
 */

async function delay(time) {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve('done'), time)
    })
}

async function printResult() {
    const result = await delay(2000)
    console.log(result)
}

console.log('start')
printResult()
console.log('end')