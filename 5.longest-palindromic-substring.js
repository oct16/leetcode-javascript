/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var result = ''
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < 2; j++) {
            var left = i
            var right = i + j
            while (s.charAt(left) && s.charAt(left) === s.charAt(right)) {
                left--
                right++
            }
            if (right - left - 1 > result.length) {
                result = s.substring(left + 1, right)
            }
        }
    }
    return result
}
// @lc code=end
