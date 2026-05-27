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
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head?.next) return false;

        while(head.next) {
            if(head.visited === true) return true;
            head.visited = true;
            head = head.next;
        }
        return false;
    }
}
