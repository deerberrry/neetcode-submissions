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
        let resultHead = new ListNode()
        let resultList = resultHead
        while(l1 || l2 || carry) {
            let sum = carry;
            if(l1) {
                sum+=l1.val;
                l1=l1.next;
            }
            if(l2) {
                sum+=l2.val;
                l2=l2.next;
            }
            if(sum > 9) {
                sum = sum - 10;
                carry = 1;
            }
            else carry=0;
            let node = new ListNode(sum)
            resultList.next = node;
            resultList = resultList.next;
        }
        resultList.next = null;
        return resultHead.next;

    }
}
