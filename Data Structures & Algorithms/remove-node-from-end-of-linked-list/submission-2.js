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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let pointer = head;
        let size =0;
        while(pointer) {
             size++;
             pointer=pointer.next;
        }

        pointer = head;
        let prev = null;
        let deleteNode= size - n 
        while(deleteNode !==0) {
            prev = pointer
            pointer = pointer.next;
            deleteNode--;
        }
        if(prev == null) return pointer.next
        prev.next = pointer.next;
        pointer.next = null;

        return head;

    }
}
