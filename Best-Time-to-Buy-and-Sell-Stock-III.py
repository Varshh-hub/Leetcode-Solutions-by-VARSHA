class Solution(object):
    def maxProfit(self, prices):
        \\\
        :type prices: List[int]
        :rtype: int
        \\\
        minp = float('inf')
        maxp = -prices[0]
        firstp = 0
        totalp = 0
        n = len(prices)
        
        for i in range(n):
            minp = min(minp, prices[i])
            firstp = max(firstp, prices[i] - minp)
            maxp = max(maxp, firstp - prices[i])
            totalp = max(totalp, maxp + prices[i])
        
        return totalp
