/**
 * KATA: Write promise example with error handling
 */
console.log('start')

const errorHandler = () => {
    console.log('error')
}

const result = new Promise( (resolve, reject) => {
    console.log('do some work')
    // setTimeout(()=> resolve('Job Done'), 2000)
    setTimeout(()=> reject('Error in promise'), 3000)
})

result.then(result => console.log(result))    
    .catch(error => console.log(`Error caught ${error}`))
    .finally(()=>console.log('finally'))

console.log('end')