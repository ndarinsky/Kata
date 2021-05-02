/**
 * KATA: wrap setTimeout() function with promise, and use it
 */

function delay(ms) {
    return new Promise((resolve, reject) => {
        try {
            // throw new Error('test error')
            setTimeout(() => resolve(), ms)
        } catch(e) {
            reject(e)
        }
    })
}

delay(3000).then(() => console.log('done'))
    .catch((e)=> console.log(`Error: ${e}`))