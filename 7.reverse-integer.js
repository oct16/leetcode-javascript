/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) return x
    var isMinus = x < 0
    var str = x + ''
    var rStr = ''
    if (isMinus) {
        str = str.substring(1)
        if (str.length === 1) return x
    }

    for (var i = str.length - 1; i >= 0; i--) {
        rStr += str[i]
    }
    rStr = +rStr
    if (Math.abs(rStr) >= (1 << 30) * 2) return 0
    if (isMinus) return -1 * rStr
    return rStr
}
// @lc code=end
