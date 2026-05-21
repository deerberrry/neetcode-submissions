class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const lengthStr = strs.map(str => str.length).join(',') + "$"
        return lengthStr + strs.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let splitIndex = str.indexOf("$")
        if(splitIndex == 0) return [];
        let lengthArr = str.slice(0, splitIndex).split(',');
        let pos = splitIndex+1;
        let result = []
        for (let length of lengthArr) {
            if(length == '0') result.push("");
            else {
                let newPos = pos+ Number(length)
                result.push(str.slice(pos,newPos))
                pos = newPos;
            }
        }
        return result;
    }
}
