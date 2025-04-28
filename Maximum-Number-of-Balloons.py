class Solution(object):
    def maxNumberOfBalloons(self, text):
        """
        :type text: str
        :rtype: int
        """
        b = a = l = o = n = 0
        
        for ch in text:
            if ch == 'b':
                b += 1
            elif ch == 'a':
                a += 1
            elif ch == 'l':
                l += 1
            elif ch == 'o':
                o += 1
            elif ch == 'n':
                n += 1
        
        return min(o // 2, l // 2, b, a, n)
