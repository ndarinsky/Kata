/**
 * KATA: Using sample function which should load file,
 * write code to show message after all 5 files will be loaded.
 */

function loadFile() {
    const delay = Math.floor(Math.random() * 5000) //random 1-5 sec delay
    return new Promise(resolve => 
        setTimeout(() => {
            console.log(delay)
            resolve(delay)
        },
        delay))
}

//Result:
function loadAll() {
    const file1 = loadFile()
    const file2 = loadFile()
    const file3 = loadFile()
    Promise.all([file1, file2, file3])
        .then(result => console.log(`done ${result}`))
} 

loadAll()