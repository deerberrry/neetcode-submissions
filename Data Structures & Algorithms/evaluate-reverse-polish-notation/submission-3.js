class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        
        for(let i of tokens) {
            console.log('stack', stack)
            if(i == '+') {
                stack.push(stack.pop() + stack.pop())
            }
            else if(i== '-') {
                let second = stack.pop()
                let first = stack.pop()
                stack.push(first - second)
            } 
             else if(i== '*') {
                stack.push(stack.pop() * stack.pop())
            } 
            else if(i== '/') {
                let second = stack.pop()
                let first = stack.pop()
                stack.push(Math.trunc(first / second))
            } 
            else stack.push(Number(i))
        }

        return stack.pop()
    }
}
