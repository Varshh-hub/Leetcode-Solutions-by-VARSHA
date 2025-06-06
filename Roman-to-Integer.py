class Solution(object):
    def romanToInt(self, s):
        \\\
        :type s: str
        :rtype: int
        \\\
        m = {
            'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
        }
        
        result = 0
        n = len(s)
        
        for i in range(n):
            if i < n - 1 and m[s[i]] < m[s[i + 1]]:
                result -= m[s[i]]  
            else:
                result += m[s[i]]  
        
        return result