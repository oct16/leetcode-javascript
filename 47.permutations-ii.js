/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = []
    function group(a, b) {
        if (!b.length) {
            return result.push(a)
        }
        const unique = new Set()
        for (let i = 0; i < b.length; i++) {
            if (!unique.has(b[i])) {
                unique.add(b[i])
                const remain = b.slice()
                const [choice] = remain.splice(i, 1)
                group([...a, choice], remain)
            }
        }
    }

    group([], nums)
    return result
}
// @lc code=end
