var sortArray = function(nums) {
    const swap = (ind1, ind2) => {
        const tmp = nums[ind1]
        nums[ind1] = nums[ind2]
        nums[ind2] = tmp
    }

    const heapify = (n, ind) => {
        const left = ind*2 + 1    
        const right = ind*2 + 2
        
        let largest = ind
        if (left<n && nums[left]>nums[largest]) {
            largest = left
        }
        if (right<n && nums[right]>nums[largest]) {
            largest = right
        }
        if (largest!==ind) {
            swap(largest, ind)
            heapify(n, largest)
        }    
    }

    let heapSort = () => {
        let n = nums.length;
        // Build heap; heapify (top-down) all elements except leaf nodes.
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(n, i);
        }
        // Traverse elements one by one, to move current root to end, and
        for (let i = n - 1; i > 0; i--) {
            [nums[0], nums[i]] = [nums[i], nums[0]];
            // call max heapify on the reduced heap.
            heapify(i, 0);
        }
    }
    
    heapSort();
    return nums;
};