class Solution(object):
    def busyStudent(self, a, b, t):
        c = 0
        for i in range(len(a)):
            if a[i] <= t <= b[i]:
                c += 1
        return c
