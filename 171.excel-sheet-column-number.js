/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s, n = 0) {
    if (!s) return 0
    const word = s.substr(-1)
    s = s.substring(0, s.length - 1)
    return titleToNumber(s, n + 1) + (word.charCodeAt() - 64) * (n > 0 ? Math.pow(26, n) : 1)
}
// @lc code=end
