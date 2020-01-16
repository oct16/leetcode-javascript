/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []
    function group(id, n, comb = []) {
        if (n === 0) {
            result.push(comb)
            return
        }
        for (let i = id; i < candidates.length; i++) {
            const num = candidates[i]
            if (num <= n) {
                group(i, n - num, comb.concat(num))
            }
        }
        return
    }
    group(0, target)
    return result
}
// @lc code=end
