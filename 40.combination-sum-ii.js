/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort((a, b) => a - b)
    const result = []
    function group(id, n, comb = []) {
        if (n === 0) {
            return result.push(comb)
        }
        if (n < 0) {
            return
        }
        for (let i = id; i < candidates.length; i++) {
            const num = candidates[i]
            const preNum = candidates[i - 1]
            if (id === i || preNum !== num) {
                if (num <= n) {
                    group(i + 1, n - num, comb.concat(num))
                }
            }
        }
    }

    group(0, target)
    return result
}
// @lc code=end
