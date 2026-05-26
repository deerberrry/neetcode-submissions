class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let start = 0;
        let end = nums.length -1;
        if(nums[0] <= nums[end]) return nums[0]

        while(start<=end) {
            let mid = Math.floor((start+end)/2);
            if(nums[mid-1] > nums[mid]) return nums[mid];
            if(nums[mid] > nums[mid+1]) return nums[mid+1];

            if(nums[start] < nums[mid]) {
                start = mid +1;
            }
            else end = mid - 1;
        }
    }
}
