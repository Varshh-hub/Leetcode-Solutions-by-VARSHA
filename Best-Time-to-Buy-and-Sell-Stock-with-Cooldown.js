/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
        let n = prices.length;
        let hold = -prices[0];
        let sold = 0;
        let rest = 0;

        if(n == 0) return 0;

        for(let i = 1; i < n; i++){
            let prevh = hold;
            let prevs = sold;
            let prevr = rest;

            hold = Math.max(prevh, prevr - prices[i]);
            sold = prevh + prices[i];
            rest = Math.max(prevr, prevs);
        }
        return Math.max(sold, rest);
};