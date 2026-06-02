/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        if(!head?.next || k ===1) return head;

        let start = head;
        let end = this.getNextKthNode(start, k)
        let prevTail = null;
        while(end) {
            if(start === head) {
                head = end;
            }
            let temp = end.next;
            let prev = start;
            let next = start.next;
            while(next !== end) {
                let temp = next.next;
                next.next = prev;
                prev = next; 
                next = temp;
            }
            end.next = prev;
            start.next = temp;
            if(prevTail) prevTail.next = end;
            prevTail = start;
            start = temp;
            end = this.getNextKthNode(start, k)
        }

        return head;
    }

    getNextKthNode(node, k) {
        while(node && k > 1) {
            node =node.next;
            k--;
        }
        return node;
    }
}
