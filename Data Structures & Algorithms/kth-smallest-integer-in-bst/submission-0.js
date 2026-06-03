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
        this.leftFirstList(root, res);
        console.log('res', res)
        return res[k-1];
    }

    leftFirstList(root, res) {
        if(root == null) return;
        if(root.left) {
            this.leftFirstList(root.left, res)
        }
        res.push(root.val)
        if(root.right) {
            this.leftFirstList(root.right, res)
        }
    }
}
