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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if(!root) return ""
        let q = []
        q.push(root)
        let start =0;
        while(start < q.length) {
            let len = q.length;
            for(let i=start;i<len; i++) {
                if(q[i]!==null) {
                    q.push(q[i].left);
                    q.push(q[i].right);
                }
            }
            start = len
        }
        // console.log(q.map(item=>item?.val ?? null).join(","))
        return q.map(item=>item?.val ?? null).join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if(data === "") return null;
        console.log('data', data)
        let q = data.split(",");
        let qtree = []

        let root = new TreeNode(Number(q.shift()))
        qtree.push(root)

        while(qtree.length > 0 && q.length > 0) {
            // console.log('qtre',qtree.map(item=>item?.val))
            // console.log('q',q)
            let target = qtree.shift();
            let next = q.shift();
            let node = new TreeNode(next === ""? null : Number(next))
            target.left = node;
            qtree.push(node)
            next = q.shift();
            node = new TreeNode(next === ""? null : Number(next))
            target.right = node;
            qtree.push(node)
        }
        return root;
    }
}
