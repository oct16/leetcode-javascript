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
    return s ? titleToNumber(s.slice(0, s.length - 1), n + 1) + (s.substr(-1).charCodeAt() - 64) * 26 ** n : 0
}
// @lc code=end
