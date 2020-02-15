/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/\W/g, '').toLowerCase()
    const pivot = Math.floor(s.length / 2)
    for (let i = 0; i < pivot; i++) {
        if (s[i] !== s[s.length - i - 1]) {
            return false
        }
    }
    return true
}
// @lc code=end
