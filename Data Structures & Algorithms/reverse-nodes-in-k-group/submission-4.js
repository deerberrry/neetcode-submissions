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
        let reverseKNodes = (start, end)=> {
            // console.log(`called with: ${start.val} & ${end.val}`)
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
            if(start === head) {
                head = end;
            }

            // console.log(`reversed:`,end)
        } 
        if(k === 1 || !head?.next) return head;
        let pointer = head;
        let count = 0;
        let start = head;
        let prevTail = null;
        while(pointer) {
            let temp = pointer.next;
            count++;
            // console.log('count',count)
            if(count === k) {
                reverseKNodes(start, pointer)
                if(prevTail) prevTail.next = pointer
                prevTail = start;
                count = 0;
                start = temp;
            }
            pointer=temp
        }

        return head;
    }
}
