class Solution(object):
    def getCommon(self, a, b):  
        i = 0
        j = 0
        while i < len(a) and j < len(b):
            if a[i] == b[j]:
                return a[i]
            elif a[i] < b[j]:
                i += 1
            else:
                j += 1
        return -1
