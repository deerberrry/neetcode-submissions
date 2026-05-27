class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = heights[0];
        let stack = [heights[0]]
        for(let i=1;i<heights.length; i++) {
            let area = 0
            let width = 1 
            while(heights[i] < stack[stack.length-1]) {
                let val = stack.pop();
                // console.log('while val', val)
                area = val * width;
                if(area >maxArea) maxArea = area;
                width++;
            }
            stack.push(...(new Array(width).fill(heights[i])))
            // if(heights[i] >= stack[stack.length-1]) stack.push(heights[i])
            // else {
            //     let val = stack.pop();
            //     if(val > maxArea) maxArea = val;
            //     stack.push(heights[i]);
            //     stack.push(heights[i]);
            // }
        }
        // console.log('stack', stack)
        let area = 0
        let width = 1 
        while(stack.length >0) {
            let val = stack.pop();
            area = val * width;
            width++;
            if(area >maxArea) maxArea = area;
        }

        return maxArea;
    }
}
