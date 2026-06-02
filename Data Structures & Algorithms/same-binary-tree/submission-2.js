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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if(!p && !q) return true;
        if(p && q && p.val === q.val) {
            return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
        }
        return false;
    }

    // dfs(p, q) {
    //     if(p== null && q==null) return true;
    //     if(p==null || q==null || p.val != q.val) return false;
    //     let left = this.dfs(p.left, q.left);
    //     if(!left) return false;
    //     let right = this.dfs(p.right, q.right);
    //     if(!right) return false;
    //     return true;
    // }
}
