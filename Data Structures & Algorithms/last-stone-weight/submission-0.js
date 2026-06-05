/**
 * const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxHeap = new MaxPriorityQueue();
        stones.map(weight=>maxHeap.enqueue(weight));

        while(maxHeap.size()>1) {
            let x = maxHeap.dequeue();
            let y = maxHeap.dequeue();

            if(x==y) continue;
            maxHeap.enqueue(x-y);
        }
        return maxHeap.size() === 1 ? maxHeap.dequeue(): 0;
    }
}
