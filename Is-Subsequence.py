class Solution(object):
    def isSubsequence(self, s, t):
        \\\
        :type s: str
        :type t: str
        :rtype: bool
        \\\
        i = 0
        j = 0

        x = len(s)
        y = len(t)

        while (i < x and j < y):
            if (s[i] == t[j]):
                i = i + 1
            j = j + 1

        return i == x