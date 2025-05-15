class Solution(object):
    def addBinary(self, a, b):
        \\\
        :type a: str
        :type b: str
        :rtype: str
        \\\
        res = \\
        i, j, carry = len(a) - 1, len(b) - 1, 0
        while i >= 0 or j >= 0 or carry:
            x = int(a[i]) if i >= 0 else 0
            y = int(b[j]) if j >= 0 else 0
            s = x + y + carry
            res = str(s % 2) + res
            carry = s // 2
            i -= 1
            j -= 1
        return res