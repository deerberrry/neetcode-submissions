class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet= new Set(nums);
        let maxCount = 0;
        for(let num of nums) {  
            if(numSet.has(num-1)) continue;
            let count = 1;
            let checknum = num
            while(numSet.has(checknum+1)) {
                count++;
                checknum=checknum+1
            }
            if(count>maxCount) maxCount=count
        }
        return maxCount;
    }
}
