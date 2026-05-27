// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return null;
        let newNodeMap = new Map();
        let pointer = head
        let newList = null;
        let newHead = null;

        while(pointer) {
            let newListNode = new Node(pointer.val);
            if(newList) {
                newList.next = newListNode;
                newList = newList.next;
            }
            else {
                newList = newListNode;
                newHead = newListNode;
            }
            newNodeMap.set(pointer, newListNode)
            pointer=pointer.next;
        }
        newList.next = null;

        pointer = head;
        newList = newHead;
        while(pointer) {
            if(pointer.random !==null) {
                newList.random = newNodeMap.get(pointer.random)
            }
            pointer = pointer.next;
            newList = newList.next;
        } 
        return newHead;
    }
}
