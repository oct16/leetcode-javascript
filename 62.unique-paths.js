/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, memo = {}) {
    if (memo[m + ',' + n]) {
        return memo[m + ',' + n]
    }
    if (m === 1 || n === 1) {
        return 1
    }
    return (memo[m + ',' + n] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo))
}
// @lc code=end
