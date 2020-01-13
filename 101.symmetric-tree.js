/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true
    const { left, right } = root

    function isSameNode(left, right) {
        if (!left && !right) {
            return true
        }
        if (left && !right) return false
        if (!left && right) return false

        const { left: LLeft, right: LRight, val: LVal } = left
        const { left: RLeft, right: RRight, val: RVal } = right

        if (LVal === RVal) {
            if (!LLeft && !LRight && !RRight && !RLeft) {
                return true
            }

            return isSameNode(LLeft, RRight) && isSameNode(LRight, RLeft)
        }
        return false
    }

    return isSameNode(left, right)
}
// @lc code=end
