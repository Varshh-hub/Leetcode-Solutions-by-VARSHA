class Solution(object):
    def maxRepeating(self, s, w):
        k = 0
        t = w
        while t in s:
            k += 1
            t += w
        return k
