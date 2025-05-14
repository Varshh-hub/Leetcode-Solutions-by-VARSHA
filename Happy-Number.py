class Solution(object):
    def isHappy(self, num):
        \\\
        :type num: int
        :rtype: bool
        \\\
        def get_next(n):
            total = 0
            while n > 0:
                digit = n % 10
                total += digit * digit
                n = n // 10
            return total

        seen = set()
        while num != 1 and num not in seen:
            seen.add(num)
            num = get_next(num)

        return num == 1
