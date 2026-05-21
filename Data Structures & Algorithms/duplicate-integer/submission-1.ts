class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let setnums = new Set(nums);
        return setnums.size < nums.length;
    }
}
