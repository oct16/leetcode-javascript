/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const referenceArray = []

    let node = head
    while (node) {
        referenceArray.push(node)
        node = node.next
    }

    if (n > referenceArray.length) {
        n = referenceArray.length
    }

    if (n !== referenceArray.length) {
        const deleteNodePrev = referenceArray[referenceArray.length - n - 1]
        deleteNodePrev.next = deleteNodePrev.next.next
    } else {
        head = head.next
    }

    return head
}
// @lc code=end
