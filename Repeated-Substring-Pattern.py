class Solution(object):
    def repeatedSubstringPattern(self, s):
        n = len(s)
        for i in range(n // 2, 0, -1):
            if n % i == 0:
                sub = s[:i]
                if sub * (n // i) == s:
                    return True
        return False
