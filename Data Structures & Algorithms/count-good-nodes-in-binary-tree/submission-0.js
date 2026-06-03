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
     * @return {number}
     */
    goodNodes(root) {
        if(root == null) return [];
        let res = [1];
        this.dfs(root.left, res, root.val)
        this.dfs(root.right, res, root.val)
        return res[0];
    }

    dfs(root, res, max) {
        if(root==null) return;
        if(root.val >= max) {
            res[0]++
            max= root.val
        }
        this.dfs(root.left, res, max)
        this.dfs(root.right, res, max)
    }
}
