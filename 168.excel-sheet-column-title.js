/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    return n == 0 ? '' : convertToTitle(parseInt(--n / 26)) + String.fromCharCode(65 + (n % 26))
}
// @lc code=end
