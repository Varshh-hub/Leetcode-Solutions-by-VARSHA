class Solution {
    public int maxProfit(int[] prices) {
        int n = prices.length;
        int minp = Integer.MAX_VALUE;
        int firstp = 0;
        int maxp = -prices[0];
        int totalp = 0;

        for (int i = 0; i < n; i++) {
            minp = Math.min(minp, prices[i]);                    
            firstp = Math.max(firstp, prices[i] - minp);          
            maxp = Math.max(maxp, firstp - prices[i]);            
            totalp = Math.max(totalp, maxp + prices[i]);          
        }

        return totalp;
    }
}
