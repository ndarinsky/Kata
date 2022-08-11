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
// console.log(res)


const users = [{id: 1, name: 'Alex'}, {id: 2, name: 'Yossi'}]; 
const comments = [{userId: 1, text: 'New big day'}, {userId: 2, text: 'What are you doing'}]; 

// Write function to combine user and comments in one object that match to id === userId 

function combine(users, comments) {
    const hash = users.reduce((acc, cur) => {
        acc[cur.id] = cur.name
        return acc
    }, {})
 
    const res = comments.map(comment => ({
        text: comment.text,
        name: hash[comment.userId]
    }))

    return res
}

console.log(combine(users, comments));

// Expected result
// combine(users, comments) => [{text: 'New big day', name: 'Alex'}, {text: 'What are you doing', name: 'Yossi'}];

