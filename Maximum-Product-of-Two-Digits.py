class Solution(object):
    def maxProduct(self, n):
        """
        :type n: int
        :rtype: int
        """
        d = []
        while n > 0:
            d.append(n % 10)
            n //= 10

        maxp = 0
        for i in range(len(d)):
            for j in range(i + 1, len(d)):
                maxp = max(maxp, d[i] * d[j])
        
        return maxp


