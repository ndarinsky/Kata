const fib = [1,2,3,5,8,13]

for (let i=0; i<fib.length; i++) {
    setTimeout(function() {
        console.log(`${i} - ${fib[i]}`)
    }, 100);
}

for (var i=0; i<fib.length; i++) {
    setTimeout(function() {
        console.log(`${i} - ${fib[i]}`)
    }, 100);
}

for (var i=0; i<fib.length; i++) {
    (function(j){
        setTimeout(() => console.log(`${j} - ${fib[j]}`), 100);
    })(i)
}