class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let charSet = new Set();
        let maxLength = 0;
        let start = 0;
        let length =0;
        for(let i=0;i<s.length;i++) {
            if(charSet.has(s[i])) {
                maxLength = length > maxLength ? length : maxLength;
                while(s[start]!=s[i]) {
                    charSet.delete(s[start])
                    start = start + 1;
                }
                start = start + 1;
                length = charSet.size;
            }
            else {
                charSet.add(s[i]);
                length++;
            }
        }
        maxLength = length > maxLength ? length : maxLength;
        return maxLength
    }
}
