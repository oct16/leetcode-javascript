/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = []
    function group(a, b) {
        if (!b.length) {
            return result.push(a)
        }
        for (let i = 0; i < b.length; i++) {
            const remain = b.slice()
            const [choice] = remain.splice(i, 1)
            group([...a, choice], remain)
        }
    }

    group([], nums)
    return result
}
// @lc code=end
