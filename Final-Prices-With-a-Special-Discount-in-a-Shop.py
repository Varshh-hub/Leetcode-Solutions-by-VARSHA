class Solution(object):
    def finalPrices(self, p):
        """
        :type prices: List[int]
        :rtype: List[int]
        """
        n = len(p)
        
        for i in range(n):
            for j in range(i + 1, n):
                if p[j] <= p[i]:
                    p[i] -= p[j]
                    break
        return p
