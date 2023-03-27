

//stack
const stack = []
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.pop()) //3

//queue
const queue = []
queue.push(1)
queue.push(2)
queue.push(3)
console.log(queue.shift()) //1

//sort array
const arr = [
    {key: "aaa", val: -1},
    {key: "abb", val: 3},
    {key: "cca", val: 1}]
const res = arr.sort((a,b) => a.val - b.val) //-1,1,3
console.log(res.map(el => el.val))

//max of array
const max = Math.max.apply(null, arr);

//create array with english letters in Uppercase
const codes = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = codes.map((x) => String.fromCharCode(x));


//sliding window - если есть возрастающая функция на элементах.
//когда массив отсортирован она всегда есть но иногда сорт не нужна поусловию