class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let arr = [];
        let max = 0;
        for(let i=0;i<height.length;i++) {
            arr[i] = max > height[i] ? max : height[i];
            max = arr[i]
        }
        max = 0;
        for(let i=height.length-1;i>=0;i--) {
            let val = max > height[i] ? max : height[i];
            max = val;
            arr[i] = (arr[i] < val ? arr[i] : val) - height[i];
        }
        let sum =0;
        for(let i=0;i<arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
}
