class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let mapping = {
            '}': '{',
            ']':'[',
            ')':'('
        }

        for(let ch of s) {
            if(mapping[ch]) {
                if(stack.length>0 && stack[stack.length-1] == mapping[ch]) stack.pop()
                else return false;
            }
            else stack.push(ch);
        }

        return stack.length === 0
    }
}
