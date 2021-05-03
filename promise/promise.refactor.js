/**
 * KATA: rewrite example code using promises
 */
//Example:
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script); //you can run only single callback function
    script.onerror = () => callback(new Error(`Error loading script ${src}`));

    document.head.append(script);
}

//Result:
function loadScriptWithPromise(src, callback) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Error loading script ${src}`));

        document.head.append(script);
    })
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(script => console.log(script.src))
    .catch(error => console.log(`Error: ${error}`))
    .finally(() => console.log('clean resources'))

promise.then((script) => alert('do something more')); //You can run multiple functions on promise resolve