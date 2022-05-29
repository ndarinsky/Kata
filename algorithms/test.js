function add(num1) {
    return function innerAdd(num2) {
        if (num2 === undefined) return num1
        return function innerAdd1(num3) {
            if (num3 === undefined) return num2
            return num2 + num3
        }
    }
}

// add(3)(4);
// add(3)()(4); // -> 7
// add(3)()()()(4); // -> 7
// add(10)()()()()()()()()()()()(12); // -> 22

// add()(3)(4); // -> 7
// add()()()()(10)(12); // -> 22

// add()(3)()(4); // -> 7
// add()()()()()(10)()()()(12); // -> 22
const res = add(2)(3)
console.log(res)