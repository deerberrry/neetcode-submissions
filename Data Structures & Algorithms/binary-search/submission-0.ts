class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let start = 0;
        let end = nums.length -1;

        while(start<=end) {
            let mid = Math.floor((end+start)/2)
            console.log(`start : ${start} end : ${end} mid:${mid} `)
            if(nums[mid] == target) return mid;
            if(target > nums[mid]) {
                start = mid + 1;
            }
            else end = mid - 1;
        }
        return -1;
    }
}
