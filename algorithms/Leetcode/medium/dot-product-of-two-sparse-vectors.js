//https://leetcode.com/problems/dot-product-of-two-sparse-vectors

/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
 class SparseVector {

    constructor(nums){
        this.hash = {}
        for (let i=0; i<nums.length; i++){ //O(N) build hashtable
            if (nums[i] !== 0) {
                this.hash[i] = nums[i]
            }            
        }
    }

    dotProduct(vec) {
        let result = 0
        Object.keys(vec.hash).forEach(key => {
            if (this.hash[key]) {
                result+= this.hash[key]*vec.hash[key]
            }
        })
        return result
    }
};