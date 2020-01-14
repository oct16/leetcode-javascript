/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // eslint-disable-next-line no-undef
    const head = new ListNode()
    let HEAP = head
    lists = lists
        .filter(v => {
            return v && typeof v.val === 'number'
        })
        .sort((a, b) => {
            return a.val - b.val
        })
    while (lists.length) {
        if (lists[0]) {
            HEAP.next = lists[0]
            if (!lists[0].next) {
                lists.splice(0, 1)
            } else {
                lists[0] = lists[0].next
                lists.sort((a, b) => a.val - b.val)
            }
            HEAP = HEAP.next
        } else {
            lists.splice(0, 1)
        }
    }
    return head.next
}
// @lc code=end
