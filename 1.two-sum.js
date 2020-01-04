/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Object()
    for(let i = 0; i < nums.length; i++) {
        const val = nums[i]
        if (map.hasOwnProperty(val)) {
            return [map[val], i]
        } 
        map[target - val] = i
    }
    return []
}
// @lc code=end
