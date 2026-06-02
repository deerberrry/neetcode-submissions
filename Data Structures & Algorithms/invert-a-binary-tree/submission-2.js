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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(root) this.invertNode(root);
        return root;
    }

    invertNode(node) {
        if(!node.left && !node.right ) return;
        // let temp = node.left;
        // node.left = node.right;
        // node.right = temp;
        [node.left, node.right] = [node.right ,node.left]

        if(node.left) this.invertNode(node.left)
        if(node.right) this.invertNode(node.right)
    }
}
