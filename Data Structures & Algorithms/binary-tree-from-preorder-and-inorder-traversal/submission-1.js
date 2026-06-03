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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let preIdx =0 ;
        let inMap = new Map();
        inorder.forEach((val, i) => inMap.set(val, i));

        let dfs=(l,r)=> {
            if(l > r) return null;
            let rootVal = preorder[preIdx];
            preIdx++;
            let mid = inMap.get(rootVal);
            let root = new TreeNode(rootVal);
            root.left = dfs(l, mid-1);
            root.right = dfs(mid+1, r)
            return root;
        }

        return dfs(0, inorder.length-1)
    }
}
