class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
      let start = 0;
      let end = heights.length - 1;
      let maxArea =0;
      while(start<end) {
        let area = 0;
        if(heights[start] < heights[end]) {
            area = (end - start) * heights[start];
            start++
        }
        else {
            area = (end - start) * heights[end];
            end--
        }
        if(area > maxArea) maxArea = area;
      } 
      return maxArea; 
    }
}
