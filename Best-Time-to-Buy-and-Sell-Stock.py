class Solution:
    def maxProfit(self, prices):
        profit = 0
        minPrice = prices[0]

        for price in prices[1:]:
            minPrice = min(minPrice, price)
            profit = max(profit, price - minPrice)

        return profit
