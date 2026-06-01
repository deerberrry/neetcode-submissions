class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // let seen = new Set();
        // for(let num of nums) {
        //     if(seen.has(num)) return num;
        //     else seen.add(num)
        // }
        // return -1;
        let slow=0, fast=0;

        while(true) {
            slow=nums[slow];
            fast=nums[nums[fast]]
            if(slow === fast) break;
        }

        let slow2=0;
        while(true) {
            slow=nums[slow];
            slow2=nums[slow2];
            if(slow===slow2) return slow;
        }

    }
}
