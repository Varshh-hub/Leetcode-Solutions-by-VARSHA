class Solution(object):
    def xorOperation(self, n, start):
        result = 0
        for i in range(n):
            result ^= start + 2 * i
        return result
