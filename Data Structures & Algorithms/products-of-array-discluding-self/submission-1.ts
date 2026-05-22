class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let result = [];
        let prefprod = new Array(nums.length).fill(1);
        let sufprod = new Array(nums.length).fill(1);
        // for(let i=0; i<nums.length; i++) {
        //     let product=1;
        //     for(let j=0;j<nums.length;j++) {
        //         if(i!=j) product=product * nums[j]
        //     }
        //     result[i] = product;
        // }
        for(let i=1;i<nums.length;i++) {
            prefprod[i]=nums[i-1] * prefprod[i-1]
        }
        result[nums.length-1]=prefprod[nums.length-1]
        for(let i=nums.length-2;i>=0;i--) {
            sufprod[i]=nums[i+1] * sufprod[i+1]
            result[i]=prefprod[i]*sufprod[i]
        }
        // for(let i=0;i<nums.length;i++) {
        //     result[i]=prefprod[i]*sufprod[i]
        // }
        return result;
    }
}
