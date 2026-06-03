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
    isValidBST(root) {
        if(root == null) return true;
        let res = [true]
        this.dfs(root, res)
        return res[0];
    }

    dfs(root, res) {
        if(root == null) return;
        if(root.left) {
            if(root.left.val >= root.val) {
                res[0] = false;
                return;
            }
            if(this.max(root.left, root.left.val) >= root.val) {
                res[0] = false;
                return;
            }
            this.dfs(root.left, res)
        }
        if(root.right) {
            if(root.right.val <= root.val) {
                res[0] = false;
                return;
            }
            if(this.min(root.right, root.right.val) <= root.val) {
                res[0] = false;
                return;
            }
            this.dfs(root.right, res)
        }
    }

    min(root, min) {
        if(root == null) return min;
        let left = this.min(root.left, min)
        let right = this.min(root.right, min)
        return Math.min(min, left, right, root.val)
    }

    max(root, max) {
        if(root == null) return max;
        let left = this.max(root.left, max)
        let right = this.max(root.right, max)
        return Math.max(max, left, right, root.val)
    }

}
