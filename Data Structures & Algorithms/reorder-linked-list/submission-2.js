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

        let slow = head;
        let fast = head.next;

        while(fast?.next) {
            slow =slow.next;
            fast =fast.next.next;
        }

        let second = slow.next;
        let prev = null;
        slow.next=null;
        
        while(second) {
            let next = second.next;
            second.next = prev;
            prev = second;
            second = next;
        }

        let first = head;
        second = prev;

        while(second) {
            let temp1 = first.next;
            let temp2 = second.next;
            first.next = second;
            second.next = temp1;
            first = temp1;
            second = temp2;
        }
        return head;

        // let start = head;
        // let end = head;
        // let prev = null

        // while(end.next) {
        //     prev = end;
        //     end=end.next;
        // }

        // end.next = start.next;
        // start.next = end;
        // prev.next = null;

        // this.reorderList(end.next);

        return head;
    }
}
