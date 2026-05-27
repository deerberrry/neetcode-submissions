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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let resultList = null
        let resultHead = null
        while(l1 && l2) {
            let sum = carry + l1.val + l2.val;
            if(sum > 9) {
                sum = sum - 10;
                carry = 1;
            }
            else carry=0;
            let node = new ListNode(sum)
            if(!resultList) {
                resultHead = node;
                resultList = node
            }
            else {
                resultList.next = node;
                resultList = resultList.next;
            }
            l1=l1.next;
            l2=l2.next;
        }

        while(l1) {
            let sum = carry + l1.val;
            if(sum > 9) {
                sum = sum - 10;
                carry = 1;
            }
            else carry = 0;
            let node = new ListNode(sum)
            if(!resultList) {
                resultHead = node;
                resultList = node
            }
            else {
                resultList.next = node;
                resultList = resultList.next;
            }
            l1=l1.next;
        }

        while(l2) {
            let sum = carry + l2.val;
            if(sum > 9) {
                sum = sum - 10;
                carry = 1;
            }
            else carry = 0;
            let node = new ListNode(sum)
            if(!resultList) {
                resultHead = node;
                resultList = node
            }
            else {
                resultList.next = node;
                resultList = resultList.next;
            }
            l2=l2.next;
        }
        if(carry == 1) {
            resultList.next = new ListNode(1);
            resultList = resultList.next;
        }
        resultList.next = null;
        return resultHead;

    }
}
