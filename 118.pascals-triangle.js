/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = []

    for (let i = 0; i < numRows; i++) {
        const arr = [1]
        const preArr = res[res.length - 1]
        for (let j = 1; j < i; j++) {
            arr.splice(1, 0, preArr[j - 1] + preArr[j])
        }
        if (i > 0) {
            arr.push(1)
        }
        res.push(arr)
    }
    return res
}
// @lc code=end

