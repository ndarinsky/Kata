//https://leetcode.com/problems/two-sum/submissions/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let myMap = new Map();

	nums.forEach((e,i) => {
		if (myMap.has(e)) {
            myMap.set(e, [...myMap.get(e), i])
        }
		else {
            myMap.set(e, [i])
        }
	});

	for (let e of myMap) {
		let res = target - e[0]
		if (res == e[0]) {
			// check if e.value array is >= 2 items 
			if (e[1].length > 1) {
                return [e[1][0],e[1][1]]
            }
		}
		else {
			if (myMap.has(res)) return [e[1][0], myMap.get(res)[0]]
		}
	}
};