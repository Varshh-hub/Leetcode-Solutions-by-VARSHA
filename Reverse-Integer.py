class Solution(object):
    def reverse(self, x):
        \\\
        :type x: int
        :rtype: int
        \\\
        temp = abs(x)
        rev = 0

        while temp != 0:
            lastDigit = temp % 10
            if rev > (2**31 - 1 - lastDigit) // 10:
                return 0
            rev = rev * 10 + lastDigit
            temp = temp // 10

        return -rev if x < 0 else rev