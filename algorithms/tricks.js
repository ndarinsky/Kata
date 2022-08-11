//n ** m  =>  n ^ m
//возведение в степень
console.log(2**3) //8
console.log(3**3) //27



// convert to binary
const i = 5
console.log(i.toString(2))

// get base10 from binary
parseInt("11000", 2) //24

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

//sliding window - если есть возрастающая функция на элементах.
//когда массив отсортирован она всегда есть но иногда сорт не нужна поусловию