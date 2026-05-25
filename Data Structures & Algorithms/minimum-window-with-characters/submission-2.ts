class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if(t.length >s.length) return "";

        let tMap = new Map();
        let sMap = new Map();
        let shortestStr = "";
        for(let i=0;i<t.length;i++) {
            tMap.set(t[i], (tMap.get(t[i]) ?? 0)+1)
        }
        let matchCount = tMap.size;
        let start =0;
        while(!tMap.has(s[start]) && start<s.length) { start++;}

        if(start == s.length || start + t.length >s.length) return "";

        for(let i=start;i<start+t.length;i++) {
            if(tMap.has(s[i])) {
                sMap.set(s[i], (sMap.get(s[i]) ?? 0)+1)
            }
        }
        let currentMatchCount=0

        // console.log(`started window with sMap`,sMap)
        for(let entry of Array.from(tMap.entries())) {
            if(sMap.get(entry[0]) >= entry[1]) {
                currentMatchCount++
            }
        }

        if(currentMatchCount == matchCount) {
            return s.slice(start,start+t.length);
        }

        let r=start+t.length;
        while(r<s.length) {
            if(tMap.has(s[r])) {
                let newVal = (sMap.get(s[r]) ?? 0)+1
                sMap.set(s[r], newVal)
                if (newVal == tMap.get(s[r])) {
                    // console.log(`increasing match count for s[${r}] - ${s[r]}`)
                    currentMatchCount++;
                }
            }
            while(currentMatchCount == matchCount) {
                // console.log(`matched for ${r}-${start}+1`,r-start+1)
                // console.log('matched for sMap',sMap)
                if(shortestStr == "" || shortestStr.length > r-start+1) {
                    shortestStr = s.slice(start, r+1)
                }
                
                sMap.set(s[start], sMap.get(s[start])-1)
                if(sMap.get(s[start]) < tMap.get(s[start])) {
                    currentMatchCount--;
                }
                start++;

                while(!tMap.has(s[start]) && start<s.length) { 
                    // sMap.set(s[start], sMap.get(s[start])-1)
                    start++;
                }
                // console.log(`next window with sMap`,sMap)
                // console.log(`next window start: ${start} - ${s[start]}`)
            } 
            r++;
            // console.log(`current check for start to r : ${start} - ${r} : ${s[start]} - ${s[r]}`)
        }
        if(currentMatchCount == matchCount) {
            // console.log(`${r}-${start}+1`,r-start+1)
            // console.log('matched for sMap',sMap)
            if(shortestStr == "" || shortestStr.length > r-start) {
                shortestStr = s.slice(start, r)
            }
        }
        // console.log('matchcount',currentMatchCount)
        // console.log('smap',sMap)
        return shortestStr; 
    }
}
