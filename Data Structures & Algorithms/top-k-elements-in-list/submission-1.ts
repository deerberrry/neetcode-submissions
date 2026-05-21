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

        let countToValueArray = new Array(nums.length+1).fill(0);
        Array.from(countMap.entries()).forEach(([num, freq]) =>{
            countToValueArray[freq] = countToValueArray[freq]? [...countToValueArray[freq], num]: [num]
        })

        let result = [];
        for(let i = nums.length; i>=0 && result.length!=k; i--) {
            if(countToValueArray[i] !== 0) {
                result.push(...countToValueArray[i]);
            }
        }

        return result;

        // return Array.from(countMap.entries())
        // .sort((a,b)=>b[1]-a[1])
        // .slice(0,k)
        // .map((entry)=>entry[0])

    }
}
