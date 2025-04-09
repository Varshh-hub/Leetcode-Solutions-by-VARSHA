class Solution(object):
    def gcdOfStrings(self, str1, str2):
        if str1 + str2 != str2 + str1:
            return ""

        length1 = len(str1)
        length2 = len(str2)

        while length2:
            length1, length2 = length2, length1 % length2

        return str1[:length1]
