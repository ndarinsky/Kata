const fs = require('fs')

console.log('start')                                            

setTimeout(() => console.log('111 '), 0)     //Timers           //A

setImmediate(() => console.log('immediate'))  //Check           //B    

fs.readFile(__filename, () => {           //poll 
    setTimeout(() => console.log(' readfile timeout'), 0)       //C
    setImmediate(() => console.log('readfile setImmediate'))    //D 
    process.nextTick(() => console.log('readfile next tick'))   //E
})

Promise.resolve()    //Other microtasks queue
    .then(() => {
        console.log('Promise')                                   //F
        process.nextTick(() => console.log('Promise next tick')) //G
    })

process.nextTick(() => console.log('next tick'))  //nextTickQueue //K

setTimeout(() => console.log('timeout 2'), 0)    //Timers         //L   

console.log('end')

//K A B 