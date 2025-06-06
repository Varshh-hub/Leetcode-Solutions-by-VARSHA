class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if (prices.empty()) return 0;

        int n = prices.size();
        int hold = -prices[0];
        int sold = 0;
        int rest = 0;

        for(int i = 1; i < n; i++){
            int prevh = hold;
            int prevs = sold;
            int prevr = rest;

            hold = max(prevh, prevr - prices[i]);
            sold = prevh + prices[i];
            rest = max(prevr, prevs);
        }
        return max(sold, rest);
    }
};
