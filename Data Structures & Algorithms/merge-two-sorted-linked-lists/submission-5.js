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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(!list1) return list2;
        if(!list2) return list1;

        let pointer=null;
        if(list1.val <= list2.val){
            pointer = list1;
            list1=list1.next;
        } 
        else {
            pointer = list2;
            list2 = list2.next;
        }
        let head = pointer;

        while(list1 && list2) {
            if(list1.val <= list2.val) {
                pointer.next = list1;
                list1=list1.next;
            }
            else {
                pointer.next = list2;
                list2=list2.next
            }
            pointer=pointer.next;
        }

        if(list1) pointer.next = list1;
        else if(list2) pointer.next = list2;

        return head;
    }
}
