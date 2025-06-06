class Solution {
    public int maxProfit(int[] prices) {
        int n = prices.length;
        int hold = -prices[0];
        int sold = 0;
        int rest = 0;

        if(n == 0) return 0;

        for(int i = 1; i < n; i++){
            int prevh = hold;
            int prevs = sold;
            int prevr = rest;

            hold = Math.max(prevh, prevr - prices[i]);
            sold = prevh + prices[i];
            rest = Math.max(prevr, prevs);
        }
        return Math.max(sold, rest);
    }
}