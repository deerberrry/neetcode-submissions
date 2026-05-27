class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = heights[0];
        let stack = [heights[0]]
        for(let i=1;i<heights.length; i++) {
            let width = 1 
            while(heights[i] < stack[stack.length-1]) {
                let area = stack.pop() * width;
                if(area >maxArea) maxArea = area;
                width++;
            }
            stack.push(...(new Array(width).fill(heights[i])))
        }
        let width = 1 
        while(stack.length >0) {
            let area = stack.pop() * width;
            width++;
            if(area >maxArea) maxArea = area;
        }

        return maxArea;
    }
}
