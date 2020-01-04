/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) {
        return 1
    }
    var sTemp = ''
    var nResult = 0

    for (var i = 0; i < s.length; i++) {
        var str = s[i]
        if (sTemp.indexOf(str) === -1) {
            sTemp += str
        } else {
            if (sTemp.length > nResult) {
                nResult = sTemp.length
            }
            i = i - sTemp.length
            sTemp = ''
        }
    }

    return nResult > sTemp.length ? nResult : sTemp.length
}
// @lc code=end
