class Solution(object):
    def longestPalindrome(self, s):
        \\\
        :type s: str
        :rtype: int
        \\\
        count = [0] * 128 
        for c in s:
            count[ord(c)] += 1
        
        length = 0
        oddFound = False
        for c in count:
            if c % 2 == 0:
                length += c
            else:
                length += c - 1
                oddFound = True
        
        if oddFound:
            length += 1
        
        return length
