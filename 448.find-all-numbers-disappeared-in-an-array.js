/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const min = 1
    const max = nums.length
    const result = []
    for (let i = min; i <= max; i++) {
        if (!~nums.indexOf(i)) {
            result.push(i)
        }
    }
    return result
}
//  @lc code=end
