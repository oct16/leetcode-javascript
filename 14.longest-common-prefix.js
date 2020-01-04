/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ''
    }
    if (strs.length === 1) {
        return strs[0]
    }
    var str = strs[0]
    var prefix = ''
    var index = 0
    while (str.length) {
        var isMatch = strs.slice(1).every(sItem => {
            return sItem.charAt(index) === str[index]
        })
        if (!isMatch) {
            str = ''
        } else {
            index++
            prefix = str.substring(0, index)
        }
    }
    return prefix
}
// @lc code=end
