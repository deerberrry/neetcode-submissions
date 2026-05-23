class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let buyPrice = prices[0];
    for (let i=0; i<prices.length; i++) {
        let tempProfit = prices[i] - buyPrice;
        if(prices[i] < buyPrice) buyPrice = prices[i]
        if(tempProfit > maxProfit) maxProfit = tempProfit
    }
    return maxProfit
    }
}
