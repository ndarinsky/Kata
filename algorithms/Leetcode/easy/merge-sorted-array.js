//https://leetcode.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    const copy = [...nums1] //O(m)
    let p2 = 0
    let p1 = 0
    while (p1<m && p2<n) {
        if (copy[p1]<=nums2[p2]) {
            nums1[p2+p1] = copy[p1]
            p1++
        } else {
            nums1[p2+p1] = nums2[p2]
            p2++
        }
    }
    while (p1<m) {
        nums1[p2+p1] = copy[p1]
        p1++
    }
    while (p2<n) {
        nums1[p2+p1] = nums2[p2]
        p2++
    }
    return nums1
};