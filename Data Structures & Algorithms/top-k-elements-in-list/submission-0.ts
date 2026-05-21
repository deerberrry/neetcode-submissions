class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let countMap = new Map();
        for(let num of nums) {
            let prev = countMap.get(num);
            let newVal = prev? prev+1 :1;
            countMap.set(num, newVal)
        }
        return Array.from(countMap.entries()).sort((a,b)=>b[1]-a[1]).slice(0,k)
        .map((entry)=>entry[0])

    }
}
