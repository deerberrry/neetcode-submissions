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
     * @return {void}
     */
    reorderList(head) {
        if(!head?.next?.next) return head;

        let start = head;
        let end = head;
        let prev = null

        while(end.next) {
            prev = end;
            end=end.next;
        }

        end.next = start.next;
        start.next = end;
        prev.next = null;

        console.log('head',head)
        this.reorderList(end.next);

        return head;
    }
}
