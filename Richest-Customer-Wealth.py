class Solution(object):
    def maximumWealth(self, a):
        m = 0
        for i in range(len(a)):
            s = 0
            for j in range(len(a[i])):
                s += a[i][j]
            if s > m:
                m = s
        return m
