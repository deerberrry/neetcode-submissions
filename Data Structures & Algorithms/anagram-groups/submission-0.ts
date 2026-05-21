class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let arrayToStrMap = new Map<string, string[]>();
        let base = 'a'.charCodeAt(0);
        for( let str of strs) {
            let countArray = (new Array(26)).fill(0);
            for(let ch of str) {
                countArray[ch.charCodeAt(0) -base]++;
            }
            let prev = arrayToStrMap.get(countArray.toString())
            let newVal = prev? [...prev, str]: [str]
            arrayToStrMap.set(countArray.toString(), newVal);
        }
        return [...arrayToStrMap.values()];
    }
}
