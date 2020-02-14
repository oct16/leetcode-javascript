/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex, res = []) {
    if (rowIndex < 0) {
        return res
    }

    if (res.length >= 2) {
        const newMidArr = res.reduce((acc, cur, i) => {
            if (i === res.length - 1) {
                return acc
            }
            acc.push(cur + res[i + 1])
            return acc
        }, [])
        res = [1, ...newMidArr, 1]
    } else {
        res.push(1)
    }

    return getRow(rowIndex - 1, res)
}
// @lc code=end

