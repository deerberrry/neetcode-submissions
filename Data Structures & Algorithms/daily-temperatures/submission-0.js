class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let diffArray = new Array(temperatures.length).fill(0);
        let stack =[];
        for(let i=0;i<temperatures.length;i++) {
            if(stack.length == 0) stack.push(i);

            if(temperatures[stack[stack.length - 1]] >= temperatures[i]) stack.push(i)
            else {
                while(temperatures[stack[stack.length - 1]] < temperatures[i]) {
                    let index = stack.pop();
                    diffArray[index] = i - index;
                }
                stack.push(i)
            }
        } 
        return diffArray;
    }
}
