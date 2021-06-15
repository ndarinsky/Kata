/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * 
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:

    1 <= prices.length <= 105
    0 <= prices[i] <= 104
 * 
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let maxProfit = 0
    
    if (!prices || prices.length<2) return 0
    
    let minValue = prices[0]
    for (let i=1; i<prices.length; i++) {
        const profit = prices[i]-minValue 
        if (profit > maxProfit) {
           maxProfit = profit    
        } else if (profit < 0) {
            minValue = prices[i]
        }    
    }
    
    return maxProfit
};