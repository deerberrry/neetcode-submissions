class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let freqMap = new Map<string, number>();
        let start = 0;
        let maxLength = 0;
        let maxFreq = 0;
        for(let i=0;i<s.length;i++) {
            freqMap.set(s[i], (freqMap.get(s[i]) ?? 0) + 1)
            maxFreq = Math.max(maxFreq, freqMap.get(s[i]))
            
            while ((i - start + 1 - maxFreq) > k) {
                freqMap.set(s[start], freqMap.get(s[start]) - 1)
                start++;
            }
            maxLength = Math.max(maxLength, i-start+1)
        }
        return maxLength;
    }
}
