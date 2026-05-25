class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        let maxArray = [];
        let currentMaxPos = 0;
        if(nums.length === 0 || k==1) return nums; 

        let findMaxPos = (start: number,end: number) =>{
            let maxPos = start;
            for(let i=start+1;i<end;i++) {
                if(nums[i] > nums[maxPos]) maxPos = i;
            }
            return maxPos;
        }

        currentMaxPos = findMaxPos(0,k)
        maxArray.push(nums[currentMaxPos])
        console.log(`first currentMaxPos`, nums[currentMaxPos])

        for(let i=k;i<nums.length;i++) {
            if(currentMaxPos + k > i) {
                if(nums[i] > nums[currentMaxPos]) {
                    currentMaxPos = i;
                }
            }
            else {
                currentMaxPos = findMaxPos(i-k+1 ,i+1)
            }
            maxArray.push(nums[currentMaxPos])
            console.log(`currentMaxPos`, nums[currentMaxPos])
        }
        return maxArray;
    }
}
