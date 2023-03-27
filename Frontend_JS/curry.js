function curry1(func) {
    return function curry(...args) {
      if (func.length <= args.length) { //func accepts less arg than curry
        return func.apply(this, args)
      }
  
      return function(...args2) {
        return curry.apply(this, [...args, args2])
      }
  
    } 
  }


  function curry(func) {
    let res
    return function(...args) {
        if (res) {
            res = func.apply(this, [res, ...args])
        } else {
            res = func.apply(this, args)
        }   
        return res     
    }
  }

//tests
const empty = () => 0;
const square = (a) => a * a;
const add = (a, b) => a * b;
const mulThree = (a, b, c) => a * b * c;


    let curried = curry(mulThree);
    console.log(curried(7)(3)(2)) //42

    curried = curry(square);
    console.log(curried(2)) //4
    console.log(curried(3)) //9

    // curried = curry(mulThree);
    // console.log(curried()(4)()(3)()(2)) //.toBe(24);
    // console.log(curried()()()()(4)(2)(3)) //.toBe(24);
