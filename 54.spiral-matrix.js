/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = []
    if (!matrix.length) {
        return result
    }
    let h = matrix.length
    let south = []
    let east = []
    let west = []
    if (h > 2) {
        for (let i = 1; i < matrix.length - 1; i++) {
            east.push(matrix[i].pop())
            if (matrix[i].length > 0) {
                west.unshift(matrix[i].shift())
            }
            if (matrix[i].length === 0) {
                matrix.splice(i, 1)
                i--
            }
        }
    }
    const north = matrix.shift()
    if (h > 1) {
        south.push(...matrix.pop())
    }
    result.push(...north, ...east, ...south.reverse(), ...west, ...spiralOrder(matrix))

    return result
}
// @lc code=end
