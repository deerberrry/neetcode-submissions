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
                maxLength = charSet.size > maxLength ? charSet.size : maxLength;
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
        maxLength = charSet.size > maxLength ? charSet.size : maxLength;
        return maxLength
    }
}
