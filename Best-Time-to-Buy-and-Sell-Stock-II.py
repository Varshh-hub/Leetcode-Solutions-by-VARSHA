class Solution(object):
    def maxProfit(self, p):
        \\\
        :type prices: List[int]
        :rtype: int
        \\\
        maxp = 0
        psize = len(p)

        for i in range (1, psize):
            if p[i] > p[i-1]:
                maxp += p[i] - p[i-1]

        return maxp