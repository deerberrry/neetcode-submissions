class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums = nums.sort((a, b) => a - b);
        // console.log('nums', nums)
        if(nums[0] > 0) return [];
        if(nums[nums.length-1]<0) return [];
        if(nums[nums.length-1]== 0) {
            if(nums[nums.length-2]==0 && nums[nums.length-3] ==0) return [[0,0,0]]
            else return [];
        }
        if(nums[0]== 0) {
            if(nums[1]==0 && nums[2] ==0) return [[0,0,0]]
            else return [];
        }
        let result = []
        let k = nums.length-1;
        while(nums[k]>=0 && k>0) {
            let target = -nums[k];
            let start = 0, end = k-1;
            while(start<end) {
                let sum = nums[start]+nums[end];
                if(sum === target) {
                    result.push([nums[start], nums[end], nums[k]])
                    start++
                    while(nums[start] == nums[start-1]) start++;
                    end--;
                    while(nums[end]== nums[end+1]) end--;
                }
                if(sum < target) start++;
                if(sum > target) end--;
            }
            k--;
            while(nums[k]===nums[k+1]) k--;
        }
        return result;
    }
}
