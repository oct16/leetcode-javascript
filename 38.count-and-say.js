/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let res = ''
    while (n > 0) {
        n--
        res = cal(res)
    }

    function cal(s) {
        let strArr = []
        let left = 0
        for (let i = 0; i < s.length; i++) {
            const next = s[i + 1]
            const cur = s[i]
            if (next !== cur) {
                const right = i + 1
                strArr.push(s.substring(left, right))
                left = right
            }
        }

        if (!strArr.length) {
            return '1'
        }

        return strArr.reduce((acc, cur) => {
            const freq = cur.length
            const val = cur[0]
            return (acc += freq + val)
        }, '')
    }

    return res
}
// @lc code=end

