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
        let res = [k]
        this.leftFirstList(root, res);
        return res[1];
    }

    leftFirstList(root, res) {
        if(root == null) return;
        this.leftFirstList(root.left, res)
        if(res[0] === 0) return;

        res[0]--;
        if(res[0] === 0) {
            res[1] = root.val
            return;
        }
     
        this.leftFirstList(root.right, res)
    }
}
