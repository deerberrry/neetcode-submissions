/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if(root === null) return -1;
        let res = []
        this.leftFirstList(root, res, k);
        return res[k-1];
    }

    leftFirstList(root, res, k) {
        if(root == null || res.length === k) return;
        this.leftFirstList(root.left, res, k)
        res.push(root.val)
        this.leftFirstList(root.right, res, k)
    }
}
