class Solution(object):
    def convertToTitle(self, col):
        \\\
        :type columnNumber: int
        :rtype: str
        \\\
        x = \\
        while col > 0:
            x = chr(ord('A') + (col - 1) % 26) + x            
            col = (col - 1) // 26
        return x