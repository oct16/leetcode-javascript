/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var sortArray = []
    while (l1) {
        sortArray.push(l1.val)
        l1 = l1.next
    }
    while (l2) {
        sortArray.push(l2.val)
        l2 = l2.next
    }

    if (!sortArray.length) {
        return null
    }

    var heap = {}
    sortArray
        .map(item => {
            if (!item && item !== 0) {
                return 0
            }
            return item
        })
        .sort((a, b) => a - b)
        .reduce((heap, val, index) => {
            heap.val = val
            if (index < sortArray.length - 1) {
                heap.next = { val: null, next: null }
                heap = heap.next
            }
            return heap
        }, heap)
    return heap
}
// @lc code=end
