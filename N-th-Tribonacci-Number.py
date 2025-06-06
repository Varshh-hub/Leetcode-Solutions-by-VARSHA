class Solution(object):
    def tribonacci(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n == 0:
            return 0
        elif n == 1 or n == 2:
            return 1
        
        a, b, c = 0, 1, 1
        for _ in range(3, n + 1):
            next_val = a + b + c
            a, b, c = b, c, next_val
        
        return c
