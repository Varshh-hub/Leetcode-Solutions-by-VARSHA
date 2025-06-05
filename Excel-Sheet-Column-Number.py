class Solution(object):
    def titleToNumber(self, columnTitle):
        \\\
        :type columnTitle: str
        :rtype: int
        \\\
        x = 0
        for i in columnTitle:
            x = x * 26 + (ord(i) - ord('A') + 1)
        return x