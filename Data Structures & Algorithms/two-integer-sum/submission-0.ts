class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let targetMap = new Map();
        for(let i=0; i<nums.length;i++) {
            let expected = target - nums[i];
            if(targetMap.has(nums[i])) {
                return [targetMap.get(nums[i]), i]
            }
            targetMap.set(expected, i)
        }
        return [];
    }
}
