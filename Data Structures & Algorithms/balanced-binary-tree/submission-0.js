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
     * @return {boolean}
     */
    isBalanced(root) {
        if(root == null) return true;
        let res = [true]
        this.dfs(root, res)
        return res[0]
    }

    dfs(root, res) {
        if(root == null) return 0;
        let left = this.dfs(root.left, res);
        let right = this.dfs(root.right, res);
        if(Math.abs(left - right) > 1) res[0] = false
        return 1 + Math.max(left, right)
    }
}
