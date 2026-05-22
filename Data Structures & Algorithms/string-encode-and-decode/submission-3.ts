class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res= strs.map(str=>
            str.length + "#"+ str
        ).join("")
        console.log('res', res);
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result = []
        let i =0, j=1;
        while (i<str.length && j<str.length) {
            if(str[j] == "#") {
                let length = Number(str.slice(i,j))
                result.push(str.slice(j+1, j+length+1))
                i= j+length+1;
                j= i+1;
            }
            else j++;
        }
        return result;
    }
}
