/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var size = nums1.length + nums2.length
    if (size === 0) return null
    if (size === 1) {
        return nums1[0] ? nums1[0] : nums2[0]
    }

    var pivotMin = Math.floor((size + 1) / 2)
    var pivotMax = Math.ceil((size + 1) / 2)
    var result = new Int32Array(pivotMax)

    var i = 0
    var j = i
    while (i + j < pivotMax) {
        if (nums1[i] < nums2[j] || nums2[j] === undefined) {
            result[i + j] = nums1[i++]
        } else {
            result[i + j] = nums2[j++]
        }
    }

    return (result[--pivotMin] + result[--pivotMax]) / 2
}
// @lc code=end
