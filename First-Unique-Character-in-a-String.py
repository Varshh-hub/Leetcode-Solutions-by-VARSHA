class Solution(object):
    def firstUniqChar(self, s):
        \\\
        :type s: str
        :rtype: int
        \\\
        count = {}
        for c in s:
            count[c] = count.get(c, 0) + 1
        for i, c in enumerate(s):
            if count[c] == 1:
                return i
        return -1