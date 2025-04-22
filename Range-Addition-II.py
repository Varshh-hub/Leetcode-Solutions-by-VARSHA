class Solution(object):
    def maxCount(self, m, n, x):
        \\\
        :type m: int
        :type n: int
        :type ops: List[List[int]]
        :rtype: int
        \\\
        if not x:
            return m * n

        a = m
        b = n

        for op in x:
            a = min(a, op[0])
            b = min(b, op[1])

        return a * b
