class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;
        let countArray = (new Array(26)).fill(0);
        let base = 'a'.charCodeAt(0);
        for(let i = 0; i<s.length; i++) {
            countArray[s[i].charCodeAt(0) - base]++;
            countArray[t[i].charCodeAt(0) - base]--
        }

        for(let i of countArray) {
            if (i!== 0) return false
        }
        return true;
    }
}
