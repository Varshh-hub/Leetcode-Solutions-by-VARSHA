class Solution(object):
    def maxProfit(self, prices, fee):
        \\\
        :type prices: List[int]
        :type fee: int
        :rtype: int
        \\\
        cash = 0          
        hold = -prices[0]

        for price in prices[1:]:
            cash = max(cash, hold + price - fee) 
            hold = max(hold, cash - price)       

        return cash
