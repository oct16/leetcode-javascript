/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let HEAP = head
    let next
    while (HEAP && (next = HEAP.next)) {
        if (HEAP.val === next.val) {
            if (next.next) {
                HEAP.next = next.next
                continue
            }
            HEAP.next = null
            return head
        }
        HEAP = next
    }
    return head
}
// @lc code=end

