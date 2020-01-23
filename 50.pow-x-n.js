/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) {
        return 1
    }
    if (n === 1) {
        return x
    }
    if (n < 0) {
        return 1 / myPow(x, -n)
    }
    return (n & 1) === 0 ? myPow(x * x, n >>> 1) : x * myPow(x * x, (n - 1) >>> 1)
}
// @lc code=end
