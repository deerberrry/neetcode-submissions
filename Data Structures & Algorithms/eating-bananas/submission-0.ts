class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let maxVal = piles[0];
        for(let i=1;i<piles.length;i++) {
            if(piles[i] > maxVal) maxVal = piles[i]
        }
        if(h== piles.length) return maxVal;

        let start = 1;
        let end = maxVal;
        let currentRate = maxVal;
        let getHours = (rate)=>{
            let hours =0;
            for(let i=0;i<piles.length;i++) {
                hours= hours + Math.ceil(piles[i]/rate)
            }
            return hours;
        }

        while(start<=end) {
            let mid = Math.floor((start+end)/2)
            let hours = getHours(mid);
            // console.log(`start:${start}, end:${end}, mid:${mid}, hours=${hours}`)
            if(hours > h) {
                start = mid+1;
            }
            else {
                if(mid < currentRate)  currentRate = mid;
                end = mid - 1;
            }
        }

        return currentRate;
    }
}
