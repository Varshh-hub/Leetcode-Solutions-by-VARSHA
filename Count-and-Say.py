class Solution(object):
    def countAndSay(self, n):
        \\\
        :type n: int
        :rtype: str
        \\\
        res = \1\
        for _ in range(n - 1):
            curr = \\
            i = 0
            n = len(res)
            while i < n:
                count = 1
                while (i + 1) < n and res[i] == res[i + 1]:
                    i = i + 1
                    count = count + 1
                curr = curr + (str(count) + res[i]) 
                i = i + 1
            res = curr
        return res