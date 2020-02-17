/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let nCount = 0
    while (n) {
        const res = Math.floor(n / 5)
        nCount += res
        n = res
    }
    return nCount
}
// @lc code=end
