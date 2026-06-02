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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length === 0) {
            return null;
        }

        let mergedList = lists[0];

        let mergeToList=(list)=>{
            if(list == null) return;
            if(mergedList == null) {
                mergedList = list;
                return;
            }
            let pointer1 = mergedList;
            let prev1 = null;
            let pointer2 = list;
            if(pointer1.val >= pointer2.val) {
                mergedList = pointer2;
                let temp = pointer2.next;
                prev1 = pointer2;
                pointer2.next = pointer1;
                pointer2 = temp;
            }
            else {
                prev1= pointer1;
                pointer1 = pointer1.next;
            }
            while(pointer1 || pointer2) {
                if(pointer1 && pointer2) {
                    if(pointer1.val >= pointer2.val) {
                        prev1.next = pointer2;
                        let temp = pointer2.next;
                        prev1 = pointer2;
                        pointer2.next = pointer1;
                        pointer2 = temp;
                    }
                    else {
                        prev1= pointer1;
                        pointer1 = pointer1.next;
                    }
                }
                else if(pointer2) {
                    prev1.next = pointer2;
                    break;
                }
                else break;
            }
        } 

        let logList=()=>{
            if(mergedList == null) {
                console.log('list empty');
                return;
            }
            let start = mergedList;
            let arr = []
            while(start) {
                arr.push(start.val)
                start=start.next
            }
            console.log('list', arr)
            
        }

        for(let i=1;i<lists.length;i++) {
            mergeToList(lists[i])
            logList()
        }
        return mergedList
    }
}
