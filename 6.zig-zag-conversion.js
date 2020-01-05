/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const zigzag = [...Array.from({ length: numRows }).keys()]
    zigzag.push(...zigzag.slice(1, -1).reverse())
    const rows = new Array(numRows).fill('')
    ;[...s].forEach((c, i) => (rows[zigzag[i % zigzag.length]] += c))
    return rows.join('')
}

// @lc code=end
