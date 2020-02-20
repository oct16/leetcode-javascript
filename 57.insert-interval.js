/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals = intervals.concat([newInterval])
    intervals = intervals.sort((a, b) => a[1] - b[1])
    for (let i = intervals.length - 1; i > 0; i--) {
        const [a, b] = intervals[i - 1]
        const [c, d] = intervals[i]
        if (b < c || a > d) {
            continue
        } else {
            intervals[i - 1] = [Math.min(a, c), Math.max(b, d)]
            intervals.splice(i, 1)
        }
    }
    return intervals
}
// @lc code=end
