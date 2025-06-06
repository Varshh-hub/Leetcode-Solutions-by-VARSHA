class Solution(object):
    def maxProfit(self, prices):
        \\\
        :type prices: List[int]
        :rtype: int
        \\\
        if not prices:
            return 0

        n = len(prices)
        hold = -prices[0]
        sold = 0
        rest = 0

        for i in range(1, n):
            prevh = hold
            prevs = sold
            prevr = rest

            hold = max(prevh, prevr - prices[i])
            sold = prevh + prices[i]
            rest = max(prevr, prevs)

        return max(sold, rest)



