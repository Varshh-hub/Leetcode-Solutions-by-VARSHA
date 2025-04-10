class Solution(object):
    def canPlaceFlowers(self, f, n):
        \\\
        :type flowerbed: List[int]
        :type n: int
        :rtype: bool
        \\\

        if n == 0:
            return True

        length = len(f)

        for i in range(length):
            if f[i] == 0:
                lft = (i == 0 or f[i - 1] == 0)
                rgt = (i == length - 1 or f[i + 1] == 0)

                if lft and rgt:
                    f[i] = 1
                    n -= 1

                    if n == 0:
                        return True

        return n == 0
