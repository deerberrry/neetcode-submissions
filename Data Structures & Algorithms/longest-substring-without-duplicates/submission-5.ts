class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let charSet = new Set();
        let maxLength = 0;
        let start = 0;
        for(let i=0;i<s.length;i++) {
            if(charSet.has(s[i])) {
                let length = charSet.size
                if( length > maxLength) { 
                    maxLength = length;
                }
                while(s[start]!=s[i]) {
                    charSet.delete(s[start])
                    start = start + 1;
                }
                start = start + 1;
            }
            else {
                charSet.add(s[i]);
            }
        }
        let length = charSet.size
        if( length > maxLength) { 
            return length;
        }
        return maxLength
    }
}
