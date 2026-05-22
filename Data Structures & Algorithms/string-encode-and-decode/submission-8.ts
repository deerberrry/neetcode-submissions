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
        while ( j<str.length) { 
            if(str[j] == "#") {
                let length = Number(str.slice(i,j))
                i= j+length+1;
                result.push(str.slice(j+1, i))
                j=i+1
            }
            else j++;
        }
        return result;
    }
}
