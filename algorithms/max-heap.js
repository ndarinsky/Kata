class MaxHeap {
    constructor(nums) {
        this.heap = []
        nums.forEach(el => this.add(el))
    }

    add(input) {
        this.heap.push(input)
        this.bubbleUp(this.heap.length-1)
    }

    remove() {
        const result = this.heap[0]
        const newTop = this.heap.pop() 
        this.heap[0] = newTop

        this.sink()

        return result
    }

    swap(parent, child) {
        const temp = this.heap[parent]
        this.heap[parent] = this.heap[child]
        this.heap[child] = temp
    }

    //Bubble up latest added node to put it in the correct place.
    bubbleUp(index) {
        let child = index
        let parent = Math.floor((child-1)/2) 
        while (this.heap[parent] > this.heap[child] && parent>=0 && child>=0) { 
            this.swap(parent, child)
            child = parent
            parent = Math.floor((child-1)/2) 
        }
    }

    getMaxChildIndex(parent) {
        let left = 2*parent+1
        let right = 2*parent+2
        if (right >= this.heap.length) {
            if (this.heap[left]<this.heap[parent]) {
                return left
            }
            return -1 //no swap required 
        }

        if (this.heap[parent] <= Math.min(this.heap[left], this.heap[right])) {
            return -1
        }

        if (this.heap[left]<this.heap[right]) {
            return left
        }
        return right
    }

    //Sink root node until it will be on a correct place.
    sink() {
        let index = 0
        let child = this.getMaxChildIndex(index)
        while (child >= 0) {
            this.swap(index, child)
            index = child
            child = this.getMaxChildIndex(index)
        }
    }

    print() {
        console.log(this.heap)
    }
}

class KthLargest {
    constructor(k, nums) {
        this.target = k
        this.heap = new MaxHeap(nums)
        
    }
    
    add(val) {
        this.heap.add(val)
        
        let res = 0
        while (this.heap.heap.length>this.target) {
            this.heap.remove()
        }
        res=this.heap.heap[0]

        this.heap.print()
        console.log(res)
        return res
    }
}

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);