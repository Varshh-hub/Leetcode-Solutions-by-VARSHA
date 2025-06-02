class Solution(object):
    def findComplement(self, num):
        \\\
        :type num: int
        :rtype: int
        \\\
        bits = num.bit_length()
        mask = (1 << bits) - 1
        return num ^ mask
