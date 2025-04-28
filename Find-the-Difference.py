class Solution(object):
    def findTheDifference(self, s, t):
        \\\
        :type s: str
        :type t: str
        :rtype: str
        \\\
        sums = 0
        sumt = 0
        for i in range(len(s)):
            sums += ord(s[i])
        for i in range(len(t)):
            sumt += ord(t[i])
        return chr(sumt - sums)