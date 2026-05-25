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

        let currentMatchCount=0
        // let i=start;
        // for(;(i<s.length);i++) {
        //     if(tMap.has(s[i])) {
        //         let newVal = (sMap.get(s[i]) ?? 0)+1
        //         sMap.set(s[i], newVal)
        //         if (newVal == tMap.get(s[i])) {
        //             currentMatchCount++;
        //         }
        //         if(currentMatchCount == matchCount) break;
        //     }
        // }

        // console.log(`first window : start-r: ${start}-${i}: ${s[start]}-${s[i]}`)
        // console.log(`currentMatchCount`, currentMatchCount)
        // if(currentMatchCount!==matchCount) return "";
        // while(currentMatchCount == matchCount) {
        //     if(shortestStr == "" || shortestStr.length > i-start+1) {
        //         shortestStr = s.slice(start, i+1)
        //     }
            
        //     sMap.set(s[start], sMap.get(s[start])-1)
        //     if(sMap.get(s[start]) < tMap.get(s[start])) {
        //         currentMatchCount--;
        //     }
        //     start++;

        //     while(!tMap.has(s[start]) && start<s.length) { 
        //         start++;
        //     }
        // } 

        let r=start;
        while(r<s.length) {
            if(tMap.has(s[r])) {
                let newVal = (sMap.get(s[r]) ?? 0)+1
                sMap.set(s[r], newVal)
                if (newVal == tMap.get(s[r])) {
                    currentMatchCount++;
                }
            }
            while(currentMatchCount == matchCount) {
                if(shortestStr == "" || shortestStr.length > r-start+1) {
                    shortestStr = s.slice(start, r+1)
                }
                
                sMap.set(s[start], sMap.get(s[start])-1)
                if(sMap.get(s[start]) < tMap.get(s[start])) {
                    currentMatchCount--;
                }
                start++;

                while(!tMap.has(s[start]) && start<s.length) { 
                    start++;
                }
            } 
            r++;
        }
        // if(currentMatchCount == matchCount) {
        //     if(shortestStr == "" || shortestStr.length > r-start) {
        //         shortestStr = s.slice(start, r)
        //     }
        // }
        return shortestStr; 
    }
}
