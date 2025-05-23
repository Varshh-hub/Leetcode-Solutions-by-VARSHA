class Solution(object):
    def truncateSentence(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """
        ans = ""
        n = len(s)
        for i in range(n):
            if(s[i] == ' '):
                k = k - 1
            if (k == 0):
                break
            else:
                ans = ans + s[i]
        return ans