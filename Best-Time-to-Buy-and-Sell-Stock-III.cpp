class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int n = prices.size();
        int minp = INT_MAX;
        int firstp = 0;
        int maxp = -prices[0];
        int totalp = 0;

        for (int i = 0; i < n; i++) {
            minp = min(minp, prices[i]);
            firstp = max(firstp, prices[i] - minp);
            maxp = max(maxp, firstp - prices[i]);
            totalp = max(totalp, maxp + prices[i]);
        }

        return totalp;
    }
};
