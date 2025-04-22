class Solution(object):
    def removeOuterParentheses(self, s):
        """
        :type s: str
        :rtype: str
        """
        res = ""
        count = 0
        x = len(s)

        for i in range(x):
            if s[i] == '(':
                if count > 0:
                    res += s[i]  
                count += 1 
            else:
                count -= 1
                if count > 0:
                    res += s[i]

        return res
