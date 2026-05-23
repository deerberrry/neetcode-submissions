class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if(s1.length > s2.length) return false;
        let s1Array = new Array(26).fill(0);
        let s2Array = new Array(26).fill(0);
        let base ='a'.charCodeAt(0);
        for(let i=0;i<s1.length;i++) {
            s1Array[s1.charCodeAt(i) -base]++;
            s2Array[s2.charCodeAt(i)-base]++;
        }
        
        let matched=0;
        for(let i=0;i<26;i++) {
            if(s1Array[i] === s2Array[i]) matched++;
        }
        
        let l=0;
        for(let r=s1.length;r<s2.length;r++) {
            if(matched === 26) {
                return true
            }

            let index = s2.charCodeAt(r) - base;
            s2Array[index]++;

            if(s1Array[index] === s2Array[index]) {
                matched++;
            }
            else if (s1Array[index] + 1 === s2Array[index]) {
                matched--;
            }

            index=s2.charCodeAt(l) -base;
            s2Array[index]--;

            if(s1Array[index] === s2Array[index]) {
                matched++;
            }
            else if(s1Array[index]-1 === s2Array[index]) {
                matched--
            }
            l++;
        }

        return matched === 26;
    }
}
