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
     * @return {ListNode}
     */
    reverseList(head) {
        if(!head?.next) return head;
        let pointer = head.next;
        let prev = head;
        head.next=null;
        while(pointer.next !== null) {
            // let val = pointer;
            // pointer = pointer.next;
            // val.next = prev;
            // prev = val
            let next = pointer.next;
            pointer.next = prev;
            prev = pointer;
            pointer = next;
        }
        pointer.next = prev;
        return pointer;
    }
}
