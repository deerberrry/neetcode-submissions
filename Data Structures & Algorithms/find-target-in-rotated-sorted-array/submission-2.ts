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
            let mid = Math.floor((start+end)/2);
            if(nums[mid] == target) return mid;
            // if(target > nums[mid] ) {
                if(nums[mid] < nums[end] ) { // right sorted
                    if(target > nums[mid] && target <= nums[end]) start = mid + 1;
                    else end = mid - 1;
                }
                else { //left sorted
                    if(target < nums[mid] && target >= nums[start]) end = mid -1;
                    else start = mid + 1;
                }
            // }
        }

        return -1;
    }
}
